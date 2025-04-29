import React, { useEffect, useState } from "react";
import { CreateTrip } from "./CreateTrip";
import { NavBar } from "./NavBar";
import { Button } from "./Button";
import { Trip } from "./Trip";
import { SelectDropdown } from "./SelectDropdown";
import logo1 from "../images/logo1.png";
import MenuIcon from "@mui/icons-material/Menu";
import { isAfter, parseISO } from "date-fns";

export const Dashboard = () => {
  // State to control which component is displayed
  const [displayDefault, setDisplayDefault] = useState(true);
  const [displayNavBar, setDisplayNavBar] = useState(false);
  const [trips, setTrips] = useState([]);
  const [displayCheck, setDisplayCheck] = useState(false);
  const [toBeDeleted, setToBeDeleted] = useState([]);

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  // Refresh/update trip list after creating new trip
  const refreshTrips = () => {
    const storedObjects = JSON.parse(localStorage.getItem("trips")) || [];

    // Update trip statuses
    const passedChecked = storedObjects.map((x) => {
      // If today's date is after end date, mark as passed
      if (isAfter(parseISO(today), parseISO(x.days[x.days.length - 1]))) {
        return { ...x, passed: true };
      } else {
        return { ...x, passed: false };
      }
    });

    // Update "trips" in localStorage with modified trip list (passedChecked)
    // JSON.stringify(passedChecked)) converts "trips" array into JSON string (localStorage can only store strings)
    localStorage.setItem("trips", JSON.stringify(passedChecked));
    // Updates state
    setTrips(passedChecked);
  };

  // Load trips from localStorage on component mount
  useEffect(() => {
    refreshTrips();
  }, []);

  // If a Trip is checked, push its id to toBeDeleted
  const handleBoxChecked = (id, isChecked) => {
    setToBeDeleted((prev) =>
      isChecked
        ? [...prev, id]
        : prev.filter((x) => x !== id)
    );
  };

  // Red delete button
  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this trip(s)?") === true) {
      const deleteChecked = trips.filter((x) => !toBeDeleted.includes(x.id));
      localStorage.setItem("trips", JSON.stringify(deleteChecked));
      setTrips(deleteChecked);
      setDisplayCheck(false);
    }
  };

  // Sorting (ascending)
  const handleSortAscending = () => {
    const sortAscending = [...trips].sort((a, b) =>
      new Date(a.days[0]) - new Date(b.days[0])
    );
    setTrips(sortAscending);
  };

  // Sorting (descending)
  const handleSortDescending = () => {
    const sortDescending = [...trips].sort((a, b) =>
      new Date(b.days[0]) - new Date(a.days[0])
    );
    setTrips(sortDescending);
  }


  return (
    <div className="flex flex-row flex-nowrap h-full">
      {/* Left section with logo */}
      <div className="w-2/3 grid grid-cols-1 grid-rows-5 bg-white">
        <img
          src={logo1}
          alt="Logo"
          className="w-1/2 row-start-2 row-end-2 justify-self-center"
        />
      </div>

      {/* Right section with navigation management */}
      <div className="bg-gradient-to-r from-wandernest-blue to-wandernest-pink w-1/3">
        {/* Display NavBar if toggled */}
        {displayNavBar && (
          <NavBar handleNavBar={() => setDisplayNavBar(false)} />
        )}

        {/* Display CreateTrip form when creating new trip */}
        {!displayDefault && (
          <CreateTrip
            handleBackToDashboard={() => {
              setDisplayDefault(true);
              refreshTrips();
            }}
            handleNavBar={() => setDisplayNavBar(true)}
          />
        )}

        {/* Default dashboard view showing existing trips */}
        {displayDefault && (
          <div className="w-full h-full">
            <div className="grid grid-cols-3 grid-rows-1 w-full items-center px-4 h-[8%]">
              <h2 className="text-2xl col-start-2 col-end-3 text-center">
                Dashboard
              </h2>
              <MenuIcon
                fontSize="large"
                sx={{ cursor: "pointer" }}
                className="grid col-start-3 col-end-4 justify-self-end"
                onClick={() => setDisplayNavBar(true)}
              />
            </div>

            {/* Trip list */}
            <div className="flex flex-col justify-between items-center h-[80%] rounded-md m-6 p-4 bg-[rgba(255,255,255,.7)]">
              <div className="h-5/6 w-full pb-3">
                <div className="flex flex-row w-full justify-end mb-2">
                  <SelectDropdown
                    sortAscending={() => handleSortAscending()}
                    sortDescending={() => handleSortDescending()}
                  />
                </div>
                <div className="flex flex-col h-full w-full overflow-scroll gap-2">
                  {trips.length > 0 ? (
                    trips.map((trip) => (
                      <Trip
                        key={trip.id}
                        tripId={trip.id}
                        name={trip.title}
                        startDate={trip.days[0]}
                        endDate={trip.days[trip.days.length - 1]}
                        passed={trip.passed}
                        checkboxTrigger={displayCheck}
                        boxChecked={handleBoxChecked}
                      />
                    ))
                  ) : (
                    <p className="bg-white rounded-lg text-center p-2 border border-2 border-transparent">
                      No trips available. Create one!
                    </p>
                  )}
                </div>
              </div>
              {!displayCheck && (
                <div className="w-full flex items-center gap-3">
                  <Button
                    text={"New Trip"}
                    onClick={() => setDisplayDefault(false)}
                  />
                  <Button
                    text={"Delete"}
                    onClick={() => setDisplayCheck(true)}
                  />
                </div>
              )}
              {displayCheck && (
                <div className="w-full flex items-center gap-3">
                  <Button
                    text={"Delete"}
                    onClick={() => handleDelete()}
                    variant="red"
                  />
                  <Button
                    text={"Cancel"}
                    onClick={() => setDisplayCheck(false)}
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
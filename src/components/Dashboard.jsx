import React, { useState, useEffect } from "react";
import { CreateTrip } from "./CreateTrip";
import { NavBar } from "./NavBar";
import { Button } from "./Button";
import { Trip } from "./Trip";
import logo1 from "../images/logo1.png";
import MenuIcon from "@mui/icons-material/Menu";

export const Dashboard = () => {
  const [displayDefault, setDisplayDefault] = useState(true);
  const [displayNavBar, setDisplayNavBar] = useState(false);
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    // Initialize localStorage if "trips" doesn't exist
    const storedTrips = JSON.parse(localStorage.getItem("trips")) || [];
    setTrips(storedTrips);
  }, []);

  // Function to refresh trips from localStorage (after a new trip is added)
  const refreshTrips = () => {
    const storedTrips = JSON.parse(localStorage.getItem("trips")) || [];
    setTrips(storedTrips);
  };

  return (
    <div className="flex flex-row flex-nowrap h-full">
      <div className="w-2/3 grid grid-cols-1 grid-rows-5 bg-white">
        <img
          src={logo1}
          alt="Logo"
          className="w-1/2 row-start-2 row-end-2 justify-self-center"
        />
      </div>
      <div className="bg-gradient-to-r from-wandernest-blue to-wandernest-pink w-1/3">
        {displayNavBar && <NavBar handleNavBar={() => setDisplayNavBar(false)} />}
        {!displayDefault && (
          <CreateTrip 
            handleBackToDashboard={() => {
              setDisplayDefault(true);
              refreshTrips(); // Refresh the trip list when a new trip is added
            }} 
            handleNavBar={() => setDisplayNavBar(true)}
          />
        )}
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
            <div className="flex flex-col justify-between items-center h-[80%] rounded-md m-6 p-4 bg-[rgba(255,255,255,.7)]">
              <div className="flex flex-col w-full gap-2 mb-4 overflow-scroll">
                {trips.length > 0 ? (
                  trips.map((trip) => (
                    <Trip key={trip.id} name={trip.name} startDate={trip.startDate} endDate={trip.endDate} />
                  ))
                ) : (
                  <p>No trips available. Create one!</p>
                )}
              </div>
              <Button
                text={"New Trip"}
                onClick={() => setDisplayDefault(false)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

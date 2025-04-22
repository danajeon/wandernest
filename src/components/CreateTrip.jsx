import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "./Button";
import { eachDayOfInterval, formatISO, parseISO } from "date-fns";

export const CreateTrip = ({ handleBackToDashboard, handleNavBar }) => {
  const [tripName, setTripName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Logs trip details whenever states change
  useEffect(() => {
    console.log("v Trip Detail v");
    console.log(tripName, startDate, endDate);
  }, [tripName, startDate, endDate]);

  const handleCreateTrip = () => {
    if (!tripName || !startDate || !endDate) {
      alert("Please fill in all fields.");
      return; // Exits function early if conditions met
    }

    // Retrieve existing "trips" from local storage (if any), or initialize empty array
    const existingTrips = JSON.parse(localStorage.getItem("trips")) || [];

    // Unique trip ID based on trip creation time (down to millisecond)
    const now = new Date().toISOString();
    const tripId = `tr${now}`;

    // Convert start and end date strings into Date objects
    const parsedStartDate = parseISO(startDate);
    const parsedEndDate = parseISO(endDate);

    // Retrieve all dates between start and end dates
    const daysRaw = eachDayOfInterval({ // Returns an array
      start: parsedStartDate,
      end: parsedEndDate
    });

    // Convert raw dates to ISO format
    const daysISO = daysRaw.map((x) => formatISO(x, { representation: 'date' })); // Returns an array

    // Create newTrip object
    const newTrip = {
      id: tripId,
      title: tripName,
      days: daysISO,
      passed: false // Initially set to false (trip has not passed yet)
    };

    // Add new trip to existing trips array
    existingTrips.push(newTrip);
    // Store updated trips array back to localStorage
    localStorage.setItem("trips", JSON.stringify(existingTrips));

    // Reset form fields after trip is created
    setTripName("");
    setStartDate("");
    setEndDate("");

    alert("Trip created successfully!");

    handleBackToDashboard();
  };

  return (
    <div className="h-full">
      <div className="flex flex-row justify-between items-center px-4 h-[8%]">
        <ArrowBackIcon
          fontSize="large"
          sx={{ cursor: "pointer" }}
          onClick={handleBackToDashboard}
        />
        <h2 className="text-2xl">New Trip</h2>
        <MenuIcon
          fontSize="large"
          sx={{ cursor: "pointer" }}
          onClick={handleNavBar}
        />
      </div>
      <div className="flex flex-col justify-between items-center h-[80%] rounded-md m-6 p-4 bg-[rgba(255,255,255,.7)]">
        <div className="flex flex-col w-full">
          <label htmlFor="tripName">Trip Name</label>
          <input
            type="text"
            className="border border-gray-400 rounded-lg focus:outline-none focus:ring-2 mb-4 p-1"
            value={tripName}
            onChange={(e) => setTripName(e.target.value)}
          />

          <label htmlFor="StartDate">Start Date</label>
          <input
            type="date"
            className="border border-gray-400 rounded-lg focus:outline-none focus:ring-2 mb-4 p-1"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />

          <label htmlFor="EndDate">End Date</label>
          <input
            type="date"
            className="border border-gray-400 rounded-lg focus:outline-none focus:ring-2 mb-4 p-1"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <Button
          text={"Create Trip"}
          onClick={handleCreateTrip}
        />
      </div>
    </div>
  );
};

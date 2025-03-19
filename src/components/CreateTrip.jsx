import React, { useState, useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "./Button";

export const CreateTrip = ({ handleBackToDashboard, handleNavBar }) => {
  const [tripName, setTripName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    console.log("v Trip Detail v");
    console.log(tripName, startDate, endDate);
  }, [tripName, startDate, endDate]);

  const handleCreateTrip = () => {
    if (!tripName || !startDate || !endDate) {
      alert("Please fill in all fields.");
      return;
    }

    // Retrieve existing trips or initialize if not found
    const existingTrips = JSON.parse(localStorage.getItem("trips")) || [];

    // Generate unique tripId (tr001, tr002, tr003, ...)
    const tripId = `tr${String(existingTrips.length + 1).padStart(3, "0")}`;

    // Create new trip object with an empty locations array
    const newTrip = {
      id: tripId,
      name: tripName,
      startDate,
      endDate,
      locations: [], // Empty array for future locations
    };

    // Append new trip to local storage
    existingTrips.push(newTrip);
    localStorage.setItem("trips", JSON.stringify(existingTrips));

    // Reset form fields
    setTripName("");
    setStartDate("");
    setEndDate("");

    alert("Trip created successfully!");

    handleBackToDashboard()
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
        <Button text={"Create Trip"} onClick={handleCreateTrip} />
      </div>
    </div>
  );
};

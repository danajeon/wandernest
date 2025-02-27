import React from "react";
import { useState, useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "./Button";

export const CreateTrip = ({ handleBackToDashboard, handleNavBar }) => {
  const [tripName, setTripName] = useState("");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  useEffect(() => {
    console.log("v Trip Detail v");
    console.log(tripName);
    console.log(startDate);
    console.log(endDate);
  }, [tripName, startDate, endDate]);

  return (
    <div className="h-full">
      <div className="flex flex-row justify-between items-center px-4 h-[8%]">
        <ArrowBackIcon
          fontSize="large"
          sx={{
            cursor: "pointer",
          }}
          onClick={handleBackToDashboard}
        />
        <h2 className="text-2xl">New Trip</h2>
        <MenuIcon
          fontSize="large"
          sx={{
            cursor: "pointer",
          }}
          onClick={handleNavBar}
        />
      </div>
      <div className="flex flex-col justify-between items-center h-[80%] rounded-md m-6 p-4 bg-[rgba(255,255,255,.7)] ">
        <div className="flex flex-col w-full">
          <label htmlFor="tripName">Trip Name</label>
          <input
            type="text"
            className="border border-gray-400 rounded-lg focus:outline-none focus:ring-2 mb-4 p-1"
            onChange={(e) => setTripName(e.target.value)}
          />

          <label htmlFor="StartDate">Start Date</label>
          <input
            type="date"
            className="border border-gray-400 rounded-lg focus:outline-none focus:ring-2 mb-4 p-1"
            onChange={(e) => setStartDate(e.target.value)}
          />

          <label htmlFor="EndDate">End Date</label>
          <input
            type="date"
            className="border border-gray-400 rounded-lg focus:outline-none focus:ring-2 mb-4 p-1"
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <Button text={"Create Trip"} />
      </div>
    </div>
  );
};

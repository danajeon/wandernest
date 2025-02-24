import React, { useS, useState } from "react";
import { CreateTrip } from "./CreateTrip";
import { NavBar } from "./NavBar";
import { Button } from "./Button";
import { Trip } from "./Trip";
import logo1 from "../images/logo1.png";
import MenuIcon from "@mui/icons-material/Menu";

export const Dashboard = () => {
  const [displayCreateAccount, setDisplayCreateAccount] = useState(false);

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
        {displayCreateAccount && <CreateTrip handleBacktoDashboard={() => setDisplayCreateAccount(false)}/>}
        {!displayCreateAccount && (
          <div className="w-full h-full">
            <div className="grid grid-cols-3 grid-rows-1 w-full items-center px-4 h-[8%]">
              <h2 className="text-2xl col-start-2 col-end-3 text-center">
                Dashboard
              </h2>
              <MenuIcon
                fontSize="large"
                sx={{
                  cursor: "pointer",
                }}
                className="grid col-start-3 col-end-4 justify-self-end"
              />
            </div>
            <div className="flex flex-col justify-between items-center h-[80%] rounded-md m-6 p-4 bg-[rgba(255,255,255,.7)]">
              <div className="flex flex-col w-full gap-2 mb-4 overflow-scroll">
                <Trip />
                <Trip />
                <Trip />
                <Trip />
                <Trip />
                <Trip />
                <Trip />
                <Trip />
                <Trip />
                <Trip />
                <Trip />
                <Trip />
                <Trip />
                <Trip />
                <Trip />
                <Trip />
                <Trip />
              </div>
              <Button
                text={"New Trip"}
                onClick={() => setDisplayCreateAccount(true)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

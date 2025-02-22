import React from "react";
import logo1 from "../images/logo1.png";

export const Dashboard = () => {
  return (
    <div className="flex flex-row flex-nowrap h-full">
      <div className="w-3/4 grid grid-cols-1 grid-rows-5 bg-white">
        <img
          src={logo1}
          alt="Logo"
          className="w-1/3 row-start-2 row-end-2 justify-self-center"
        />
      </div>
      <div className="bg-gradient-to-r from-wandernest-blue to-wandernest-pink w-1/4">
      </div>
    </div>
  );
};

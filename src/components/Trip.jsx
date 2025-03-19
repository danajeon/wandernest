import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export const Trip = ({ name, startDate, endDate }) => {
  return (
    <div className="bg-white rounded-lg flex flex-row justify-between items-center p-2 border border-2 border-transparent hover:border-wandernest-purple hover:cursor-pointer">
      <span className="text-xl w-[60%]">{name}</span>
      <div className="flex flex-row justify-center items-center">
        <span>{startDate}</span>
        <ArrowRightIcon fontSize="medium" />
        <span>{endDate}</span>
      </div>
    </div>
  );
};
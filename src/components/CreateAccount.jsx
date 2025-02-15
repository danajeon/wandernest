import React from "react";
import { Button } from "./Button"

export const CreateAccount = () => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-8 border border-solid border-black bg-white rounded-3xl flex flex-col items-center px-[20%] py-[3%]">
      <div className="-mb-6">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-wandernest-blue to-wandernest-pink text-6xl">Create Account</span>
      </div>
      <div className="flex flex-col items-center text-2xl text-gray-400">
        <div className="flex flex-col">
          <label htmlFor="username">Username</label>
          <input type="email" className="border border-gray-400 text-black rounded-lg focus:outline-none focus:ring-2 px-1"/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input type="password" className="border border-gray-400 text-black rounded-lg focus:outline-none focus:ring-2 px-1"/>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <Button text={"Create Account"}/>
      </div>
    </div>
  );
};

import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button"

export const SignIn = ({ handleCreateAccount }) => {

  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/dashboard");
  }

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 space-y-8  bg-white rounded-3xl flex flex-col items-center w-[50%] py-[2%]">
      <div className="flex justify-center text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-wandernest-blue to-wandernest-pink text-5xl py-1">Sign In</span>
      </div>
      <div className="flex flex-col items-center text-xl text-gray-400">
        <div className="flex flex-col">
          <label htmlFor="username">Username</label>
          <input type="email" className="border border-gray-400 text-black rounded-lg focus:outline-none focus:ring-2 px-1" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input type="password" className="border border-gray-400 text-black rounded-lg focus:outline-none focus:ring-2 px-1" />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <Button
          text={"Sign In"}
          onClick={handleLogin}
        />
        <span className="text-wandernest-purple text-xl pt-[5%] hover:underline hover:cursor-pointer" onClick={(handleCreateAccount)}>Create Account</span>
      </div>
    </div>
  );
};

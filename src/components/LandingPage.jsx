import React from "react";
import { useState, useEffect } from "react";
import { SignIn } from "./SignIn";
import { CreateAccount } from "./CreateAccount";
import logo1 from "../images/logo1.png";
import logo2 from "../images/logo2.png";

export const LandingPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [boxTrigger, setBoxTrigger] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setBoxTrigger(true);
    }, 200);
  }, []);

  return (
    <div>
      <img
          src={logo1}
          alt="Logo"
          className="z-10 w-[35%] absolute opacity-1 animate-fadeOut top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      <div className="bg-gradient-to-r from-wandernest-blue to-wandernest-pink w-full h-screen opacity-0 animate-fadeIn">
        
        <img
          src={logo2}
          alt="Logo"
          className="z-10 w-[35%] absolute top-1/2 animate-slideUp left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />

        {boxTrigger && isSignIn && (
          <SignIn handleCreateAccount={() => setIsSignIn(false)} />
        )}
        {!isSignIn && <CreateAccount handleSignIn={() => setIsSignIn(true)} />}
      </div>
    </div>
  );
};

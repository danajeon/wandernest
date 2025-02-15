import React from 'react'
import { useState } from 'react'
import { SignIn } from './SignIn'
import { CreateAccount } from './CreateAccount'

export const LandingPage = () => {
    const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div>
        {isSignIn && <SignIn handleCreateAccount={() => setIsSignIn(false)}/>}
        {!isSignIn && <CreateAccount handleSignIn={() => setIsSignIn(true)}/>}
    </div>
  )
}

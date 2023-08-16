import React, { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

function Auth() {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div>
      {isSignUp ? <SignUp /> : <SignIn />}

      <div
        class="text-black justify-center py-4  flex"
        style={{ background: "#FEFCFB" }}
      >
        {isSignUp ? "Already have an account ?" : "Don't have an account ?"}
        <p
          class="ml-2 no-underline border-b border-blue text-blue-700 hover:cursor-pointer"
          onClick={() => setIsSignUp(!isSignUp)}
        >
          {isSignUp ? "Log in" : "Sign up"}
        </p>
      </div>
      <div className="py-8"></div>
    </div>
  );
}

export default Auth;

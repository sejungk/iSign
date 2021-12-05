import React, {useState} from "react";
import { SignUp } from "./signup";
import { Login } from "./Login";

export const Auth=()=>{
  const [index, setIdex]= useState(false);
  const toggleIndex=()=>{
    setIdex((prevState)=>!prevState);
  };

  return (
    <div className="auth-logic">
      {!index ? <Login/> : <SignUp/>}
      <p onClick={toggleIndex}>
        {!index ? "New to iSign? Create your account here" : "Login to get access to your lessons"}
      </p>
    </div>
  )
}


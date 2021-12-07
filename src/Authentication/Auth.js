import React, { useState } from "react";
import {Signup} from "./Signup"
import {Login} from "./Login";

export const Auth=()=>{
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };
  return (
    <div className="auth">
      {!index ? <Login /> : <Signup />}
      <p onClick={toggleIndex}>
        {!index ? "New to iSign? Click here " : "Already have an acount?"}
      </p>
    </div>
  );
}

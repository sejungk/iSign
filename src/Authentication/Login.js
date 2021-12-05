import React, { useRef, useState } from "react";
import { login, useAuth } from "./context"; 
import { Link } from "react-router-dom";


export const Login=()=>{
  const [ loading, setLoading ] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch(e){
      alert(e);
    }
    setLoading(false);
  }

   return (
   <div className="form">
      <h2> Login </h2>
      <form>
        <input placeholder="Email" type="email" ref={emailRef} />
        <input placeholder="Password" type="password" ref={passwordRef} />
        <Link to="/courses">
        <button onClick={handleLogin}>Log In</button>
        </Link>
      </form>
    </div>
  )
}




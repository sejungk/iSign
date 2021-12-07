import React, { useRef, useState } from "react";
import { login, useAuth, logout } from "./context"; 
import { Link } from "react-router-dom";
import CoursePage from "../components/CoursePage";
import Signup from "./Signup"

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


  async function handleLogout() {
    try {
      await logout(currentUser);
    } catch(e){
      alert(e);
    }
  }
33
   return (

    currentUser ? ( 
      <CoursePage/> 

           
    ) : (   <div className="form">
      <h2> Login </h2>
      <form>
        <input placeholder="Email" type="email" ref={emailRef} />
        <input placeholder="Password" type="password" ref={passwordRef} />
        <button disabled={ loading || currentUser } onClick={handleLogin}>Log In</button>
        {<button onClick={handleLogout}>logout</button>}
      </form>
    </div>)
    
  )
}




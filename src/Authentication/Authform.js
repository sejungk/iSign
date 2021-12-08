import React, { useRef, useState } from "react";
import { login, useAuth, logout, signup } from "./authfuncs"; 
import { Link } from "react-router-dom";
import CoursePage from "../components/CoursePage";


const Auth=()=>{
  //added loader
  const [ loading, setLoading ] = useState(false);
  //currentUser info
  const currentUser = useAuth();

  //useRef hook to keep track on current input (does not cause re-render when value updated)
  const emailRef = useRef();
  const passwordRef = useRef();

  //api call to firebase login
  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch(e){
      alert(e);
    }
    setLoading(false);
  }

  async function handleSignup() {
    setLoading(true);
    try {
    await signup(emailRef.current.value, passwordRef.current.value);
    }catch(e){
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

  return (

    currentUser ? ( 
      <div>
        <button onClick={handleLogout}>Logout</button>
        <CoursePage/>  
      </div>
      
    ) : (   <div className="form">
      <h2> Login or Signup </h2>
      <form>
        <input placeholder="Email" type="email" ref={emailRef} />
        <input placeholder="Password: must be longer than 6 characters" type="password" ref={passwordRef} />
        <button disabled={ loading || currentUser } onClick={handleLogin}>Log In</button>
        <button disabled={ loading || currentUser } onClick={handleSignup}>Signup</button>
      </form>
    </div>)
  )
}



export default Auth
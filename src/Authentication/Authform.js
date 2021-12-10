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
  //toggle state change
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };
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
      // <div>
      //   <button onClick={handleLogout}>Logout</button>
        <CoursePage/>  
      //</div>
      
    ) : (   
      <div className="form">
      <h2> Login or Signup </h2>
      <form>
        <input placeholder="Email" type="email" ref={emailRef} />
        <input placeholder="Password: at least 6 characters" type="password" ref={passwordRef} />
      </form>
       {!index ?<button disabled={ loading || currentUser } onClick={handleLogin}>Log In</button> : <button disabled={ loading || currentUser } onClick={handleSignup}>Signup</button>}
        <p className="signIn_orUp" onClick={toggleIndex}>
        {!index? `New to iSign? Click here` : "Already have an acount?"}
        </p>
    </div>)
  )
}



export default Auth
import React, { useRef, useState } from "react";
import { signup, useAuth } from "./context";
import { Link } from "react-router-dom";
export const Signup=()=>{
  const [ loading, setLoading ] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef=useRef();

 async function handleSignup() {
    setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value, nameRef.current.value);
    setLoading(false);
  }
  
  return (
    <div className="form">
      <h2> New User</h2>
      <form >
        <input placeholder="Name" type="name" ref={nameRef} />
        <input placeholder="Email" type="email" ref={emailRef} />
        <input placeholder="Password" type="password" ref={passwordRef} />
        <Link to="/courses">
        <button onClick={handleSignup} type="submit">
          Create Account
          </button>
          </Link>
      </form>
    </div>
  )
}
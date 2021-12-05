import React, { useRef, useState } from "react";
import { signup, login, logout, useAuth  } from "./context";

export const Auth=()=> {
  const [ loading, setLoading ] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignup() {
    setLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
     } catch(e){
      alert(e);
    }
    setLoading(false);
  }

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
    setLoading(true);
    try {
      await logout();
    } catch(e){
      alert(e);
    }
    setLoading(false);
  }

  return (
    <div id="main">
      
      <div>Welcome Back: { currentUser?.email } </div>

      <div id="fields">
        <input ref={emailRef} placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
      </div>

      <button disabled={ loading || currentUser } onClick={handleSignup}>Sign Up</button>
      <button disabled={ loading || currentUser } onClick={handleLogin}>Log In</button>
      <button disabled={ loading || !currentUser } onClick={handleLogout}>Log Out</button>

    </div>
  );
}


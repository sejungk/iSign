import React, {useRef} from "react";
import { useUserContext } from "../context/userContext";

export const SignUp = ()=>{

  const nameRef=useRef();
  const emailRef=useRef();
  const passwordRef=useRef();
  const signUpUser = useUserContext();

  const handleSubmit=(event)=>{
    event.preventDefault();
    const name=nameRef.current.value;
    const email = emailRef.current.value;
    const password  = passwordRef.current.value;
    if(name && email && password) signUpUser(name, email, password)
  }

  return (
    <div className="form">
      <h2> New User</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" type="name" ref={nameRef} />
        <input placeholder="Email" type="email" ref={emailRef} />
        <input placeholder="Password" type="password" ref={passwordRef} />
        <button type="submit">Create Account</button>
      </form>
    </div>
  )
}

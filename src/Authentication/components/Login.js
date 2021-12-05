import React, {useRef} from "react";
import { useUserContext } from "../context/userContext";



export const Login = () => {
  const emailRef=useRef();
  const passwordRef=useRef();
  const loginUser = useUserContext();


  const handleSubmit=(event)=>{
    event.preventDefault()
    const email = emailRef.current.value;
    const password  = passwordRef.current.value;
    if(email && password){
      return loginUser(email, password);
    } 
  }

  return (
   <div className="form">
      <h2> Login </h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" type="email" ref={emailRef} />
        <input placeholder="Password" type="password" ref={passwordRef} />
        <button type="submit">Log In</button>
      </form>
    </div>
  )
}

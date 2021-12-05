import React, { useEffect, useState, useContext} from "react";
import {
  createUserWithEmailAndPassword, 
  updateProfile, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signOut,
}from "firebase/auth";

import { auth } from "../../firebase";

export const UserContext = React.createContext({});

export const useUserContext=()=> {
  return useContext(UserContext);
};

export const UserContextProvider =({children})=>{
  
  const [user, setUser]=useState(null)
  const [loading, setLoading]=useState(true);
  const [error, setError]=useState("");

  useEffect(()=>{
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (res)=>{
      if(res) {
        setUser(res)
       }else{
         setUser(null)
       }
      setError("");
      setLoading(false);
    })
    return unsubscribe;
  }, []);

  const signupUser=(name, email, password)=>{
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(()=>
        updateProfile(auth.currentUser, {
          displayName: name,
       })
      )
      .then((res)=>console.log(res))
      .catch((error)=>setError(error.message))
      .finally(()=>setLoading(false))
  }

  const loginUser=(email, password)=>{
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((res)=>console.log(res))
      .catch((error)=>setError(error.message))
      .finally(()=>setLoading(false))
  }

  const logoutUser = () =>{
    signOut(auth);
  }

  const contextValue = {
    user,
    loading,
    error,
    signupUser,
    loginUser,
    logoutUser,
  }

  return (
  <UserContext.Provider value={contextValue}>
    {children}
  </UserContext.Provider>
  )
}


import { createContext, useEffect, useState, useContext} from "react"
import {
  createUserWithEmailAndPassword, 
  updateProfile, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signOut,
}from "firebase/auth";
import { auth } from "../../firebase";

const UserContext=createContext({})

export const useUserContext=()=> useContext(UserContext);

export const UserContextProvider=({children})=>{
  
  const [user, setUser]=useState(null)
  const [loading, setLoading]=useState();
  const [error, setError]=useState("");

  useEffect(()=>{
    setLoading(true)
    const unsubscribe = onAuthStateChanged(auth, res=>{
      res ? setUser(res) : setUser(null)
      setError("")
      setLoading(false)
    })
    return unsubscribe;
  },[])

  const signUpUser=(email, name, password)=>{
    setLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
    .then(()=>{
      updateProfile(auth.currentUser, {
        displayName: name,
      })
    })
    .then((res)=>console.log(res))
    .catch((error)=>setError(error.message))
    .finally(()=>setLoading(false))
  }

  const loginUser=(email, passowrd)=>{
    setLoading(true)
    signInWithEmailAndPassword(auth, email, passowrd)
      .then((res)=>console.log(res))
      .catch((error)=>setError(error.message))
      .finally(()=>setLoading(false))
  }

  const logoutUser = () =>{
    signOut(auth)
  }

  const contextValue = {
    user,
    loading,
    error,
    signUpUser,
    loginUser,
    logoutUser,
  }

  return (<UserContext.Provider value={contextValue}>
    {children}
  </UserContext.Provider>
  )
}


import { auth } from "../firebase";
import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

//signup function using createUserWithEmailAndPassword methods from firebase
export function signup(email, password, name) {
  return createUserWithEmailAndPassword(auth, email, password, name);
}

//login function using signInWithEmailAndPassword menthods from firebase
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

//logout function using logout menthods from firebase
export function logout() {
  return signOut(auth);
}

// Custom Hook fectching user signin info 
export function useAuth() {
  //Declare new state 
  const [ currentUser, setCurrentUser ] = useState();

  //useEffect=compentDidMount+componentDidUpdate+componentWillUnmount
  useEffect(() => {
    //onAuthStateChanged: add listener for changes to the user's sign-in state.
    //cleanup func to unsub from listener after unmount
    const unsubscribe = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsubscribe;
  }, [])

  return currentUser;
}



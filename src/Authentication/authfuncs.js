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

// Custom Hook
export function useAuth() {
  const [ currentUser, setCurrentUser ] = useState();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsubscribe;
    
  }, [])

  return currentUser;
}



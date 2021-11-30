import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDrn4OyEwKcGHyQeSxAZO6iOxsJ48NlIb4",
  authDomain: "isign-43075.firebaseapp.com",
  projectId: "isign-43075",
  storageBucket: "isign-43075.appspot.com",
  messagingSenderId: "879376010825",
  appId: "1:879376010825:web:ead0203c7a3e08e0d97998",
  measurementId: "G-N6GTBZZMEV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// use authentication 
export const auth = getAuth(app);
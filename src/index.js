// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import Lesson from "./components/lesson";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);




ReactDOM.render(

    // <App />,
    <Lesson />,
  document.getElementById('app')
)

import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import App from "./App"
import {UserContextProvider}from "./Authentication/context/userContext"
    

ReactDOM.render (
  <React>
    <UserContextProvider>
      <App/>
    </UserContextProvider>
  </React>,
  document.getElementById('app')
);


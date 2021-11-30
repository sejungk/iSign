import React from "react";
import { Login } from "./component/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function App() {

  return (
    <Router>
      <div>
        <Route path="/" component={Login}/>
      </div>
    </Router>
  );
}

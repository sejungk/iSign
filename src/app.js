import React from "react";
import { Login } from "./component/Login";
import LandingPage from "./components/LandingPage"
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function App() {

  return (
    <Router>
      <div>
        {/* <Route path="/" component={Login}/> */}
        <Route exact path="/" component={LandingPage} />
      </div>
    </Router>
  );
}

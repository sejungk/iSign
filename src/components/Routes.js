import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "./LandingPage";
import LearningPage from "./LearningPage";
import CoursePage from "./CoursePage";
import { Auth } from "../Authentication/components/Auth";
import { SignUp } from "../Authentication/components/Signup";
import { Login } from "../Authentication/components/Login";


export default class Routes extends Component {
 
  render() {

    return (
      <div>
       <Route path="/" component={Login} />
      </div>
    );
  }
}

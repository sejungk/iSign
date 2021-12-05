import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "./LandingPage";
import LearningPage from "./LearningPage";
import CoursePage from "./CoursePage";
import { Auth } from "../Authentication/components/Auth";
import { SignUp } from "../Authentication/components/Signup";
import { Login } from "../Authentication/components/Login";
import { useUserContext } from "../Authentication/context/userContext";

export default class Routes extends Component {
 
  render() {
    const { user, error } = useUserContext();

    return (
      <div>
        {error && <p className="error">{error}</p>}
        {user ? (<Switch>
          {/* <Route path="/" component={LandingPage} /> */}
          {/* <Route exact path="/" component={CoursePage} /> */}
          {/* <Route exact path="/" component={LearningPage} /> */}
          <Route path="/" component={CoursePage} />
        </Switch>): (
          <Switch>
            <Route path="/" component={LandingPage} /> 
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        )
        }      
      </div>
    );
  }
}

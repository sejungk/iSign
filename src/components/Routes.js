import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "./LandingPage";
import LearningPage from "./LearningPage";
import CoursePage from "./CoursePage";
import { Auth } from "../Authentication/components/Auth";

export default class Routes extends Component {

  render() {
    return (
      <div>
        <Switch>
          {/* <Route path="/" component={LandingPage} /> */}
          {/* <Route exact path="/" component={CoursePage} /> */}
          {/* <Route exact path="/" component={LearningPage} /> */}
          <Route path="/" component={Auth} />
          <Routes/>
        </Switch>
      </div>
    );
  }
}

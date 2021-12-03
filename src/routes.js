import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";

import { Login } from "./component/Login";
import LandingPage from "./components/LandingPage"
import { CourseHome } from "./components/CourseHome";

export default function Routes(){
  return(
    <div>

      {/* <Route path="/" component={Login}/> */}
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={CourseHome} />

    </div>
  )
}

       
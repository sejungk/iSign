import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import Routes from "./Routes";

ReactDOM.render (
  <React>
    <Router>
      <Routes/>
    </Router>
  </React>,
  document.getElementById('app')
);


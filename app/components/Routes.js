import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar"
import HomePage from "./HomePage";
import AllRobots from "./AllRobots";
import AllProjects from "./AllProjects"

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/robots" component={AllRobots} />
        <Route exact path="/projects" component={AllProjects} />
      </Switch>
    </Router>
  );
};

export default Routes;

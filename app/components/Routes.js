import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import AllRobots from "./AllRobots";
import AllProjects from "./AllProjects";
import SingleRobot from "./SingleRobot";
import SingleProject from "./SingleProject";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/robots" component={AllRobots} />
        <Route exact path="/robots/:id" component={SingleRobot} />
        <Route exact path="/projects" component={AllProjects} />
        <Route exact path="/projects/:id" component={SingleProject} />
      </Switch>
    </Router>
  );
};

export default Routes;

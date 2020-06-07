import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import AboutMe from "../AboutMe/AboutMe";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Resume from "../Resume/Resume";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage}></Route>
    <Route exact path="/aboutme" component={AboutMe}></Route>
    <Route exact path="/contact" component={Contact}></Route>
    <Route exact path="/projects" component={Projects}></Route>
    <Route exact path="/resume" component={Resume}></Route>
  </Switch>
);
export default Main;

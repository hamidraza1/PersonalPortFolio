import React from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import classes from "./App.module.css";
import Main from "./Components/Main/Main";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header
          className={classes.headercolor}
          title={
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/PersonalPortFolio"
            >
              My Portfolio
            </Link>
          }
          scroll
        >
          <Navigation>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/aboutme">About Me</Link>
          </Navigation>
        </Header>
        <Drawer
          title={
            <Link
              style={{ textDecoration: "none", color: "Black" }}
              to="/PersonalPortFolio"
            >
              My Portfolio
            </Link>
          }
        >
          <Navigation>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/aboutme">About Me</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;

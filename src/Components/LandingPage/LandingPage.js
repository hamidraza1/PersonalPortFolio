import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import classes from "./LandingPage.module.css";
import ProfilePic from "../Images/pppp.jpg";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className={classes.landingGrid}>
          <Cell col={12}>
            <img className={classes.avatar} src={ProfilePic} alt="avatr" />
            <div className={classes.bannerText}>
              <h1>Web Developer</h1>
              <hr />
              <p>HTML/CSS | Bootstrap | JavaSript | React.JS | Firebase</p>
              <div className={classes.socialLinks}>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/raza-hamid/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* Github */}
                <a
                  href="https://www.linkedin.com/in/raza-hamid/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;

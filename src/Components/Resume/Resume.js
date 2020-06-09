import React, { Component } from "react";
import classes from "./Resume.module.css";
import { Grid, Cell } from "react-mdl";
import ProfilePic from "../Images/pppp.jpg";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Skills from "./Skills/Skills";

class Resume extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "rgba(76, 101, 127, 0.35)",
        }}
      >
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img className={classes.avatar} src={ProfilePic} alt="avatr" />
            </div>
            <h2 style={{ paddingTop: "1em", textAlign: "center" }}>
              Hamid Raza
            </h2>
            <h4
              style={{ color: "grey", textAlign: "center", marginTop: "-10px" }}
            >
              Web Developer
            </h4>
            <hr
              style={{
                borderTop: "3px solid #833fb2",
                width: "80%",
                margin: "auto",
              }}
            />
            <p style={{ margin: "15px 0", textAlign: "center" }}>
              Passion for writing computer programs lead me from Engineering to
              Web Development with objective to create and maintain functional
              websites and applications. I am looking for an opportunity that
              will allow me to improve my current programming, communication and
              teamwork skills.
            </p>
            <hr
              style={{
                borderTop: "3px solid #833fb2",
                width: "80%",
                margin: "auto",
              }}
            />
            <h5 style={{ color: "#833fb2" }}>Phone:</h5>
            <p style={{ marginLeft: "25px" }}>+49 157-824 73557</p>
            <h5 style={{ color: "#833fb2" }}>Email:</h5>
            <p style={{ marginLeft: "25px" }}>razahamidude95@gmail.com</p>

            <hr
              style={{
                borderTop: "3px solid #833fb2",
                width: "80%",
                margin: "auto",
              }}
            />
            <h5 style={{ color: "#833fb2" }}>Languages</h5>
            <ul style={{ listStyle: "none" }}>
              <li>
                <span style={{ fontWeight: "bold", color: "#372e3f" }}>
                  English:
                </span>{" "}
                C1 Level(Fluent)
              </li>
              <li>
                <span style={{ fontWeight: "bold", color: "#372e3f" }}>
                  German:
                </span>{" "}
                B2 level (Conversational)
              </li>
            </ul>
            <h5 style={{ color: "#833fb2" }}>Hobbies</h5>
            <ul style={{ listStyle: "none" }}>
              <li>Cricket</li>
              <li>Cooking</li>
            </ul>
          </Cell>

          <Cell className={classes.rightCol} col={8}>
            <h2 style={{ color: "rgb(25, 32, 39)" }}>Education</h2>
            <Education
              startYear={"October 2019"}
              endYear={"To Date"}
              schoolName="University of Duisburg-Essen"
              schoolDescription="MS Computational Mechanics"
            />
            <Education
              startYear={"October 2019"}
              endYear={"June 2017"}
              schoolName="University of Engineering and Technology, Lahore"
              schoolDescription="BS Mechanical Engineering"
            />

            <hr style={{ borderTop: "3px solid #3A4B5C" }} />

            <h2 style={{ color: "rgb(25, 32, 39)" }}>Experience</h2>
            <Experience
              startYear={"June 2018"}
              endYear={"August 2018"}
              jobName="UPANELS INC. "
              jobPosition="Front End Developer (Internee)"
              jobDescription="My Tasks were to make improvements in Clients Website with the implementation of HTML,CSS and JavaScript Technologies"
            />
            <Experience
              startYear={2019}
              endYear={"To Date"}
              jobName="Personal Projects"
              jobDescription="I have made some Open Source Projects i.e Burger Builder,ChatDashboard and some others too with the help of React framework,HTML,CSS and Firebase  "
            />
            <hr style={{ borderTop: "3px solid #3A4B5C" }} />

            <h2 style={{ color: "rgb(25, 32, 39)" }}>Skills</h2>
            <Skills skill="React.js" progress="80" />
            <Skills skill="JavaScriipt" progress="85" />
            <Skills skill="Python" progress="70" />
            <Skills skill="HTML5" progress="90" />
            <Skills skill="CSS/SASS" progress="85" />
            <Skills skill="Github" progress="70" />
            <Skills skill="Firebase" progress="60" />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;

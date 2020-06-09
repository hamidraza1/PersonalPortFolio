import React, { Component } from "react";
import classes from "./AboutMe.module.css";

class AboutMe extends Component {
  render() {
    return (
      <div className={classes.background1}>
        <div
          className={classes.background}
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <h1 style={{ marginTop: "0", color: "rgba(0, 0, 0, 0.6)" }}>
              About Me
            </h1>
            <p
              style={{
                width: "70%",
                height: "70%",
                margin: "auto",
                textAlign: "justify",
                fontSize: "18px",
                color: "rgba(0, 0, 0, 0.9)",
              }}
            >
              Passion for writing computer programs lead me from Engineering to
              Web Development. I started with building small projects using HTML
              and CSS and eventually progressed towards wonderful frameworks
              such as React.
              <br />I got exposure of coding while doing my Bachelors Final year
              Project with Arduino Software programmed with C and C++ dialect. I
              have developed a wide range of skills such as Data Structures and
              Algorithms, and I dug deep and chose path of Web Technologies,
              where I established skills of HTML, CSS JavaScript and REACT.js. I
              have made many open source personal projects and some fine-looking
              apps which havegiven me confident to take a professional position.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;

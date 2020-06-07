import React, { Component } from "react";
import classes from "./Projects.module.css";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

class Projects extends Component {
  state = {
    activeTab: 0,
  };
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className={classes.projectsGrid}>
          <Card shadow={5} style={{ minWidth: "350px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "210px",
                background:
                  "url(https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png) center / cover",
              }}
            >
              React Project # 1
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{ minWidth: "350px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "210px",
                background:
                  "url(https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png) center / cover",
              }}
            >
              React Project # 2
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{ minWidth: "350px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "210px",
                background:
                  "url(https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png) center / cover",
              }}
            >
              React Project # 3
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is JavaScript</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is HTML/CSS</h1>
        </div>
      );
    }
  }
  render() {
    return (
      <div className={classes.categoryTabs}>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
        >
          <Tab>React</Tab>
          <Tab>JavaScript</Tab>
          <Tab>HTML/CSS</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className={classes.content}>{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;

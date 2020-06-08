import React, { Component } from "react";
import classes from "./Projects.module.css";
import Cards from "./JavaScriptCards/Cards";
import ReactCards from "./ReactCards/ReactCards";
import { Tabs, Tab, Grid, Cell } from "react-mdl";

class Projects extends Component {
  state = {
    activeTab: 0,
  };
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className={classes.projectsGrid}>
          <ReactCards
            projectName="Burger Builder"
            projectDescription="To Order a Burger with custom ingredients.History of Orders are
            recorded."
          />
          <ReactCards
            projectName="Chat Dashboard"
            projectDescription=" Static Web page with Menu,AllChats Display and Individual Chat
            Section."
          />
          <ReactCards
            projectName=" Job Listing App "
            projectDescription="One can see the respective jobs by applying filters and then can
            also reset it all."
          />
          <ReactCards
            projectName="Toggle Colours "
            projectDescription="A static app with the toggle button, which is used to toggle Dark
            Mode of Interface"
          />
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className={classes.projectsGrid}>
          <Cards
            projectName="Simple Form Animation "
            projectDescription="Simple Animation of Change of Colours upon clicking the arrow Button"
          />
          <Cards
            projectName="Task List"
            projectDescription="it is used to add and remove Tasks,quite similar to Todo-list."
          />
          <Cards
            projectName="Weight Converter "
            projectDescription="It takes input as pounds and give output in Grams,KiloGrams and Ounces"
          />
          <Cards
            projectName="Weather App"
            projectDescription="it displays the Weather forecast both in Degree and Farenheit after confirming user's location."
          />
          <Cards
            projectName="Rock-Paper-Scissor Game"
            projectDescription=" A conventional Rock-Paper-Scissor game played by User against Computer"
          />
          <Cards
            projectName="Loan Calculator"
            projectDescription="iI takes Amout,Interest-Rate as input and returns monthly and total Payment"
          />
          <Cards
            projectName="Book List "
            projectDescription=" An App to make a list of Books with its Author-Name,Title and ISBN#."
          />
          <Cards
            projectName="Calculator "
            projectDescription="Simple Calculator with basic arithmetic operations and gradient background."
          />
          <Cards
            projectName="Clock "
            projectDescription="An Analogue Watch which shows the current time with eye-catching overlay."
          />
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

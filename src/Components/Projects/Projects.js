import React, { Component } from "react";
import classes from "./Projects.module.css";
import Cards from "./JavaScriptCards/Cards";
import ReactCards from "./ReactCards/ReactCards";
import HtmlCss from "./HtmlCss/HtmlCss";
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
            LiveDemo=" https://hamidraza1.github.io/BurgerBuilder/"
            Github="https://github.com/hamidraza1/BurgerBuilder"
          />
          <ReactCards
            projectName="Chat Dashboard"
            projectDescription=" Static Web page with Menu,AllChats Display and Individual Chat
            Section."
            LiveDemo=" https://hamidraza1.github.io/chatdashboard/"
            Github="https://github.com/hamidraza1/chatdashboard"
          />
          <ReactCards
            projectName=" Job Listing App "
            projectDescription="One can see the respective jobs by applying filters and then can
            also reset it all."
            LiveDemo=" https://hamidraza1.github.io/job-listing-app/"
            Github="https://github.com/hamidraza1/job-listing-app"
          />
          <ReactCards
            projectName="Toggle Colours "
            projectDescription="A static app with the toggle button, which is used to toggle Dark
            Mode of Interface"
            LiveDemo=" https://hamidraza1.github.io/SocialMediaDashboard/"
            Github="https://github.com/hamidraza1/SocialMediaDashboard"
          />
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className={classes.projectsGrid}>
          <Cards
            projectName="Simple Form Animation "
            projectDescription="Simple Animation of Change of Colours upon clicking the arrow Button"
            LiveDemo=" https://hamidraza1.github.io/FormAnimation/"
            Github="https://github.com/hamidraza1/FormAnimation"
          />
          <Cards
            projectName="Task List"
            projectDescription="it is used to add and remove Tasks,quite similar to Todo-list."
            LiveDemo="https://hamidraza1.github.io/Task-List/"
            Github="https://github.com/hamidraza1/Task-List"
          />
          <Cards
            projectName="Weight Converter "
            projectDescription="It takes input as pounds and give output in Grams,KiloGrams and Ounces"
            LiveDemo="https://hamidraza1.github.io/weightCalculator/"
            Github="https://github.com/hamidraza1/weightCalculator"
          />
          <Cards
            projectName="Weather App"
            projectDescription="it displays the Weather forecast both in Degree and Farenheit after confirming user's location."
            LiveDemo=" https://hamidraza1.github.io/weatherApp/"
            Github="https://github.com/hamidraza1/weatherApp"
          />
          <Cards
            projectName="Rock-Paper-Scissor Game"
            projectDescription=" A conventional Rock-Paper-Scissor game played by User against Computer"
            LiveDemo="https://hamidraza1.github.io/rock-paper-scissor-game/"
            Github="https://github.com/hamidraza1/rock-paper-scissor-game"
          />
          <Cards
            projectName="Loan Calculator"
            projectDescription="iI takes Amout,Interest-Rate as input and returns monthly and total Payment"
            LiveDemo=" https://hamidraza1.github.io/loanCalculator/"
            Github="https://github.com/hamidraza1/loanCalculator"
          />
          <Cards
            projectName="Book List "
            projectDescription=" An App to make a list of Books with its Author-Name,Title and ISBN#."
            LiveDemo=" https://hamidraza1.github.io/BookList/"
            Github="https://github.com/hamidraza1/BookList"
          />
          <Cards
            projectName="Calculator "
            projectDescription="Simple Calculator with basic arithmetic operations and gradient background."
            LiveDemo="https://hamidraza1.github.io/calculator-simple/"
            Github="https://github.com/hamidraza1/calculator-simple"
          />
          <Cards
            projectName="Clock "
            projectDescription="An Analogue Watch which shows the current time with eye-catching overlay."
            LiveDemo=" https://hamidraza1.github.io/analogeClock/"
            Github="https://github.com/hamidraza1/analogeClock"
          />
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className={classes.projectsGrid}>
          <HtmlCss
            projectName="NetFlix Clone "
            LiveDemo=" https://hamidraza1.github.io/netflixclone/"
            Github="https://github.com/hamidraza1/netflixclone"
          />
          <HtmlCss
            projectName="Awesome Blurr Effect "
            LiveDemo="https://hamidraza1.github.io/BlurrEffect/"
            Github="https://github.com/hamidraza1/BlurrEffect"
          />
          <HtmlCss
            projectName="Bitcoin "
            LiveDemo="https://hamidraza1.github.io/BitCoin/"
            Github="https://github.com/hamidraza1/BitCoin"
          />

          <HtmlCss
            projectName="Candy Meuseum "
            LiveDemo="https://hamidraza1.github.io/CandyMeuseum/"
            Github="https://github.com/hamidraza1/CandyMeuseum"
          />
          <HtmlCss
            projectName="Learn Company Portfolio"
            LiveDemo="https://hamidraza1.github.io/CompanyPortfolio/"
            Github="https://github.com/hamidraza1/CompanyPortfolio"
          />

          <HtmlCss
            projectName="Login SluralPright Clone "
            LiveDemo=" https://hamidraza1.github.io/SluralPrightClone/"
            Github="https://github.com/hamidraza1/SluralPrightClone"
          />
          <HtmlCss
            projectName="Hamburger Menu "
            LiveDemo=" https://hamidraza1.github.io/BurgerMenu/"
            Github="https://github.com/hamidraza1/BurgerMenu"
          />
          <HtmlCss
            projectName="Pattern "
            LiveDemo=" https://hamidraza1.github.io/Pattern/"
            Github="https://github.com/hamidraza1/Pattern"
          />
          <HtmlCss
            projectName="Awesome Site "
            LiveDemo="https://hamidraza1.github.io/AwesomeSite/"
            Github="https://github.com/hamidraza1/AwesomeSite"
          />
          <HtmlCss
            projectName="Cuda Portfolio"
            LiveDemo="https://hamidraza1.github.io/CudaPortfolio/"
            Github="https://github.com/hamidraza1/CudaPortfolio"
          />
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

import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

class Cards extends Component {
  render() {
    return (
      <Card
        shadow={5}
        style={{
          minWidth: "350px",
          margin: "auto",
          marginBottom: "30px",
          marginRight: "",
        }}
      >
        <CardTitle
          style={{
            color: "#fff",
            height: "210px",
            background:
              "url(https://competa.com/wp-content/uploads/2020/01/javascript.jpg) center / cover",
          }}
        >
          {this.props.projectName}
        </CardTitle>
        <CardText>{this.props.projectDescription}</CardText>
        <CardActions border>
          <Button colored>
            <a
              style={{ color: "#3F51B7", textDecoration: "none" }}
              href={this.props.Github}
              target="blank"
            >
              Github
            </a>
          </Button>
          <Button colored>
            <a
              style={{ color: "#3F51B7", textDecoration: "none" }}
              href={this.props.LiveDemo}
              target="blank"
            >
              Live Demo
            </a>
          </Button>
        </CardActions>
        <CardMenu style={{ color: "#fff" }}>
          <IconButton name="share" />
        </CardMenu>
      </Card>
    );
  }
}
export default Cards;

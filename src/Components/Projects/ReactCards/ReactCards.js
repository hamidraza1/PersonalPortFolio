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

class ReactCards extends Component {
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
              "url(https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png) center / cover",
          }}
        >
          {this.props.projectName}
        </CardTitle>
        <CardText>{this.props.projectDescription}</CardText>
        <CardActions border>
          <Button colored>GitHub</Button>
          <Button colored>Live Demo</Button>
        </CardActions>
        <CardMenu style={{ color: "#fff" }}>
          <IconButton name="share" />
        </CardMenu>
      </Card>
    );
  }
}
export default ReactCards;

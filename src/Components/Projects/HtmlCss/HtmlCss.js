import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

class HtmlCss extends Component {
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
            color: "black",
            height: "210px",
            background:
              "url(https://www.nicepng.com/png/detail/141-1415510_psd-to-html-and-css3-html-css.png) center / cover",
          }}
        >
          {this.props.projectName}
        </CardTitle>

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
export default HtmlCss;

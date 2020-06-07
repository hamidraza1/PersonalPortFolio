import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import classes from "./Contact.module.css";
import ProfilePic from "../Images/pppp.jpg";

class Contact extends Component {
  render() {
    return (
      <div className={classes.contactBody}>
        <Grid className={classes.contactGrid}>
          <Cell col={6}>
            <h2>Hamid Raza</h2>
            <img className={classes.avatar} src={ProfilePic} alt="avatr" />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sagittis pellentesque lacus eleifend lacinia.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Mauris sagittis pellentesque
              lacus eleifend lacinia...
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className={classes.contactList}>
              <List>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "20px",
                      fontFamily: "Anton",
                      color: "#2c3e50",
                    }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (+49) 157-82473557
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "20px",
                      fontFamily: "Anton",
                      color: "#2c3e50",
                    }}
                  >
                    <i className="fa fa-fax" aria-hidden="true" />
                    (+49) 157-82473557
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "20px",
                      fontFamily: "Anton",
                      color: "#2c3e50",
                    }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    razahamidude95@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "20px",
                      fontFamily: "Anton",
                      color: "#2c3e50",
                    }}
                  >
                    <i className="fa fa-skype" aria-hidden="true" />
                    hamidraza328@yahoo.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;

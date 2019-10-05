import React, { Component } from "react";
import { Header, Segment, Divider, Image, Card } from "semantic-ui-react";
import axios from "axios";
import "../styles/classes.css";

export class Classes extends Component {
  constructor() {
    super();
    this.state = {
      classes: []
    };
  }

  componentDidMount() {
    console.log("hit");
    axios
      .get("/api/classes")
      .then(res => {
        console.log("hit2");
        console.log(res.data);
        this.setState({
          classes: res.data
        });
      })
      .catch(err => console.log("error:", err));
  }

  render() {
    const { classes } = this.state;
    console.log(classes);
    const mappedClasses = classes.map(el => {
      return (
        <Segment className="classes" key={el.classes_id}>
          <Header as="h2" floated="right">
            {el.name}
          </Header>
          <Divider clearing />
          <div style={{display:'flex'}}>
            <Card style={{marginRight:'10px'}} >
              <Image
                src={require("../../media/nophoto.png")}
              />
              <Card.Content>
                <Card.Header>{el.full_name}</Card.Header>
              </Card.Content>
            </Card>
            <p style={{ float: "none" }}>{el.description}</p>
          </div>
        </Segment>
      );
    });

    return (
      <div className="class_div">
        <Header as="h1">Classes</Header>

        {mappedClasses}
      </div>
    );
  }
}

export default Classes;

import React, { Component } from "react";
import { Header, Segment, Divider, Image, Card, Container } from "semantic-ui-react";
import axios from "axios";
import Days from "./Days";
import "../styles/classes.css";
import { Link } from "react-router-dom";

export class Classes extends Component {
  constructor() {
    super();
    this.state = {
      classes: []
    };
  }

  componentDidMount() {
    axios
      .get("/api/classes")
      .then(res => {
        console.log(res.data);
        this.setState({
          classes: res.data
        });
      })
      .catch(err => console.log("error:", err));
  }

  render() {
    const { classes } = this.state;
    const mappedClasses = classes.map(el => {
      return (
        <Segment className="classes" key={el.class_id}>
          <Link
            style={{ color: "inheret", textDecoration: "none" }}
            to={`/class/${el.class_id}`}
          >
            <Container>
              <Header as="h2" >
                {el.name}
              </Header>
             
              <Header as="h2" style={{ color: "black" }} floated='left'>
                {el.start_date} - {el.end_date} at {el.start_class}
                {el.start_am_pm} - {el.end_class}
                {el.end_am_pm} 
              </Header>
              <Header as="h2" style={{ color: "black" }} floated='right' >
              <Days theDays={el.days} />
              </Header>
             
              </Container>

            <Divider clearing />
            <div style={{ display: "flex" }}>
              <Card style={{ marginRight: "10px" }}>
                <Image src={require("../../media/nophoto.png")} />
                <Card.Content>
                  <Card.Header>{el.first_name}</Card.Header>
                </Card.Content>
              </Card>
              <p style={{ float: "none", color: "black" }}>{el.description}</p>
            </div>
          </Link>
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

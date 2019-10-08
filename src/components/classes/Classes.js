import React, { Component } from "react";
import {
  Header,
  Segment,
  Divider,
  Image,
  Card,
  Container
} from "semantic-ui-react";
import axios from "axios";
import Days from "./Days";
import "../styles/classes.css";
import { Link } from "react-router-dom";
import EmployeeCard from "../EmployeeCard";

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
              <Header as="h1" style={{ margin: "0" }}>
                {el.name}
              </Header>

              <Header
                as="h2"
                style={{ color: "black", margin: "0" }}
                floated="left"
              >
                {el.start_date} - {el.end_date} at {el.start_class}
                {el.start_am_pm} - {el.end_class}
                {el.end_am_pm}
              </Header>
              <Header as="h2" style={{ color: "black" }} floated="right">
                <Days theDays={el.days} />
              </Header>
            </Container>

            <Divider clearing />
            <div style={{ display: "flex" }}>
              <EmployeeCard
                firstName={el.first_name}
                imageSrc={require("../../media/nophoto.png")}
                description={el.description}
              />
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

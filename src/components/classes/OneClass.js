import React, { Component } from "react";
import axios from "axios";
import Days from "./Days";
import { Header, Container } from "semantic-ui-react";
import TeamMember from "../employee/TeamMember";

export class OneClass extends Component {
  constructor() {
    super();
    this.state = {
      oneClass: []
    };
  }
  componentDidMount() {
    console.log("comp");
    console.log(this.props.match.params.class_id);
    axios.get(`/api/class/${this.props.match.params.class_id}`).then(res => {
      console.log(res.data);
      this.setState({
        oneClass: res.data
      });
    });
  }
  render() {
    console.log("oneClass", this.state.oneClass);
    const { oneClass } = this.state;
    const oneClassMapped = oneClass.map(theClass => {
      return (
        <Container fluid className="one_class">
          <Header className="no_margin" as="h1" textAlign="center">
            {" "}
            {theClass.name}{" "}
          </Header>
          <Header
            className="no_margin"
            as="h3"
            style={{ color: "black" }}
            textAlign="center"
          >
            {theClass.start_date} - {theClass.end_date}
          </Header>
          <Header
            className="no_margin"
            as="h3"
            style={{ color: "black" }}
            textAlign="center"
          >
            {theClass.start_class}
            {theClass.start_am_pm} - {theClass.end_class}
            {theClass.end_am_pm}
          </Header>
          <Days theDays={theClass.days} />
          <p>{theClass.description}</p>
          <TeamMember teamMember={theClass.instructor} />
        </Container>
      );
    });
    return <div className='one_class_div'>{oneClassMapped}</div>;
  }
}

export default OneClass;

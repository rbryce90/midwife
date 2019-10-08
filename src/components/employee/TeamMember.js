import React, { Component } from "react";
import axios from "axios";
import {
  Header,
  Segment,
  Container
} from "semantic-ui-react";
import EmployeeCard from "../EmployeeCard";
import EmployeePage from "./EmployeePage";
import { Link } from "react-router-dom";

export class TeamMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamMember: []
    };
  }

  componentDidMount() {
    axios.get(`/api/teammember/${this.props.teamMember}`).then(res => {
      this.setState({
        teamMember: res.data
      });
    });
  }

  render() {
    const { teamMember } = this.state;
    const mappedTeamMember = teamMember.map(member => {
      console.log("member:", member);
      return (
        <Segment className="classes" key={member.user_id}>
          <Link
            to={`/teammember/${member.user_id}`}
            style={{ color: "inheret", textDecoration: "none" }}
          >
            <Container fluid>
              <div style={{ display: "flex" }}>
                <EmployeeCard
                  firstName={member.first_name}
                  imageSrc={require("../../media/nophoto.png")}
                  description={member.description}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Header as="h3" style={{ margin: "0" }}>
                    {member.title}
                  </Header>
                  <Header as="h4" style={{ margin: "0" }}>
                    {member.phone_number}
                  </Header>
                  <Header as="h4" style={{ margin: "0" }}>
                    {member.email}
                  </Header>
                  <p style={{color:'black'}}>{member.bio}</p>
                </div>
              </div>
            </Container>
          </Link>
        </Segment>
      );
    });
    return <div>{mappedTeamMember}</div>;
  }
}

export default TeamMember;

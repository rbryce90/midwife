import React, { Component } from 'react';
import axios from 'axios';
import {Header, Segment, Divider, Container} from 'semantic-ui-react'
import Days from '../classes/Days'
import EmployeeCard from '../EmployeeCard'
import {Link} from 'react-router-dom'

export class EmployeeClasses extends Component {
    constructor(){
        super();
        this.state = {
            classes:[]
        }
    }
    componentDidMount(){
        console.log(this.props.userId)
        axios.get(`/api/teammember/classes/${this.props.userId}`).then(res => {
            this.setState({
                classes: res.data
            })
        })
    }

    render() {
        const { classes } = this.state;
        console.log(classes)
        const mappedClasses = classes.map(classes => {
            return         <Segment className="classes" key={classes.class_id}>
            <Link
              style={{ color: "inheret", textDecoration: "none" }}
              to={`/class/${classes.class_id}`}
            >
              <Container>
                <Header as="h1" style={{ margin: "0" }}>
                  {classes.name}
                </Header>
  
                <Header
                  as="h2"
                  style={{ color: "black", margin: "0" }}
                  floated="left"
                >
                  {classes.start_date} - {classes.end_date} at {classes.start_class}
                  {classes.start_am_pm} - {classes.end_class}
                  {classes.end_am_pm}
                </Header>
                <Header as="h2" style={{ color: "black" }} floated="right">
                  <Days theDays={classes.days} />
                </Header>
              </Container>
  
              <Divider clearing />
             
                <p style={{ float: "none", color: "black" }}>{classes.description}</p>
        
            </Link>
          </Segment>
        })
        return (
            <div>
                <Header as='h1'>
                    EmployeeClasses
                    {mappedClasses}
                </Header>
            </div>
        )
    }
}

export default EmployeeClasses


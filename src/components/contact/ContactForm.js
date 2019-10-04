import React, { Component } from "react";
import { Input, Container, Header } from "semantic-ui-react";

export class ContactForm extends Component {
  render() {
    return (
      <Container className='ContactForm' fluid>
        <Header as='h3'>Learn More</Header> 
        <Input  placeholder="Full Name"></Input>
        <br/> <br/>
        <Input placeholder="Email"></Input>
        <br/> <br/>
        <Input placeholder="Phone Number"></Input>
        <br/> <br/>
        <Input placeholder="due" type="date"></Input>
      </Container>
    );
  }
}

export default ContactForm;

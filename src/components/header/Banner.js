import React from "react";
import { Container, Header } from "semantic-ui-react";

export default function Banner() {
  return (
    <Container className="banner" fluid>
      <Header as="h1" textAlign="center">
        This can be what ever you want
      </Header>
    </Container>
  );
}

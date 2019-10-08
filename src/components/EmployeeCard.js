import React from "react";
import { Image, Card } from "semantic-ui-react";

export default function EmployeeCard(props) {
  const { firstName, imageSrc } = props;
  return (
    <Card style={{ marginRight: "10px" }}>
      <Image src={imageSrc} />
      <Card.Content>
        <Card.Header>{firstName}</Card.Header>
      </Card.Content>
      
    </Card>
  );
}

import React, { Component } from "react";
import { Image } from "semantic-ui-react";

export class Home extends Component {
  render() {
    return (
      <div>
        <Image style={{height:'800px'}} src={require("../../media/picturesite.png")} fluid />
      </div>
    );
  }
}

export default Home;

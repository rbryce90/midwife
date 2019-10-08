import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class MyMenu extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu inverted>
        <Menu.Item name="logo" header>
          <h1>Logo</h1>
        </Menu.Item>
        <Link to="/">
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          >
            Home
          </Menu.Item>
        </Link>
        <Link to="/about">
          <Menu.Item
            name="about"
            active={activeItem === "about"}
            onClick={this.handleItemClick}
          >
            About
          </Menu.Item>
        </Link>
        <Link to="/classes">
          <Menu.Item
            name="classes"
            active={activeItem === "classes"}
            onClick={this.handleItemClick}
          >
            Classes
          </Menu.Item>
        </Link>
        <Link to="/services">
          <Menu.Item
            name="services"
            active={activeItem === "services"}
            onClick={this.handleItemClick}
          >
            Services
          </Menu.Item>
        </Link>
        <Link to="/contact">
          <Menu.Item
            name="contact"
            active={activeItem === "contact"}
            onClick={this.handleItemClick}
          >
            Contact
          </Menu.Item>
        </Link>
        <Menu.Menu position="right">
          <Menu.Item
            name="admin"
            active={activeItem === "admin"}
            onClick={this.handleItemClick}
            postion="right"
          >
            Admin
          </Menu.Item>
          <Menu.Item
            name="account"
            active={activeItem === "account"}
            onClick={this.handleItemClick}
            postion="right"
          >
            Account
          </Menu.Item>
          <Menu.Item
            name="login"
            active={activeItem === "login"}
            onClick={this.handleItemClick}
            postion="right"
          >
            Login
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

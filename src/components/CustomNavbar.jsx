import React, { Component } from "react";
import { Navbar, Nav, NavItem, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/images/rocketry_layer2.png";
import "../assets/css/CustomNavbar.css";

class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand pullLeft>
            <a href="/">
              <img src={logo} alt="Logo" />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            <NavItem
              eventKey={2}
              componentClass={Link}
              href="/about"
              to="/about"
            >
              About
            </NavItem>
            <NavItem
              eventKey={3}
              componentClass={Link}
              href="/apply"
              to="/apply"
            >
              Apply
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default CustomNavbar;

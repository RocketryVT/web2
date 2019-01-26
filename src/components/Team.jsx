import React, { Component } from "react";
import { Grid, Col, Row, Image } from "react-bootstrap";
import portrait from "../assets/images/elon.jpg";

class Team extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src={portrait} className="profile-pic" circle />
              <h3>Lead 1</h3>
              <p>Software Team Lead</p>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src={portrait} className="profile-pic" circle />
              <h3>Lead 2</h3>
              <p>Avionics Team Lead</p>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src={portrait} className="profile-pic" circle />
              <h3>Lead 3</h3>
              <p>Propulsion Team Lead</p>
            </Col>
          </Row>

          <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src={portrait} className="profile-pic" circle />
              <h3>Lead 4</h3>
              <p>Payload Team Lead</p>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src={portrait} className="profile-pic" circle />
              <h3>Lead 5</h3>
              <p>Structures Team Lead</p>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src={portrait} className="profile-pic" circle />
              <h3>Lead 6</h3>
              <p>Telemetry Team Lead</p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Team;

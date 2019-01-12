import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import "../../assets/css/Teams.css";

import * as data from "./teams.json";

class Teams extends Component {
  showTeams() {
    return data.teams.map(team => {
      return (
        <Row>
          <Col sm={12} md={3} className="team-pic">
            <img src={team.img} />
          </Col>
          <Col sm={12} md={9} className="team-info">
            <h3>{team.name}</h3>
            <p>{team.description}</p>
          </Col>
        </Row>
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <Grid>
          <Row className="header">
            <Col sm={24}>
              <h1>Meet The Team...</h1>
            </Col>
          </Row>
          <div className="teams">{this.showTeams()}</div>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Teams;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col } from "react-bootstrap";

import "../../assets/css/Teams.css";

import * as data from "../../assets/data.json";

class Teams extends Component {
  showTeams() {
    return data.teams.map(team => {
      return (
        <Row key={team.name}>
          <Col sm={12} md={3} className="team-pic">
            <img alt="teams" src={team.img} />
          </Col>
          <Col sm={12} md={7} className="team-info">
            <Link to={team.link}>
              <h3>{team.name}</h3>
            </Link>
            <p>{team.description}</p>
          </Col>
        </Row>
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <Grid fluid={true}>
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

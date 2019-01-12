import React, { Component } from "react";
import { Row, Col } from "antd";

import "../../assets/css/Teams.css";

import * as data from "./teams.json";

class Teams extends Component {
  showTeams() {
    return data.teams.map(team => {
      return (
        <Row>
          <Col sm={24} md={8}>
            <img src={team.img} />
          </Col>
        </Row>
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <Row className="header">
          <Col sm={24}>
            <h1>Meet The Team...</h1>
          </Col>
        </Row>
        <div className="teams">{this.showTeams()}</div>
      </React.Fragment>
    );
  }
}

export default Teams;

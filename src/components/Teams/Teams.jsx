import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

import "../../assets/css/Teams.css";
import * as data from "../../assets/data.json";

AOS.init();

class Teams extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  showTeams() {
    return data.teams.map(team => {
      return (
        <Row
          key={team.name}
          data-aos="fade-right"
          data-aos-delay="10"
          data-aos-easing="ease-in"
        >
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
            <Col
              sm={24}
              data-aos="fade-down"
              data-aos-delay="30"
              data-aos-easing="ease-in"
            >
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

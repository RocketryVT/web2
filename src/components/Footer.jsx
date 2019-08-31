import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid, Col, Row } from "react-bootstrap";

import "../assets/css/Footer.css";
import logo from "../assets/images/rocketry_layer2.png";

class Footer extends Component {
  render() {
    return (
      <div>
        {/* <footer>
          <Grid>
            <Col className="footer-left" sm={6}>
              <Row>
                <a href="mailto:rocketry.vt@gmail.com">
                  <h4>rocketry.vt@gmail.com</h4>
                </a>
              </Row>
              <Row>
                <h5>Special Thanks To:</h5>
                <h5 className="sponsor">Sponsor #1</h5>
                <h5 className="sponsor">Sponsor #2</h5>
              </Row>
            </Col>
            <Col className="footer-right" sm={6}>
              <Row>
                <Link to="/">
                  <h4>Home</h4>
                </Link>
              </Row>
              <Row>
                <Link to="/teams">
                  <h4>Teams</h4>
                </Link>
              </Row>
              <Row>
                <Link to="/apply">
                  <h4>Apply</h4>
                </Link>
              </Row>
            </Col>
          </Grid>
        </footer> */}

        <footer>
          <div className="footer-content">
            <div className="logo">
              <a href="/"><img src={logo}/></a>
            </div>
            <div className="nav">
              <ul>
                <li>
                  <Link to="/">
                    <h4>Home</h4>
                  </Link>
                </li>
                <li>
                  <Link to="/teams">
                    <h4>Teams</h4>
                  </Link>
                </li>
                <li>
                  <Link to="/projects">
                    <h4>Projects</h4>
                  </Link>
                </li>
                <li>
                  <Link to="/apply">
                    <h4>Apply</h4>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="contact">
            <a href="mailto:rocketry.vt@gmail.com">
                    <h4>rocketry.vt@gmail.com</h4>
                  </a>
            </div>
          </div>
          <h4 className="sponsor-heading">Our Sponsors</h4>
          <div className="sponsors">
            <div className="left-sponsors">
              <ul>
                <li>Virginia Space Grant Consortium</li>
                <li>Newton Engineering & Product Development</li>
                <li>All First Industrial Contractors</li>
              </ul>
            </div>
            <div className="right-sponsors">
              <ul>
                <li>Truesdell Engineering, Inc.</li>
                <li>a.i. solutions</li>
                <li>Virginia Tech Aerospace & Ocean Engineering</li>
              </ul>
            </div>
        </div>
        </footer>
      </div>
    );
  }
}

export default Footer;

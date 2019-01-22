import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid, Col, Row } from "react-bootstrap";

import "../assets/css/Footer.css";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
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
                <Link to="/about">
                  <h4>About</h4>
                </Link>
              </Row>
              <Row>
                <Link to="/apply">
                  <h4>Apply</h4>
                </Link>
              </Row>
            </Col>
          </Grid>
        </footer>
      </div>
    );
  }
}

export default Footer;

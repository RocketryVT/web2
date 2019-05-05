import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import About from "./About";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../assets/css/Home.css";
import coverPhoto from "../assets/images/rocket_fullscreen.jpg";

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Grid fluid>
          <Row>
            <Col xs={12}>
              <img alt="cover" src={coverPhoto} className="resp" />
            </Col>
          </Row>
        </Grid>
        <About />
      </div>
    );
  }
}

export default Home;

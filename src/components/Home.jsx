import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col, Image, Button } from "react-bootstrap";
import ReactDOM from "react-dom";
import { Carousel } from "antd";
import About from "./About";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../assets/css/Home.css";
import coverPhoto from "../assets/images/rocket_fullscreen.jpg";
import data from "../assets/data.json"

class Home extends Component {
  render() {
    return (
      <div>
        <Grid fluid>
          <Row>
            <Col xs={12}>
              <img src={coverPhoto} className="resp" />
            </Col>
          </Row>
        </Grid>
        <About />
      </div>
    );
  }
}

export default Home;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col, Image, Button } from "react-bootstrap";
import ReactDOM from "react-dom";
import { Carousel } from "react-responsive-carousel";
import About from "./About";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../assets/css/Home.css";
import coverPhoto from "../assets/images/rocket_fullscreen.jpg";
import coverPhoto2 from "../assets/images/rocketry_team.jpg";

class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/about" className="about-btn">
          <Button bsStyle="default">Learn More</Button>
        </Link>
        <Carousel
          showThumbs={false}
          showIndicators={false}
          swipeable={true}
          infiniteLoop={true}
        >
          <div>
            <img src={coverPhoto} />
          </div>
          <div>
            <img src={coverPhoto2} />
          </div>
        </Carousel>
        {/* <Carousel>
          <Carousel.Item>
            <img alt="rocket launch" src={coverPhoto} />
            <Carousel.Caption>
              <Link to="/about">
                <Button bsStyle="default">Learn More</Button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> */}
        <About />
      </div>

    );
  }
}

export default Home;

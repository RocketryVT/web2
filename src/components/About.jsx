import React, { Component } from "react";
import "../assets/css/About.css";
import AOS from "aos";
import "aos/dist/aos.css";

import * as data from "../assets/data.json";

AOS.init();

class About extends Component {
  render() {
    return (
      <div className="top-div">
        <h1 data-aos="fade-down" data-aos-delay="20" data-aos-easing="ease-in">
          What is Rocketry at VT?
        </h1>
        <p
          className="about-p"
          data-aos="fade-down"
          data-aos-delay="30"
          data-aos-easing="ease-in"
        >
          {data.HomePage.AboutSplash}
        </p>
      </div>
    );
  }
}

export default About;

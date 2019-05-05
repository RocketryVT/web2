import React, { Component } from "react";
import "../assets/css/About.css";
import * as data from "../assets/data.json";

class About extends Component {
  render() {
    return (
      <div className="top-div">
        <h1>What is Rocketry at VT?</h1>
        <p className="about-p">{data.HomePage.AboutSplash}</p>
      </div>
    );
  }
}

export default About;

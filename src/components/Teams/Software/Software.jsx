import React, { Component } from "react";
import { Row, Col } from "antd";

import "../../../assets/css/Software.css";
import Repos from "./Repos";

class Software extends Component {
  getRepos() {}

  render() {
    return (
      <div>
        <h1>Software</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at
          libero gravida felis posuere dapibus et quis turpis. Nullam
          sollicitudin, urna in feugiat porttitor, mauris orci pharetra tellus,
          quis convallis ante mi non neque. Vivamus ac lorem eget elit molestie
          gravida vel ut nulla. Aenean ullamcorper elit urna, a sagittis enim
          dapibus ut. Suspendisse eget metus a nibh tempor porttitor non et
          felis. Praesent congue eu ipsum a tincidunt. Cras posuere eros ipsum,
          sit amet aliquet risus ultrices feugiat.
        </p>

        <h3>Recent Projects</h3>
        <Repos />
      </div>
    );
  }
}

export default Software;

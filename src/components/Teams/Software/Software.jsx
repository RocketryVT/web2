import React, { Component } from "react";
import { Row, Col } from "antd";

import "../../../assets/css/Software.css";
import Repos from "./Repos";
import Members from "../Members";

class Software extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

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
        <div className="repos">
          <Repos />
        </div>
        <Members />
      </div>
    );
  }
}

export default Software;

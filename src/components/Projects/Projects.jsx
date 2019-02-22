import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

import CustomModal from "./CustomModal";
import rocket from "../../assets/images/rocket_gray.png";
import "../../assets/css/Projects.css";

class Projects extends Component {
  render() {
    return (
      <div>
        <div className="rocket">
          <img src={rocket} alt="rocket" />
          <div className="nosecone">
            <CustomModal title="Test Title" description="test description" />
          </div>
          <div className="payload">
            <CustomModal title="Test Title" description="test description" />
          </div>
          <div className="avionics">
            <CustomModal title="Test Title" description="test description" />
          </div>
          <div className="propulsion" />
          <div className="fins" />
        </div>
      </div>
    );
  }
}

export default Projects;

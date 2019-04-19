import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

import CustomModal from "./CustomModal";
import rocket from "../../assets/images/rocket_gray.png";
import "../../assets/css/Projects.css";

class Projects extends Component {
  render() {
    return (
      <div className="container-fluid bg">
        <Col md={6}>
          <div className="info">
            <h1>Here are some stats about the rocket:</h1>
            <h4>
              This rocket is really really fast. It can go 0-60 in at least 15
              second. It can go basically the same speed as the ISS. In fact, I
              think once we launch it, it will reach escape velocity and get
              lost in space. To counteract this, we are attaching trashbags to
              the fins as a sort of makeshift drogue chute. If we attach the
              right number of trashbags, our rocket will reach the intended
              altitude of 10,000 ft. At that point, which we all know is called
              apogee, the payload will deploy. Our payload this year is just a
              bunch of fireworks. However, they aren't just any old fireworks.
              They will display a dazzling portrait of our most valuable team
              member, Colton Mumley. On descent, the rocket will initiate the
              landing boosters, similar to the the Falcon 9, except better. Once
              it lands flawlessly, confetti will shoot out of the top and the
              onboard speakers will play Shooting Stars by Bag Raiders.
            </h4>
          </div>
        </Col>
        <Col md={6}>
          <div className="rocket">
            <img src={rocket} alt="rocket" />
            <div className="nosecone">
              <CustomModal
                title="Test Title"
                description="test description"
                location="/software"
                buttonTitle="Nosecone"
              />
            </div>
            <div className="payload">
              <CustomModal
                title="Test Title"
                description="test description"
                location="/software"
                buttonTitle="Payload"
              />
            </div>
            <div className="avionics">
              <CustomModal
                title="Electronics Bay"
                description="Having an easily accessible and amendable platform to work on can accelerate the manufacturing phase and enable the team to fix any issues on the electronics more conveniently. The modular electronics bay that the subteam develops allows the team to access each layer of the bay individually and enables the team to swap out any broken pieces without a problem."
                location="/avionics"
                buttonTitle="Electronics bay"
              />
            </div>
            <div className="propulsion" />
            <div className="fins" />
          </div>
        </Col>
      </div>
    );
  }
}

export default Projects;

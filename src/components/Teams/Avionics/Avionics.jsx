import React, { Component } from "react";
import { Grid, Col, Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

import ads from "../../../assets/images/Avionics/ADS.PNG";
import "../../../assets/css/Avionics.css";

AOS.init();

class Avionics extends Component {
  render() {
    return (
      <div>
        <h1 data-aos="fade-down">Avionics and Recovery</h1>
        <Grid fluid className="projects">
          <Row>
            <Col
              md={6}
              data-aos="fade-right"
              data-aos-delay="80"
              data-aos-easing="ease-in"
            >
              <h3>Active Drag System (ADS)</h3>
              <p>
                Reaching a desired apogee is crucial in the success of the
                mission. To control the rocket to meet the target apogee, the
                ADS deploys multiple airbrakes during the coast phase after the
                motor burnout to actively control the drag force of the rocket
                preventing the rocket to surpass the target apogee. With the
                mathematical model developed by the subteam and collaboration
                with the Software Subteam, the team successfully developed an
                algorithm to predict and control the apogee of the rocket.
              </p>
            </Col>
            <Col md={6}>
              <img src={ads} className="ads-pic" />
            </Col>
          </Row>
          <Row className="darkmode">
            <Col md={6} />
            <Col
              md={6}
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-easing="ease-in"
            >
              <h3>Live Telemetry</h3>
              <p>
                To control the hybrid motor, to get a live feedback and data
                from the rocket, and to successfully recover the rocket, a
                reliable telemetry system is required. So, the Avionics and
                Recovery subteam develops a telemetry system that utilizes RF
                and organizes multiple steps to validate the reliability of the
                system.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={6} data-aos="fade-right">
              <h3>Electronics Bay</h3>
              <p>
                Having an easily accessible and amendable platform to work on
                can accelerate the manufacturing phase and enable the team to
                fix any issues on the electronics more conveniently. The modular
                electronics bay that the subteam develops allows the team to
                access each layer of the bay individually and enables the team
                to swap out any broken pieces without a problem.
              </p>
            </Col>
          </Row>
          <Row className="darkmode">
            <Col md={6} />
            <Col md={6} data-aos="fade-left">
              <h3>Recovery Cycle</h3>
              <p>
                As soon as the rocket leaves the launch pad, it is our subteam’s
                responsibility to bring the rocket back safety. The recovery
                cycle that the subteam designed examines each step of the flight
                and spans a series of plans for a successful recovery. Our
                subteam meticulously picks the most optimal parachutes for the
                size and weight of the rocket and designs parachute bays to hold
                them. Then, we develop a parachute ejection system which will
                deploy the parachutes at a desired apogee and at a desired
                flight phase. Once the rocket is on the ground, our team uses
                our tracking devices and telemetry system to track down the
                exact location of the rocket. Also, considering the unforgiving
                environment of the launch site – a desert with the temperature
                over the 100 degrees – our subteam builds a special cart that
                has been specifically designed for the recovery mission to
                transport the retrieved rocket as efficiently as possible.
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Avionics;

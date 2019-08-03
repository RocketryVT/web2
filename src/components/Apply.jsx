import React, { Component } from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import "../assets/css/Apply.css";

class Apply extends Component {
  render() {
    return (
      <div className="apply">
        <h1>Applications for 2019-2020</h1>
        <Form>
          <FormGroup row>
            <Label for="exampleEmail" sm={10}>
              Email
            </Label>
            <Col sm={10}>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="example@vt.edu"
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleSelect" sm={10}>
            Do you want to join the Rocketry Team?
            </Label>
            <Col sm={10}>
              <Input type="select" name="select" id="exampleSelect">
                <option>Yes</option>
                <option>Hell Yes</option>
              </Input>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleSelectMulti" sm={10}>
              What Subteams do you want to be a part of? 
            </Label>
            <Col sm={10}>
              <Input
                type="select"
                name="selectMulti"
                id="exampleSelectMulti"
                multiple
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleText" sm={10}>
            (Intended) Major(s) 
            </Label>
            <Col sm={10}>
              <Input type="textarea" name="text" id="exampleText" />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleText" sm={10}>
            Prior Engineering/Technical Experience (*Not required*)
            </Label>
            <Col sm={10}>
              <Input type="textarea" name="text" id="exampleText" />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleText" sm={10}>
            Prior Engineering/Technical Experience (*Not required*)
            </Label>
            <Col sm={10}>
              <Input type="textarea" name="text" id="exampleText" />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleText" sm={10}>
            Tell me about the best group/team experience you have been apart of and why 
            </Label>
            <Col sm={10}>
              <Input type="textarea" name="text" id="exampleText" />
            </Col>
          </FormGroup>


          <FormGroup row>
            <Label for="exampleText" sm={10}>
            Describe a crisis you have had on a project you were on, and your role in resolving it *
            </Label>
            <Col sm={10}>
              <Input type="textarea" name="text" id="exampleText" />
            </Col>
          </FormGroup>
          
          <FormGroup row>
            <Label for="exampleText" sm={10}>
            What are the qualities of a good leader? *
            </Label>
            <Col sm={10}>
              <Input type="textarea" name="text" id="exampleText" />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleText" sm={10}>
            Tell me about a time you have failed. This need not be in regards to a technical project or team project, and may be a personal failing of some kind: *
            </Label>
            <Col sm={10}>
              <Input type="textarea" name="text" id="exampleText" />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleText" sm={10}>
            Describe a time when you came up with a creative solution to a problem *
            </Label>
            <Col sm={10}>
              <Input type="textarea" name="text" id="exampleText" />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleText" sm={10}>
            What is the best quality (or qualities) that you bring to the team? 
            </Label>
            <Col sm={10}>
              <Input type="textarea" name="text" id="exampleText" />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleText" sm={10}>
            How much time per week do you think is reasonable to devote to the team? *
            </Label>
            <Col sm={10}>
              <Input type="textarea" name="text" id="exampleText" />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleText" sm={10}>
            Is there anything else you would like to share with us? (not required)
            </Label>
            <Col sm={10}>
              <Input type="textarea" name="text" id="exampleText" />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleFile" sm={10}>
              Resume
            </Label>
            <Col sm={10}>
              <Input type="file" name="file" id="exampleFile" />
              <FormText color="muted">
                Please attach your resume for use to review
              </FormText>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleFile" sm={10}>
              Meme
            </Label>
            <Col sm={10}>
              <Input type="file" name="file" id="exampleFile" />
              <FormText color="muted">
                Upload Your Dankest Meme
              </FormText>
            </Col>
          </FormGroup>

          <FormGroup row>
            {/* Check box might be more effective for subteam selection*/}
            <Label for="checkbox2" sm={10}>
              Checkbox
            </Label>
            <Col sm={{ size: 10 }}>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id="checkbox2" /> Check me out
                </Label>
              </FormGroup>
            </Col>
          </FormGroup>

          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button color="primary">Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default Apply;

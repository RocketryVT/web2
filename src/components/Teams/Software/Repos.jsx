import React, { Component } from "react";
import { Grid, Col, Row } from "react-bootstrap";
import { Card } from "antd";

import "../../../assets/css/Repos.css";
const Octokit = require("@octokit/rest");
const octokit = new Octokit();

class Repos extends Component {
  constructor() {
    super();
    this.state = {
      repos: []
    };
  }

  componentDidMount() {
    this.getRepos();
  }

  // Gets a list of most recently updated repos
  getRepos() {
    octokit.repos
      .listForUser({
        username: "RocketryVT",
        sort: "updated",
        per_page: 5,
        page: 1
      })
      .then(resp => this.setState({ repos: resp.data }));
  }

  // Gets profile image url of top contributor to repo
  getTopContributor() {
    let me = octokit.repos
      .listContributors({
        owner: "RocketryVT",
        repo: "Website"
      })
      .then(resp => resp.data[0].avatar_url);
    console.log(me);
  }

  // Returns cards of repos
  showRepos() {
    return this.state.repos.map((repo, index) => {
      return (
        <Card
          key={index}
          className="repo-cards"
          cover={<img alt="card cover" src="" />}
        >
          <p>{repo.name}</p>
        </Card>
      );
    });
  }

  render() {
    return (
      <Grid fluid className="card-container">
        {this.getTopContributor()}
        <Row>
          <Col sm={6} md={12}>
            {this.showRepos()}
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Repos;

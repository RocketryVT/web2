import React, { Component } from "react";
import { Grid, Col, Row } from "react-bootstrap";

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
        per_page: 4,
        page: 1
      })
      .then(resp => this.setState({ repos: resp.data }));
  }

  // Gets profile image url of top contributor to repo
  getTopContributor() {
    return octokit.repos
      .listContributors({
        owner: "RocketryVT",
        repo: "Website"
      })
      .then(resp => resp.data[0].avatar_url);
  }

  // Returns cards of repos
  showRepos() {
    console.log("repos: ", this.state.repos);
    return this.state.repos.map((repo, index) => {
      let url = repo.html_url;
      return (
        <div
          key={index}
          onClick={() => this.handleClick(url)}
          className="repo-cards"
        >
          <div className="overlay">
            <p className="repo-name">{repo.name}</p>
            <p>{repo.language}</p>
          </div>
        </div>
      );
    });
  }

  // Opens clicked repository in a new tab
  handleClick(url) {
    window.open(url, "_blank");
  }

  render() {
    return (
      <Grid fluid className="card-container">
        <Row>
          <Col>
            <h2>Recent Projects</h2>
            {this.showRepos()}
          </Col>
        </Row>
        <div className="filler" />
      </Grid>
    );
  }
}

export default Repos;

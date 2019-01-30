import React, { Component } from "react";
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

  getRepos() {
    octokit.repos
      .listForUser({ username: "RocketryVT" })
      .then(resp => this.setState({ repos: resp.data }));
  }

  showRepos() {
    return this.state.repos.map((repo, index) => {
      return <p key={index}>{repo.name}</p>;
    });
  }

  render() {
    return <div>{this.showRepos()}</div>;
  }
}

export default Repos;

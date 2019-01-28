import React, { Component } from "react";
const Octokit = require("@octokit/rest");
const octokit = new Octokit();

class Repos extends Component {
  getRepos() {
    octokit.repos
      .listForUser({ username: "RocketryVT" })
      .then(resp => console.log(resp));
  }

  render() {
    return <div>{this.getRepos()}</div>;
  }
}

export default Repos;

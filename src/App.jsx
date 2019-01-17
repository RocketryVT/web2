import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Teams from "./components/Teams/Teams.jsx";
import Apply from "./components/Apply";
import Navbar from "./components/CustomNavbar";
import Software from "./components/Teams/Software";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/teams" component={Teams} />
          <Route path="/apply" component={Apply} />
          <Route path="/software" component={Software} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

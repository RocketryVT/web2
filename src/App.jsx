import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Teams from "./components/Teams/Teams.jsx";
import Projects from "./components/Projects/Projects";
import Apply from "./components/Apply";
import Navbar from "./components/CustomNavbar";
import Software from "./components/Teams/Software/Software";
import Avionics from "./components/Teams/Avionics/Avionics";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/teams" component={Teams} />
          <Route path="/projects" component={Projects} />
          <Route path="/apply" component={Apply} />
          <Route path="/software" component={Software} />
          <Route path="/avionics" component={Avionics} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

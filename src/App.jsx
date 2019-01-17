import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Apply from "./components/Apply";
import Navbar from "./components/CustomNavbar";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/apply" component={Apply} />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

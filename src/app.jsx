import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/NavBar";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import Routes from "./components/Routes";
import "./App.css";
import About from "./components/about";
import Services from "./components/ourServices";
import LandingPage from "./components/LandingPage";
import ReallySmoothScroll from "really-smooth-scroll";
ReallySmoothScroll.shim();
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <LandingPage />
        </div>
      </Router>
    );
  }
}

export default App;

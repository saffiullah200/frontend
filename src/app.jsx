import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/NavBar";
import Slider from "./components/Slider";
import Routes from "./components/Routes";
import "./app.css";
import ReallySmoothScroll from "really-smooth-scroll";
import landingPage from "./components/landingPage";
ReallySmoothScroll.shim();
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <landingPage />
        </div>
      </Router>
    );
  }
}

export default App;

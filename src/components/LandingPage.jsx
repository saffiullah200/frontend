import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Footer";
import Routes from "./Routes";

import About from "./about";
import Services from "./ourServices";

class LandingPage extends Component {
  state = {};
  render() {
    return (
      <div>
        {" "}
        <Routes />
        <About />
        <Services />
        <Footer />
      </div>
    );
  }
}

export default LandingPage;

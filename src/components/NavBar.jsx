import React, { Component } from "react";
import { Header } from "react-mdl";
import { Container, StyledLink, StyledA } from "../css/NavMenu.style";
import "../css/NavBar.css";
import ReallySmoothScroll from "really-smooth-scroll";
ReallySmoothScroll.shim();
class NavMenu extends Component {
  render() {
    return (
      <Container>
        <Header>
          {" "}
          <StyledLink to={"/"}>Home</StyledLink>
          <StyledLink to={"/projects"}>Projects</StyledLink>
          <StyledLink to={"/aboutMe"}>About Me</StyledLink>
          <StyledLink to={"/tutorials"}>How I make this?</StyledLink>
          <StyledA href={"https://standardresume.co/chuhoangson"}>
            Resume
          </StyledA>
        </Header>
      </Container>
    );
  }
}

export default NavMenu;

//import Modal from "react-responsive-modal";

// import React from "react";
// import "../css/NavBar.css";
// import { Link } from "react-router-dom";
// import LOGO from "../images/logo.png";
// import { Layout, Header, Drawer, Content, Navigation } from "react-mdl";

// const NavBar = () => {
//   return (
//     <div style={{ position: "relative" }}>
//       <Header
//         title={
//           <img
//             style={{ top: 100, width: 90, height: 39 }}
//             src={require("../images/logo.png")}
//           />
//         }
//       >
//         <Navigation>
//           <a href="/login">Login</a>
//           <a href="/signuP">Sign UP</a>
//         </Navigation>
//       </Header>
//     </div>
//   );
// };
// export default NavBar;

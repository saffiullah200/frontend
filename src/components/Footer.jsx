import React from "react";
import "../css/style.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        {/* End newsletter-form */}
        <ul class="social-links">
          <li>
            <a href="#link">
              <i class="fa fa-twitter fa-fw" />
            </a>
          </li>
          <li>
            <a href="#link">
              <i class="fa fa-facebook fa-fw" />
            </a>
          </li>
          <li>
            <a href="#link">
              <i class="fa fa-google-plus fa-fw" />
            </a>
          </li>
          <li>
            <a href="#link">
              <i class="fa fa-dribbble fa-fw" />
            </a>
          </li>
          <li>
            <a href="#link">
              <i class="fa fa-linkedin fa-fw" />
            </a>
          </li>
        </ul>
        <div class="credits">
          <a> Designed by Muhammad Saffi Ullah </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

// <h3>Register Yourself Now!</h3>
// <form className="mc-trial row">
//   <div className="nameField">
//     <div className="controls">
//       <input
//         name="name"
//         placeholder="Enter Your Name"
//         className="form-control"
//         type="text"
//       />
//     </div>
//   </div>
//   {/* End name input */}
//   <div className="emailField">
//     <div className="controls">
//       <input
//         name="EMAIL"
//         placeholder="Enter Your email"
//         className="form-control"
//         type="email"
//       />
//     </div>
//   </div>
//   {/* End email input */}
//   <div className="submitButton">
//     <p>
//       <button name="submit" type="submit" className="button">
//         Submit
//       </button>
//     </p>
//   </div>
// </form>

import React from "react";
import "../css/style.css";

import "../images/service1.png";
import "../images/service2.png";
import "../images/service3.png";
import "../images/service4.png";

const ourServices = () => {
  return (
    <React.Fragment>
      <section className="service text-center" id="service">
        <div className="container">
          <div className="row">
            <h2 style={{ paddingLeft: 300 }}>our services</h2>
            <h4 style={{ paddingLeft: 200 }}>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s
            </h4>
            <div className="col-md-3 col-sm-6">
              <div className="single-service">
                <div className="single-service-img">
                  <div className="service-img">
                    <img
                      className="heart img-responsive"
                      src={require("../images/service1.png")}
                      alt=""
                    />
                  </div>
                </div>
                <h3>Heart problem</h3>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-service">
                <div className="single-service-img">
                  <div className="service-img">
                    <img
                      className="brain img-responsive"
                      src={require("../images/service2.png")}
                      alt=""
                    />
                  </div>
                </div>
                <h3>brain problem</h3>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-service">
                <div className="single-service-img">
                  <div className="service-img">
                    <img
                      className="knee img-responsive"
                      src={require("../images/service3.png")}
                      alt=""
                    />
                  </div>
                </div>
                <h3>knee problem</h3>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-service">
                <div className="single-service-img">
                  <div className="service-img">
                    <img
                      className="bone img-responsive"
                      src={require("../images/service4.png")}
                      alt=""
                    />
                  </div>
                </div>
                <h3>human bones problem</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default ourServices;

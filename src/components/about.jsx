import React from "react";
import "../css/style.css";
import { Card, CardTitle, CardText, CardActions, Button } from "react-mdl";
import "../images/item1.jpg";
import "../images/item2.jpg";
import "../images/item3.jpg";

const About = () => {
  return (
    <React.Fragment>
      <section class="about text-center" id="about">
        <div class="container">
          <div class="row">
            <h2 style={{ paddingLeft: 400 }}> about us</h2>
            <h4>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled
            </h4>
            <div class="col-md-4 col-sm-6">
              <div class="single-about-detail clearfix">
                <div class="about-img">
                  <img class="img-responsive" src="img/item1.jpg" alt="" />
                </div>
                <div class="about-details">
                  <div class="pentagon-text">
                    <h1>C</h1>
                  </div>
                  <h3>Children’s specialist</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="single-about-detail">
                <div class="about-img">
                  <img class="img-responsive" src="img/item2.jpg" alt="" />
                </div>
                <div class="about-details">
                  <div class="pentagon-text">
                    <h1>W</h1>
                  </div>

                  <h3>Children’s specialist</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="single-about-detail">
                <div class="about-img">
                  <img class="img-responsive" src="img/item3.jpg" alt="" />
                </div>
                <div class="about-details">
                  <div class="pentagon-text">
                    <h1>M</h1>
                  </div>
                  <h3>Children’s specialist</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default About;

// <Card
// shadow={0}
// style={{ width: "420px", height: "420px", margin: "auto" }}
// >
// <CardTitle className="cardImage1" expand />
// <CardText>
//   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan
//   convallis.
// </CardText>
// <CardActions border>
//   <Button colored>View Updates</Button>
// </CardActions>
// </Card>
// <Card
// shadow={0}
// style={{ width: "420px", height: "420px", margin: "auto" }}
// >
// <CardTitle className="cardImage1" expand />
// <CardText>
//   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan
//   convallis.
// </CardText>
// <CardActions border>
//   <Button colored>View Updates</Button>
// </CardActions>
// </Card>

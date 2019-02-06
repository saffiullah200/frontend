import React from "react";
import { Slide } from "react-slideshow-image";
import "../slider.css";
import slideOne from "../images/slide-one.jpg";
import slideTwo from "../images/slide-two.jpg";
import slideThree from "../images/slide-three.jpg";
import slideFour from "../images/slide-four.jpg";

const slideImage = [slideOne, slideTwo, slideThree, slideFour];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
};

const Slider = () => {
  return (
    <div className="banner">
      <Slide {...properties}>
        <div className="each-slide">
          <div
            className="sliderImage"
            style={{
              backgroundImage: `url(${slideImage[0]})`
            }}
          />
        </div>
        <div className="each-slide">
          <div
            className="sliderImage"
            style={{ backgroundImage: `url(${slideImage[1]})` }}
          />
        </div>
        <div className="each-slide">
          <div
            className="sliderImage"
            style={{ backgroundImage: `url(${slideImage[2]})` }}
          />
        </div>
        <div className="each-slide">
          <div
            className="sliderImage"
            style={{ backgroundImage: `url(${slideImage[3]})` }}
          />
        </div>
      </Slide>
    </div>
  );
};
export default Slider;

// import React, { Component } from "react";
// import slideOne from "../images/slide-one.jpg";
// import slideTwo from "../images/slide-two.jpg";
// import slideThree from "../images/slide-three.jpg";
// import slideFour from "../images/slide-four.jpg";

// const RightArrow = props => {
//   return (
//     <div className="nextArrow" onClick={props.goToNextSlide}>
//       <i className="fa fa-arrow-right fa-2x" aria-hidden="true" />
//     </div>
//   );
// };

// const LeftArrow = props => {
//   return (
//     <div className="backArrow" onClick={props.goToPrevSlide}>
//       <i className="fa fa-arrow-left fa-2x" aria-hidden="true" />
//     </div>
//   );
// };

// const Slide = ({ image }) => {
//   const styles = {
//     backgroundImage: `url(${image})`,
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "50% 60%"
//   };
//   return <div className="slide" style={styles} />;
// };

// export default class Slider extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       images: [slideOne, slideTwo, slideThree, slideFour],
//       currentIndex: 0,
//       translateValue: 0
//     };
//   }

//   goToPrevSlide = () => {};

//   goToNextSlide = () => {
//     // Exiting the method early if we are at the end of the images array.
//     // We also want to reset currentIndex and translateValue, so we return
//     // to the first image in the array.
//     if (this.state.currentIndex === this.state.images.length - 1) {
//       return this.setState({
//         currentIndex: 0,
//         translateValue: 0
//       });
//     }

//     // This will not run if we met the if condition above
//     this.setState(prevState => ({
//       currentIndex: prevState.currentIndex + 1,
//       translateValue: prevState.translateValue + -this.slideWidth()
//     }));
//   };

//   slideWidth = () => {
//     return document.querySelector(".slide").clientWidth;
//   };

//   render() {
//     return (
//       <div className="slider">
//         <div
//           className="slider-wrapper"
//           style={{
//             transform: `translateX(${this.state.translateValue}px)`,
//             transition: "transform ease-out 0.45s"
//           }}
//         >
//           {this.state.images.map((image, i) => (
//             <Slide key={i} image={image} />
//           ))}
//         </div>

//         <LeftArrow goToPrevSlide={this.goToPrevSlide} />

//         <RightArrow goToNextSlide={this.goToNextSlide} />
//       </div>
//     );
//   }
// }

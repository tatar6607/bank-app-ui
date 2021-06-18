import React from "react";
import { Carousel } from "react-bootstrap";
import Banner1 from "../images/banner1.png";
import Banner2 from "../images/banner2.png";
import Banner3 from "../images/banner3.png";

const Banner = () => {
  return (
    <Carousel
      nextIcon={
        <span aria-hidden="true" className="carousel-control-next-icon" />
      }
      nextLabel=""
      prevIcon={
        <span aria-hidden="true" className="carousel-control-prev-icon" />
      }
      prevLabel=""
    >
      <Carousel.Item interval={50000}>
        <img className="d-block w-100" src={Banner1} alt="First slide" />
        <Carousel.Caption>
          <button className="btn btn-danger"> Merhaba </button>
          <h3 className="text-dark">First slide label</h3>
          <p className="text-dark">
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={50000}>
        <img className="d-block w-100" src={Banner2} alt="Second slide" />
        <Carousel.Caption>
          <button className="btn btn-danger"> Hello </button>
          <h3 className="text-dark">2 slide label</h3>
          <p className="text-dark">
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Banner3} alt="Third slide" />
        <Carousel.Caption>
          <button className="btn btn-danger"> Bonjour </button>
          <h3 className="text-dark">2 slide label</h3>
          <p className="text-dark">
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;

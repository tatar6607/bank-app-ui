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
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={Banner1} alt="First slide" />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="d-block w-100" src={Banner2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Banner3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;

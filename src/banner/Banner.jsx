import React from "react";
import { Carousel } from "react-bootstrap";
import Banner1 from "../images/carousel/1.jpg";
import Banner2 from "../images/carousel/2.jpg";
import Banner3 from "../images/carousel/3.jpg";
import "./Banner.css";

const Banner = () => {
  let images = [
    {
      image: Banner1,
      btnLabel: "Bonjour",
      topic: "First slide label",
      description: "First slide label",
    },
    {
      image: Banner2,
      btnLabel: "Hello",
      topic: "First slide label",
      description: "First slide label",
    },
    {
      image: Banner3,
      btnLabel: "Merhaba",
      topic: "First slide label",
      description: "Merhaba Burasi aciklama",
    },
  ];
  return (
    <Carousel nextLabel="" prevLabel="">
      {images.map((data) => {
        const { image, btnLabel, topic, description } = data;
        return (
          <Carousel.Item interval={20000}>
            <img className="d-block w-100" src={image} alt="First slide" />
            <Carousel.Caption>
              <div>
                <button className="btn btn-danger"> {btnLabel} </button>
                <h3 className="text-dark">{topic}</h3>
                <p className="d-none d-md-block text-dark">{description}</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Banner;

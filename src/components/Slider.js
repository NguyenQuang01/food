import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  return (
    <div>
      <div className="container slider">
        <Carousel>
          <Carousel.Item interval={1000} className="heghtSlider">
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <span>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </span>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500} className="heghtSlider">
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="heghtSlider">
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <span>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </span>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;

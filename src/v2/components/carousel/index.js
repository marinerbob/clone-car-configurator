import React from "react";

import Carousel from "react-bootstrap/Carousel";

const carousel = () => (
    <Carousel variant="dark" indicators={false} interval={null}>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={`${process.env.PUBLIC_URL}/cars/model_y/model_y_red_wheel_1.png`}
                alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={`${process.env.PUBLIC_URL}/cars/model_s/model_s_red_wheel_1.png`}
                alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={`${process.env.PUBLIC_URL}/cars/model_x/model_x_red_wheel_1.png`}
                alt="Third slide"
            />
        </Carousel.Item>
    </Carousel>
);

export default carousel;
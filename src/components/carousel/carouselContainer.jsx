import React, { memo } from 'react';

import Carousel from 'react-bootstrap/Carousel';

const CarouselContainer = memo(({ activeIndex, images, onSelect }) => (
    <Carousel onSelect={onSelect} activeIndex={activeIndex} variant="dark" indicators={false} interval={null}>
        { images && images.map(image => (
            <Carousel.Item key={image.alt}>
                <img
                    className="page-carousel__image d-block w-100"
                    src={image.url}
                    alt={image.alt}
                    />
            </Carousel.Item>
        )) }
    </Carousel>
));

export default CarouselContainer;
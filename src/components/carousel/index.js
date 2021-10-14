import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

import { useDispatch, useSelector } from 'react-redux';

import { updateModelByIndex } from '../../reduxSetup/currentConfigSlice';
import { getCarImages, getActiveIndex } from '../../reduxSetup/currentConfigSlice/selectors';

const CarouselContainer = ({ activeIndex, images, onSelect }) => (
    <Carousel onSelect={onSelect} activeIndex={activeIndex} variant="dark" indicators={false} interval={null}>
        { images && images.map(image => (
            <Carousel.Item key={image.alt}>
                <img
                    className="d-block w-100"
                    src={image.url}
                    alt={image.alt}
                    />
            </Carousel.Item>
        )) }
    </Carousel>
);


const ConnectedCarousel = () => {
    const dispatch = useDispatch();

    const images = useSelector(getCarImages);
    const activeIndex = useSelector(getActiveIndex);
    const onSelect = (selectedIndex) => {
        dispatch(updateModelByIndex({
            index: selectedIndex
        }));
    };

    return (
        <CarouselContainer onSelect={onSelect} activeIndex={activeIndex} images={images} /> 
    );
};



export default ConnectedCarousel;
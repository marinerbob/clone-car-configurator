import React, { useCallback } from 'react';

import Carousel from 'react-bootstrap/Carousel';

import { useDispatch, useSelector } from 'react-redux';

import { updateModelByIndex } from '../../reduxSetup/currentConfigSlice';
import { getModelImages, getActiveIndex } from '../../reduxSetup/currentConfigSlice/selectors';

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


const ConnectedCarousel = ({ modelBinding }) => {
    const dispatch = useDispatch();

    const images = useSelector(getModelImages(modelBinding || 'cars'));
    const activeIndex = useSelector(getActiveIndex);
    const onSelect = useCallback(
        (selectedIndex) => {
            dispatch(updateModelByIndex({
                index: selectedIndex
            }));
        },
        [dispatch],
    )

    return (
        <CarouselContainer onSelect={onSelect} activeIndex={activeIndex} images={images} /> 
    );
};



export default ConnectedCarousel;
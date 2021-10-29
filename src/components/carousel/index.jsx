import React, { useCallback } from 'react';

import Carousel from 'react-bootstrap/Carousel';

import { useDispatch, useSelector } from 'react-redux';

import { updateModelByIndex } from '../../reduxSetup/currentConfigSlice';
import { getModelImages, getActiveCarouselIndex } from '../../reduxSetup/currentConfigSlice/selectors';

const CarouselContainer = ({ activeIndex, images, onSelect }) => (
    <Carousel onSelect={onSelect} activeIndex={activeIndex} variant="dark" indicators={false} interval={null}>
        { images && images.map(image => (
            <Carousel.Item key={image.alt}>
                <img
                    className="d-block w-100 mh-50vh"
                    src={image.url}
                    alt={image.alt}
                    />
            </Carousel.Item>
        )) }
    </Carousel>
);


const ConnectedCarousel = ({ modelBinding = null }) => {
    const dispatch = useDispatch();

    const images = useSelector(getModelImages(modelBinding));
    const activeIndex = useSelector(getActiveCarouselIndex(modelBinding));

    const onSelect = useCallback((selectedIndex) => {
            dispatch(updateModelByIndex({
                index: selectedIndex,
                prop: modelBinding
            }));
        }, [dispatch, modelBinding])

    return (
        <CarouselContainer onSelect={onSelect} activeIndex={activeIndex} images={images} /> 
    );
};



export default ConnectedCarousel;
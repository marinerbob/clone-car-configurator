import React, { memo, useCallback } from 'react';

import Carousel from 'react-bootstrap/Carousel';

import { useDispatch, useSelector } from 'react-redux';

import { updateModelByIndex } from '../../reduxSetup/currentConfigSlice';
import { getModelImages, getActiveCarouselIndex } from '../../reduxSetup/currentConfigSlice/selectors';

import './carousel.css';

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

CarouselContainer.displayName = 'CarouselContainer';


const ConnectedCarousel = ({ modelBinding = null }) => {
    const dispatch = useDispatch();

    const images = useSelector(getModelImages(modelBinding));
    const activeIndex = useSelector(getActiveCarouselIndex(modelBinding));

    const onSelect = useCallback((selectedIndex) => {
        dispatch(updateModelByIndex({
            index: selectedIndex,
            prop: modelBinding
        }));
    }, [dispatch, modelBinding]);

    console.log(activeIndex);

    return (
        <CarouselContainer onSelect={onSelect} activeIndex={activeIndex} images={images} /> 
    );
};

export const ConnectedCarCarousel = () => {
    const dispatch = useDispatch();
    const images = useSelector(getModelImages(null));
    const activeIndex = useSelector(getActiveCarouselIndex(null));

    const onSelect = useCallback((selectedIndex) => {
        dispatch(updateModelByIndex({
            index: selectedIndex,
            prop: null }));
    }, [dispatch]);

    return (
        <CarouselContainer onSelect={onSelect} activeIndex={activeIndex} images={images} /> 
    );
};

export default ConnectedCarousel;
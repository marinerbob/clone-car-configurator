import React, { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { updateModelByIndex } from '../../reduxSetup/currentConfigSlice';
import { getModelImages, getActiveCarouselIndex } from '../../reduxSetup/currentConfigSlice/selectors';

import CarouselContainer from './carouselContainer';

import './carousel.css';

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

export default ConnectedCarousel;
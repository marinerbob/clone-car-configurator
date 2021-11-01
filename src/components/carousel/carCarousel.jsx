import React, { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { updateModelByIndex } from '../../reduxSetup/currentConfigSlice';
import { getModelImages, getActiveCarouselIndex } from '../../reduxSetup/currentConfigSlice/selectors';

import CarouselContainer from './carouselContainer';

const ConnectedCarCarousel = () => {
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

export default ConnectedCarCarousel
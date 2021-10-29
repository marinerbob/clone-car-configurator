import React, { useCallback } from 'react';

import Carousel from 'react-bootstrap/Carousel';

import { useDispatch, useSelector } from 'react-redux';

import { updateConfig } from '../../reduxSetup/currentConfigSlice';
import { getModelImages, getActiveCarouselIndex, getPropByIndex } from '../../reduxSetup/currentConfigSlice/selectors';

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
    const modifiedBinding = modelBinding || 'cars';

    const images = useSelector(getModelImages(modifiedBinding));
    const activeIndex = useSelector(getActiveCarouselIndex(modifiedBinding));

    const onSelect = useCallback(
        (selectedIndex) => {
            dispatch(updateConfig({
                prop: modifiedBinding,
                value: useSelector(getPropByIndex(modifiedBinding, selectedIndex))
            }));
        },
        [dispatch, modifiedBinding],
    );

    return (
        <CarouselContainer onSelect={onSelect} activeIndex={activeIndex} images={images} /> 
    );
};



export default ConnectedCarousel;
import React from 'react';

import ImageContainer from './imageContainer';
import Carousel from '../carousel';

const Preview = ({ slides }) => (
    <>
        {slides ? <Carousel modelBinding={slides !== 'cars' ? slides : null} /> : 
        <ImageContainer />}
    </>
);

export default Preview;
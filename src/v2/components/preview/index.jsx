import React from 'react';

import ImageContainer from './imageContainer';
import Carousel from '../carousel';

const Preview = ({ slides }) => (
    <>
        {slides ? <Carousel /> : 
        <ImageContainer />}
    </>
);

export default Preview;
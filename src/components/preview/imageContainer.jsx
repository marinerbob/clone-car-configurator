import React from 'react';

import { Image } from 'react-bootstrap';

import { useSelector } from 'react-redux';
import { getCurrentCarImage } from '../../reduxSetup/currentConfigSlice/selectors';

const ImageContainer = () => {
    const carImage = useSelector(getCurrentCarImage);

    return (
        <Image
          className="d-block w-100"
          src={carImage.url}
          alt={carImage.alt}
        />
    );
}

export default ImageContainer;
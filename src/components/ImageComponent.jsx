import React from 'react';
import testImage from './images/logo512.png';

const ImageComponent = () => {
    return (
        <div>
            <img src={ testImage } alt="" />
            <img src={ require('./images/food1.jpg') } alt="" />
        </div>
    );
};

export default ImageComponent;
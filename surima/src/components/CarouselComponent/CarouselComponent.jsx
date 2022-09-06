import { Carousel } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import images from "./img/primeraImagen.png";

const CarouselComponent = () => (
    <Carousel autoplay>
        <div>
            <img src={images} alt="" />
        </div>
        <div>
            <img src={images} alt="" />
        </div>
        <div>
            <img src={images} alt="" />
        </div>
        <div>
            <img src={images} alt="" />
        </div>
    </Carousel>
);

export default CarouselComponent;
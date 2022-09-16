import React from "react";
import { ImageSlider } from "./ImageSlider";
import boom from "../../images/Secciones/entradas/Boom.jpg";

export const CarouselHome = () => {
    const slides = [
        {url: [boom], title: "One"},
        {url: [boom], title: "Two"},
        {url: [boom], title: "Tree"},
    ];

    const containerStyles = {
        width: "100%",
        heigth: "659px",
        margin: "0 auto",
    };

    return (
        <div style={containerStyles}>
            <ImageSlider slides={slides} />
        </div>
    )
}
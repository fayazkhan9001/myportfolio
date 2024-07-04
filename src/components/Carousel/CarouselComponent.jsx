import React from "react";
import Carousel from "./Carousel";

const CarouselComponent = () => {
  const slides = [
    "unsplash.png",
    "unsplash1.png",
    "unsplash3.png",
    "unsplash55.png",
    "unsplash12.png",
    "unsplash5.png",
  ];
  return (
    <div>
      <div className="w-[30%] m-auto my-8">
        <Carousel slides={slides} />
      </div>
    </div>
  );
};

export default CarouselComponent;

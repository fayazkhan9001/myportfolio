import React from "react";
import Carousel from "./Carousel";

const CarouselComponent = () => {
  const slides = [
    {
      image: "blog1.png",
      date: Date.now(),
      comment: "246 comments",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image: "blog2.png",
      date: Date.now(),
      comment: "246 comments",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image: "blog3.png",
      date: Date.now(),
      comment: "246 comments",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image: "blog4.png",
      date: Date.now(),
      comment: "246 comments",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image: "blog1.png",
      date: Date.now(),
      comment: "246 comments",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image: "blog2.png",
      date: Date.now(),
      comment: "246 comments",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image: "blog3.png",
      date: Date.now(),
      comment: "246 comments",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image: "blog4.png",
      date: Date.now(),
      comment: "246 comments",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <div>
      <div className="w-[100%] m-auto my-8">
        <Carousel slides={slides} />
      </div>
    </div>
  );
};

export default CarouselComponent;

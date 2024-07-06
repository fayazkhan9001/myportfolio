import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselTestimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="w-full md:w-3/4 m-auto mt-4">
      <Slider {...settings}>
        {data.map((d, i) => (
          <div key={i}>
            <p>{d.quote}</p>
            <h1 className="py-2 text-lg font-semibold">{d.author}</h1>
            <p className="pb-4">{d.designation}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselTestimonial;

const data = [
  {
    quote:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam dignissimos rerum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam dignissimos rerum minus doloribus iure aliquam minus doloribus iure aliquam aliquid ?",
    author: "Esther Howard",
    designation: "Managing Directior, ABC company",
  },
  {
    quote:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam dignissimos rerum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam dignissimos rerum minus doloribus iure aliquam minus doloribus iure aliquam aliquid ?",
    author: "Esther Howard",
    designation: "Managing Directior, ABC company",
  },
  {
    quote:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam dignissimos rerum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam dignissimos rerum minus doloribus iure aliquam minus doloribus iure aliquam aliquid ?",
    author: "Esther Howard",
    designation: "Managing Directior, ABC company",
  },
];

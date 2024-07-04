import React, { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  console.log(current);
  const previousSlide = () => {
    if (current == 0) {
      setCurrent(slides.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  const nextSlide = () => {
    if (current == slides.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };
  return (
    <div className="overflow-hidden ">
      <div
        className="flex transition ease-in-out duration-300"
        style={{ transform: `translateX(-${current * 25}%)` }}
      >
        {slides.map((data, i) => (
          <BlogCard data={data} />
        ))}
      </div>

      <div className="absolute top-0 text-blue-600 text-2xl w-full h-full flex justify-between items-center px-4  ">
        <button onClick={previousSlide}>
          <FaArrowAltCircleLeft />
        </button>
        <button onClick={nextSlide}>
          <FaArrowAltCircleRight />
        </button>
      </div>

      <div
        className={"absolute bottom-0 py-3 w-full flex justify-center gap-x-2"}
      >
        {slides.map((s, i) => {
          return (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full ${
                i == current ? "bg-white" : "bg-gray-300"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;

const BlogCard = ({ data }) => {
  return (
    <div className="cardWrapper">
      <div className="mx-1 w-[217px] border-[1px] rounded-md hover:shadow-lg">
        <div className="">
          <img className="rounded-t-md" src={data.image} alt="" />
        </div>
        <div className="p-2 text-sm">
          <p className="text-lightGrey py-1">
            {data.date}/{data.comment}
          </p>
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
};

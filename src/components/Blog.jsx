import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Blog = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="resContainer">
      <div className=" m-auto md:py-6">
        <div className="text-center w-full md:w-2/4 m-auto pt-6">
          <h1 className="text-2xl font-bold py-4">Blog</h1>
          <p className="text-sm text-lightGrey">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            itaque, nesciunt corporis rerum vitae ullam.
          </p>
        </div>
        <div className="my-10">
          <Slider {...settings}>
            {data.map((d, i) => (
              <div key={i} className="rounded-lg border-[1px] hover:shadow-lg">
                <div>
                  <img className="rounded-t-lg w-[100%]" src={d.image} />
                </div>

                <div className="p-2">
                  <p className="text-[12px] text-lightGrey">
                    {d.date} / {d.comment}
                  </p>
                  <p className="text-md pt-1">{d.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Blog;

const data = [
  {
    image: "blog1.png",
    date: Date.now(),
    comment: "246 comments",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    image: "blog2.png",
    date: Date.now(),
    comment: "246 comments",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    image: "blog3.png",
    date: Date.now(),
    comment: "246 comments",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    image: "blog4.png",
    date: Date.now(),
    comment: "246 comments",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
];

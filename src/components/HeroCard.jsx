import React from "react";
import {
  FiDownload,
  FiFacebook,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import fayazimg from "../assets/images/fayazimg.jpg";

const HeroCard = () => {
  return (
    <div className="block md:flex justify-between max-w-3xl mx-auto border p-3 gap-x-5 bg-white rounded-md shadow-md md:absolute ">
      <div className=" ">
        <img
          className="w-[100%] mx-auto md:mx-0  md:h-[230px] rounded-md  "
          src={fayazimg}
          alt=""
        />
        <div className="relative flex justify-center top-5">
          <SocialLink />
        </div>
      </div>
      <div className="w-[100%] my-6 md:w-[60%] md:my-6 mt-10 md:mt-0 ">
        <h1 className="text-xl font-bold">
          I am Professional User <br /> Experience Design
        </h1>
        <p className="py-2 pt-2 text-sm text-slate-400">
          I design and develop services for customers specializing creating
          stylish, modern websites, web services and online stores. My passion
          is to design digital user experiences.
        </p>
        <p className="py-2 pb-4 text-sm text-slate-400">
          creating stylish, modern websites, web services. I design and develop
          services for customers specializing
        </p>
        <div className="flex items-center gap-3">
          <button className=" rounded-md px-4 text-sm py-2 bg-primary border-[1px] text-white hover:bg-white hover:text-primary hover:border-primary hover:border-[1px]">
            My Project
          </button>
          <button className="border-[1px] rounded-md border-primary px-4 py-2 text-sm flex items-center text-primary hover:bg-primary hover:text-white ">
            <FiDownload className="text-xl me-2" />
            <span>Download CV</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;

const SocialLink = () => {
  const links = [
    {
      link: <FiFacebook />,
    },
    {
      link: <FiMail />,
    },
    {
      link: <FiLinkedin />,
    },
    {
      link: <FiGithub />,
    },
  ];
  return (
    <div className="absolute bottom-0  bg-white shadow-md rounded-sm ">
      <div className="flex gap-3 p-2 text-primary">
        {links.map((link, idx) => (
          <div
            key={idx}
            className="text-xl cursor-pointer hover:bg-primary hover:text-white p-[4px] rounded-sm"
          >
            {link.link}
          </div>
        ))}
      </div>
    </div>
  );
};

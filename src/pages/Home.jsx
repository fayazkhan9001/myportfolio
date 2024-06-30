import React from "react";
import Header from "../components/Header";
import Content from "../components/Content";
import HeroSection from "../components/HeroSection";
import Portfolio from "../components/Portfolio";

const Home = () => {
  return (
    <div className="bg-gray-100 border-2 ">
      <Header />
      <HeroSection />
      <Content />
      <Portfolio />
    </div>
  );
};

export default Home;

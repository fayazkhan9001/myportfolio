import React from "react";
import Header from "../components/Header";
import Content from "../components/Content";
import HeroSection from "../components/HeroSection";
import Portfolio from "../components/Portfolio";
import CallToAction from "../components/CallToAction";
import Blog from "../components/Blog";
import UserInfo from "../components/UserInfo";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div className="bg-gray-100 border-2 ">
      <Header />
      <HeroSection />
      <Content />
      <Portfolio />
      <CallToAction />
      <Blog />
      <UserInfo />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;

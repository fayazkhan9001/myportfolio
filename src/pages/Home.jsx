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
import ContactForm from "../components/ContactForm";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Content />
      <Portfolio />
      <CallToAction />
      <Blog />
      <UserInfo />
      <Testimonial />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;

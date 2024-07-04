import "./App.css";
import React from "react";
import Home from "./pages/Home";
import CarouselComponent from "./components/Carousel/CarouselComponent";

const App = () => {
  return (
    <div>
      <Home />
      <CarouselComponent />
    </div>
  );
};

export default App;

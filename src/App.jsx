import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import IntroShape from "./components/IntroShape";
import AnimateShape from "./components/AnimateShape";
import Feature from "./components/Feature";
import Price from "./components/Price";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="">
      <div className="h-screen w-full relative overflow-hidden">
        <Navbar />
        <Intro />
        <IntroShape />
        <AnimateShape />
      </div>
      <Feature />
      <Price />
      <Footer />
    </div>
  );
};

export default App;

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import StickyPage from "./components/StickyPage";

const App = () => {
  return (
    <div className=" w-full h-screen text-white">
      <Navbar />
      <LandingPage />
      <Marquee />
    </div>
  );
};

export default App;

import "./App.css";

import React from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Graphic from "./components/Graphic";
import Brands from "./components/Brands";

export default function App() {
  return (
    <div className="h-screen bg-[#0d1117] text-white font-mono">
      <Navbar />
      <div className="mt-[0px] md:mt-[80px] max-w-[1440px] mx-auto flex flex-col-reverse md:flex-row justify-center">
        <div>
          <Content />
        </div>
        <div>
          <Graphic />
        </div>
      </div>
      <div >
        <Brands />
      </div>
    </div>
  );
}

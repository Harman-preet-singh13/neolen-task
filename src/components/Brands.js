import React from "react";
import img1 from "./images/amazon.png";
import img2 from "./images/google.png";
import img3 from "./images/netflex.jpg";
import img4 from "./images/spotify1.png";

export default function Brands() {
  return (
    <div className="max-w-[1024px] mx-auto">
      <div className="mx-2 md:mx-20 mt-10 md:mt-20 flex justify-between opacity-60">
        <img src={img1} alt="amazon logo" className="w-12 md:w-24" />
        <img src={img2} alt="google logo" className="w-12 md:w-24" />
        <img src={img3} alt="netflix logo" className="w-12 md:w-24" />
        <img src={img4} alt="spotify logo" className="w-12 md:w-24" />
      </div>
    </div>
  );
}

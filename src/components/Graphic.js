import React from "react";
import img1 from "./images/Group 4.png";
import { FaPlus,FaPen, FaShareAlt} from "react-icons/fa";


export default function Graphic() {
  return (
    <div className="mt-10 md:mt-0 graphic-container">
      <div className="mx-10 graphic-img">
        <img src={img1} alt="graphic" className="" />
      </div>
      <div  className="icon-box bg-slate-100 text-black rounded-full px-2 py-1">
        <button className="mt-1 mr-5 px-2 py-2 rounded-full hover:bg-slate-300">
          <FaShareAlt />
        </button >
        <button className="mr-2 px-2 py-2 rounded-full hover:bg-slate-300">
          <FaPen />
        </button>
        <button className="ml-3 px-2 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-700">
          <FaPlus />
        </button>
      </div>
    </div>
  );
}

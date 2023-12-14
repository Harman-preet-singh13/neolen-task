import React from "react";

export default function Content() {
  return (
    <div className=" ml-14 md:ml-20">
      <header className="font-semibold ">
        <h1 className="text-6xl ">Work</h1>
        <h1 className="text-6xl">smarter,</h1>
        <div className="underline-tag">
          <h1 className="text-6xl ">faster</h1>
          <div
            className="w-[200px] h-[12px]  
        bg-violet-300 rounded-lg
         underline-div opacity-70
        "
          ></div>
        </div>
      </header>

      <div className="max-w-[300px] mt-5 lg:mt-20">
        <p className="opacity-60">
          Nunito connects everyone in the desgin process to teams can deliver
          better products faster.🙌
        </p>

        <button className="mt-5 lg:mt-20 px-6 py-2 bg-slate-200 text-black border border-[#0d1117] hover:bg-[#0d1117] hover:text-white hover:border-white font-semibold rounded-full">Try it for free</button>
      </div>


    </div>
  );
}

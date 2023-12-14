import React, {  useState } from "react";
import logo from "./logo192.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <>
      <nav className="max-w-[1440px] mx-auto">
        <div className=" flex items-center">
          <header className="header-logo flex p-2">
            <img
              src={logo}
              className="logo w-14 animate-spin slower"
              alt="LogoIcon"
            />
            <h1 className="hidden md:block self-center text-3xl ">nunito</h1>
            <div className="hidden md:block m-2 pl-8 opacity-30 border-r-2 border-slate-400"></div>
          </header>

          <button onClick={handleClick} className="text-white toggle-button ">
            Menu
          </button>

          <div className="grow flex justify-between">
            <ul
              id="primary-navigation"
              className={`primary-navigation 
          p-2 flex gap-4 text-slate-400 font-semibold
          ${open && "active"} 
          `}
            >
              <li>
                <a className="px-2 py-2 hover:text-slate-100 " href="/">
                  Home
                </a>
              </li>
              <li className="px-2 py- hover:text-slate-100">
                <select
                  className="bg-[#0d1117] focus-within:outline-none"
                  name="pricing"
                >
                  <option value="price">Pricing</option>
                  <option value="premium">Premium</option>
                  <option value="standard">Standard</option>
                  <option value="basic">Basic</option>
                </select>
              </li>
              <li>
                <a className="px-2 py-2 hover:text-slate-100" href="/">
                  Contact
                </a>
              </li>
              <li>
                <a className="mx-24 md:mx-0 px-2 py hover:text-slate-100 flex gap-1" href="/">
                  Jobs<span className="text-black font-semibold px-[7px]  bg-yellow-400 rounded-full">6</span>
                </a>
              </li>
              <li className="block md:hidden">
                <button className="px-2 py-1 border border-slate-700 rounded-2xl hover:border-slate-400 hover:bg-slate-700">
                  Sign up
                </button>
              </li>
            </ul>

            <div className="hidden md:block">
              <button className="mr-5 px-2 py-1 border border-slate-700 rounded-2xl hover:border-slate-400 hover:bg-slate-700">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

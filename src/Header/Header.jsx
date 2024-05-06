import React from "react";
import { NavLink } from "react-router-dom";
import logo1 from "../assets/images/AH.png";

export default function Header() {
  return (
    <div className=" relative z-10 flex items-center justify-between">
      <div className="hidden md:flex">
        {/* ============= logo=========== */}
        <NavLink to="/" className=" flex items-center justify-center md:w-48 ">
          <img src={logo1} alt="logo" />
        </NavLink>
      </div>
      {/* =========== logo end ============== */}
      {/* =========== menu start =============== */}
      <div className="bg-white text-gray-900 md:block w-full md:w-auto py-2 font-medium md:rounded-bl-full">
        <ul className="flex items-center justify-evenly gap-1 py-2 text-lg">
          <li className="px-6 hover:text-accentColor">
            <NavLink to="/" className="text-smallTextColor font-[600]">
              Home
            </NavLink>
          </li>
          <li className="px-6 hover:text-accentColor">
            <NavLink to="/services" className="text-smallTextColor font-[600]">
              Services
            </NavLink>
          </li>
          <li className="px-6 hover:text-accentColor">
            <NavLink to="/portfolio" className="text-smallTextColor font-[600]">
              Portfolio
            </NavLink>
          </li>
          <li className="px-6 hover:text-accentColor">
            <NavLink to="/contact" className="text-smallTextColor font-[600]">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* =========== menu end =============== */}
    </div>
  );
}

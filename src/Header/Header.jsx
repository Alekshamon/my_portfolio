import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo1 from "../assets/images/AH.png";

export default function Header() {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav
      classNmane={` fixed w-full left-0 top-0 z-[999] ${
        sticky ? "bg-white/60  text-gray-900" : "text-white"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="mx-7">
          {/* ============= logo=========== */}
          <h4 className="text-4xl font-bold ml-4">
            <NavLink
              to="/"
              className=" flex items-center justify-center md:w-24 h-24x "
            >
              <img src={logo1} alt="logo" />
            </NavLink>
          </h4>
        </div>
        {/* =========== logo end ============== */}
        {/* =========== menu start =============== */}
        <div
          className={` ${
            sticky ? "md:bg-white/0 bg-white" : "bg-white"
          } text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            <li className="px-6 hover:text-accentColor">
              <NavLink to="/" className="text-smallTextColor font-[600]">
                Home
              </NavLink>
            </li>
            <li className="px-6 hover:text-accentColor">
              <NavLink
                to="/services"
                className="text-smallTextColor font-[600]"
              >
                Services
              </NavLink>
            </li>
            <li className="px-6 hover:text-accentColor">
              <NavLink
                to="/portfolio"
                className="text-smallTextColor font-[600]"
              >
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

        {/* ========= menu right ========== */}
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999]  ${
            open ? "text-gray-900" : "text-gray-100"
          } text-3xl md:hidden m-5`}
        >
          <ion-icon name="menu"></ion-icon>
        </div>
        <div
          className={`md:hidden text-gray-900 absolute w-2/3 h-screen
      px-7 py-2 font-medium bg-white top-0 duration-300 ${
        open ? "right-0" : "right-[-100%]"
      }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            <li
              onClick={() => setOpen(false)}
              className="px-6 hover:text-accentColor"
            >
              <NavLink to="/" className="text-smallTextColor font-[600]">
                Home
              </NavLink>
            </li>
            <li
              onClick={() => setOpen(false)}
              className="px-6 hover:text-accentColor"
            >
              <NavLink
                to="/services"
                className="text-smallTextColor font-[600]"
              >
                Services
              </NavLink>
            </li>
            <li
              onClick={() => setOpen(false)}
              className="px-6 hover:text-accentColor"
            >
              <NavLink
                to="/portfolio"
                className="text-smallTextColor font-[600]"
              >
                Portfolio
              </NavLink>
            </li>
            <li
              onClick={() => setOpen(false)}
              className="px-6 hover:text-accentColor"
            >
              <NavLink to="/contact" className="text-smallTextColor font-[600]">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* ========= menu end ========== */}
      </div>
    </nav>
  );
}

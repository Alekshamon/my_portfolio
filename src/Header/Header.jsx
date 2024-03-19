import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

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
          <h4 className="text-4xl font-bold ml-4 mt-3">
            <NavLink
              to="/"
              className="w-[35px] h-[35px] text-white text-[18px] font-[500] rounded-full flex items-center justify-center "
            >
              <img src="https://img.icons8.com/ios/50/000000/flower.png" />
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

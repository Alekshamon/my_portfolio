import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleClickMessage = () => {
    navigate("/contact");
  };

  return (
    <header className="w-full h-[80px] leading-[80px] flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ============= logo=========== */}
          <div className="flex items-center gap-[10px]">
            <NavLink
              to="/"
              className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center "
            >
              AH
            </NavLink>

            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-[700]">
                Aleksandra Hamon
              </h2>
            </div>
          </div>

          {/* =========== logo end ============== */}
          {/* =========== menu start =============== */}
          <div className="menu">
            <ul className="flex items-center gap-10">
              <li>
                <NavLink to="/" className="text-smallTextColor font-[600]">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className="text-smallTextColor font-[600]"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfolio"
                  className="text-smallTextColor font-[600]"
                >
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-smallTextColor font-[600]"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          {/* =========== menu end =============== */}

          {/* ========= menu right ========== */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <a
              href="mailto:aleksandrahamon@gmail.com"
              className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-accentColor hover:font-[500] ease-in duration-300"
            >
              <i className="ri-send-plane-line"></i> Let's Talk
            </a>

            <span
              handleClickLogin={handleClickMessage}
              className="text-2xl text-smallTextColor md:hidden cursor-pointer"
            >
              <i className="ri-menu-line"></i>
            </span>
          </div>
          {/* ========= menu end ========== */}
        </div>
      </div>
    </header>
  );
}

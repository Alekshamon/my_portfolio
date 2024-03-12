import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  const navigate = useNavigate();

  const handleClickMessage = () => {
    navigate("/contact");
  };
  return (
    <footer className="bg-primaryColor pt-12">
      {/* ========= footer top ============ */}
      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
              Do you want to make beautiful products?
            </h2>
            <a href="mailto:aleksandrahamon@gmail.com">
              <button
                handleClickLogin={handleClickMessage}
                className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-accentColor hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px] border border-accentColor"
              >
                <i class="ri-mail-line"></i> Hire me
              </button>
            </a>
          </div>

          <div className="w-full sm:w-1/2">
            <p className="text-white leading-7 mt-4 sm:mt-0">
              Welcome to my portfolio website! I'm Aleksandra, a dedicated web
              developer residing in Saint-Marcellin, Isère, France.
            </p>

            <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
              <div className="text-white font-[600] text-[15px]">
                Follow Me:
              </div>
              <div
                src="https://github.com/Alekshamon"
                alt="github"
                className="text-white text-[40px] font-[600]  hover:cursor-pointer "
              >
                <FaGithub />
              </div>
              <div
                src="https://www.linkedin.com/in/aleksandra-hamon/"
                alt="linkedin"
                className="text-white text-[40px] font-[600] hover:cursor-pointer"
              >
                <CiLinkedin />
              </div>
            </div>
          </div>
        </div>

        <div>
          <ul className="flex items-center justify-center gap-10 mt-10">
            <li>
              <NavLink
                to="/"
                className="text-white font-[600]"
                href="http://localhost:3001"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="text-white font-[600]"
                href="http://localhost:3001/services"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className="text-white font-[600]"
                href="http://localhost:3001/portfolio"
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-white font-[600]"
                href="http://localhost:3001/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {/* ========= footer top end ============ */}
      {/* ========== footer bottom ========== */}
      <div className="bg-accentColor py-5 mt-14">
        <div className="container">
          <div className="flex items-center justify-center sm:justify-between">
            <div className="hidden sm:block">
              <div className="flex items-center gap-[10px]">
                <div className="leading-[20px]">
                  <h2 className="text-gray-200 font-[500] text-[18px]">
                    Aleksandra Hamon
                  </h2>
                </div>
              </div>
            </div>

            <div>
              <p className="text-white text-[14px]">
                Copyright {year} - All right reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ========== footer bottom end ========== */}
    </footer>
  );
};

export default Footer;

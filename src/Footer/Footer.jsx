import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primaryColor pt-12">
      {/* ========= footer top ============ */}
      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
              Do you want to make beautiful products?
            </h2>
            <a href="http://localhost:3001/contact">
              <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-accentColor hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px] border border-accentColor">
                <i class="ri-mail-line"></i> Hire me
              </button>
            </a>
          </div>

          <div className="w-full sm:w-1/2">
            <p className="text-white leading-7 mt-4 sm:mt-0">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              autem! Illo voluptates totam omnis maiores inventore vero eveniet
              molestias rerum.
            </p>

            <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
              <span className="text-white font-[600] text-[15px]">
                Follow Me:
              </span>
            </div>
          </div>
        </div>

        <div>
          <ul className="flex items-center justify-center gap-10 mt-10">
            <li>
              <a className="text-white font-[600]" href="http://localhost:3001">
                Home
              </a>
            </li>
            <li>
              <a
                className="text-white font-[600]"
                href="http://localhost:3001/services"
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="text-white font-[600]"
                href="http://localhost:3001/portfolio"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                className="text-white font-[600]"
                href="http://localhost:3001/contact"
              >
                Contact
              </a>
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

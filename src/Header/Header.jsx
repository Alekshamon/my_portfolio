import React from "react";

export default function Header() {
  return (
    <header className="w-full h-[80px] leading-[80px] flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ============= logo=========== */}
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center ">
              A
            </span>

            <div className="leading-[20px]">
              <h2 className="text-xl text-textColor font-[700]">Aleksandra</h2>
              <p className="text-textColor text-[14px] font-[500]">Hamon</p>
            </div>
          </div>

          {/* =========== logo end ============== */}
          {/* =========== menu start =============== */}
          <div className="menu">
            <ul className="flex items-center gap-10">
              <li>
                <a
                  className="text-textColor font-[600]"
                  href="http://localhost:3001"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-textColor font-[600]"
                  href="http://localhost:3001/services"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="text-textColor font-[600]"
                  href="http://localhost:3001/portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  className="text-textColor font-[600]"
                  href="http://localhost:3001/contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* =========== menu end =============== */}

          {/* ========= menu right ========== */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-textColor font-[600] border border-solid border-textColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-textColor hover:text-white hover:font-[500] ease-in duration-300">
              <i class="ri-send-plane-line"></i> Let's Talk
            </button>

            <span className="text-2xl text-textColor md:hidden cursor-pointer">
              <i class="ri-menu-line"></i>
            </span>
          </div>
          {/* ========= menu end ========== */}
        </div>
      </div>
    </header>
  );
}

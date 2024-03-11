import React from "react";

export default function Header() {
  return (
    <header className="w-full h-[80px] leading-[80px] justify-between  absolute flex items-center  pl-40 pr-40">
      {/* ============= logo=========== */}

      <span className="w-[50px] h-[50px] bg-primaryColor text-white text-[22px] font-[500] rounded-full flex items-center justify-center ">
        AH
      </span>

      {/* =========== logo end ============== */}
      {/* =========== menu start =============== */}
      <div className="">
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
    </header>
  );
}

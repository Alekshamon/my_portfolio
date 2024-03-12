import { useState, useEffect } from "react";
import data from "../assets/data/stackData";
import React from "react";

function Stack() {
  const [stack, setStack] = useState(data);

  const [selectTab, setSelectTab] = useState("all");

  useEffect(() => {
    if (selectTab === "all") {
      setStack(data);
    } else {
      const filteredData = data.filter((item) => item.category === selectTab);
      setStack(filteredData);
    }
  }, [selectTab]);

  const buttonClasses =
    "text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px] hover:cursor-pointer hover:text-primaryColor transition-transform ease-in duration-200";

  return (
    <div className=" container mx-auto px-4">
      <h1 className="text-headingColor text-2xl font-semibold mb-6">
        My stack
      </h1>
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <button onClick={() => setSelectTab("all")} className={buttonClasses}>
          All
        </button>
        <button
          onClick={() => setSelectTab("Frontend")}
          className={buttonClasses}
        >
          Frontend
        </button>
        <button
          onClick={() => setSelectTab("Backend")}
          className={buttonClasses}
        >
          Backend
        </button>
        <button onClick={() => setSelectTab("UI/UX")} className={buttonClasses}>
          UI/UX
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {stack.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-center px-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
          >
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <img src={item.image} alt={item.title} className="max-w-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stack;

import { useState, useEffect } from "react";
import data from "../assets/data/stackData";
import React from "react";

function Stack() {
  const [stack, setStack] = useState(data);

  const [selectTab, setSelectTab] = useState("all");

  useEffect(() => {
    if (selectTab === "all") {
      setStack(data);
    }

    if (selectTab === "Frontend") {
      const filteredData = data.filter((item) => item.category === "Frontend");
      setStack(filteredData);
    }

    if (selectTab === "Backend") {
      const filteredData = data.filter((item) => item.category === "Backend");
      setStack(filteredData);
    }

    if (selectTab === "UI/UX") {
      const filteredData = data.filter((item) => item.category === "UI/UX");
      setStack(filteredData);
    }
  }, [selectTab]);

  return (
    <>
      <div className="flex items-center flex-wrap  gap-6 mb-7 pl-[300px]">
        <h1 className="text-headingColor text-[2rem] font-[700] pl-16">
          My stack
        </h1>
        <button
          onClick={() => setSelectTab("all")}
          className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]"
        >
          All
        </button>
        <button
          onClick={() => setSelectTab("Frontend")}
          className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]"
        >
          Frontend
        </button>
        <button
          onClick={() => setSelectTab("Backend")}
          className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]"
        >
          Backend
        </button>
        <button
          onClick={() => setSelectTab("UI/UX")}
          className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]"
        >
          UI/UX
        </button>

        <div className="flex selection:items-center gap-4 flex-wrap mt-10 mb-10 pl-[20px] ">
          <div
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="1000"
            className="flex items-center gap-4 flex-wrap mt-12"
          >
            {stack.map((item) => {
              const { id, image, title } = item;
              return (
                <div key={id} className="flex items-center gap-4">
                  <img src={image} alt={title} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default Stack;

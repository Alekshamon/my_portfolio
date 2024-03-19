import React, { useState, useEffect } from "react";
import data from "../assets/data/portfolioData";
import Aos from "aos";
//import Modal from "./Modal";

const Portfolio = () => {
  const [nextItems, setNextItems] = useState(6);
  const [portfolios, setPortfolios] = useState(data);
  const [selectTab, setSelectTab] = useState("all");
  //const [showModal, setShowModal] = useState(false);
  //const [activeID, setActiveID] = useState(null);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  // const loadMoreHandler = () => {
  //   setNextItems((prev) => prev + 3);
  // };

  // const showModalHandler = (id) => {
  //   setShowModal(true);
  //   setActiveID(id);
  // };

  useEffect(() => {
    if (selectTab === "all") {
      setPortfolios(data);
    }

    if (selectTab === "web-development") {
      const filteredData = data.filter(
        (item) => item.category === "Web Development"
      );
      setPortfolios(filteredData);
    }

    if (selectTab === "ux-design") {
      const filteredData = data.filter((item) => item.category === "Ux");
      setPortfolios(filteredData);
    }
  }, [selectTab]);

  const buttonClasses =
    "text-textColor border border-solid border-textColor py-2 px-4 rounded-[8px] hover:cursor-pointer hover:text-white transition-transform ease-in duration-200";

  return (
    <section id="portfolio">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-1">
            <h3 className="text-textColor text-[2rem] font-[700]">
              My recent projects
            </h3>
            <p className="md:max-w-[600px] md:mx-auto text-textColor font-[500] text-[16px] leading-7 ">
              Welcome to the heart of my portfolio – the showcase of my work. In
              this section, you'll find a curated selection of projects that
              demonstrate my skills, creativity, and dedication to crafting
              exceptional digital experiences. From web applications to
              responsive websites, each project reflects my passion for
              innovation and attention to detail. Dive in, explore, and discover
              the possibilities of collaboration.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setSelectTab("all")}
              className={buttonClasses}
            >
              All
            </button>
            <button
              onClick={() => setSelectTab("web-development")}
              className={buttonClasses}
            >
              Web Apps
            </button>
            <button
              onClick={() => setSelectTab("ux-design")}
              className={buttonClasses}
            >
              UX Design
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-wrap mt-12">
          {portfolios?.slice(0, nextItems)?.map((portfolio, index) => (
            <div
              data-aos="fade-zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="group max-w-full sm:w-[48.5%]  md:w-[32.2%] relative z-[1]"
            >
              <figure>
                <img
                  key={index}
                  className="rounded-[8px]"
                  src={portfolio.imgUrl}
                  alt="me"
                />
              </figure>

              <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block">
                <div className="w-full h-full flex items-center justify-center">
                  <button
                    //onClick={() => showModalHandler(portfolio.id)}
                    className="text-white bg-textColor hover:bg-white py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
                  >
                    Comming soon
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-6">
          {nextItems < portfolios.length && data.length > 6 && (
            <button
              onClick={loadMoreHandler}
              className="text-white bg-primaryColor hover:bg-textColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
            >
              Load More
            </button>
          )}
        </div> */}
      </div>
      {/* {showModal && <Modal setShowModal={setShowModal} activeID={activeID} />} */}
    </section>
  );
};

export default Portfolio;

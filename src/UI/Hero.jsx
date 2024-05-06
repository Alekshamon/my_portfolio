import React from "react";
import myImg from "../assets/images/_MG_9967.jpg";
//import CountUp from "react-countup";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import Aos from "aos";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Vivid7 from "../assets/images/vivid_7.png";
function Hero() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className=" flex py-10 md:flex-row flex-col items-center justify-center">
      <img src={Vivid7} alt="icon1" className="absolute left-0 top-5 " />
      {/* photo*/}
      <div
        data-aos="fade-left"
        data-aos-duration="1500"
        className="flex-1 flex items-center justify-center h-full"
      >
        <img
          src={myImg}
          alt="avatar"
          className="w-[300px] rounded-full  md:w-[400px]  md:object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          {/*----------- Left content ------------*/}
          <h1
            data-aos="fade-right"
            data-aos-duration="1500"
            className="md:text-5xl text-4xl text-white font-bold mt-4"
          >
            <h1 className="text-textColor  md:text-6xl text-5xl">
              Hello!
              <br />
            </h1>
            I'm Aleksandra Hamon
          </h1>
          <h4
            data-aos="fade-right"
            data-aos-duration="1500"
            className="md:text-5xl text-2xl md:leading-normal leading-5 mt-4 font-bold text-textColor"
          >
            Web Developer
          </h4>
          <div
            data-aos="fade-up"
            data-aos-duration="1800"
            data-aos-delay="200"
            className="relative z-10 flex items_center gap-3 mt-7 justify-center md:justify-start"
          >
            <NavLink to="/contact">
              <button className="bg-buttonColor text-white flex text-center  text-xl justify-center gap-2 hover:bg-primaryColor ease-in duration-300 py-4 px-4 rounded-[8px]">
                Contact me
              </button>
            </NavLink>
            <NavLink
              to="/portfolio"
              className="text-textColor font-[600] text-xl hover:text-buttonColor ease-in duration-300 py-4 px-4"
            >
              See portfolio
            </NavLink>
          </div>
          <p
            data-aos="fade-left"
            data-aos-duration="1200"
            className="relative z-10 flex gap-2 text-textColor text-3xl mt-12 sm:pl-14 sm:pr-10 text-justify mx-5"
          >
            Welcome to my portfolio website! I'm a dedicated web developer
            residing in Saint-Marcellin, Isère, France. Specializing in creating
            compelling digital experiences, I offer expertise in crafting
            innovative web solutions. Explore my portfolio to see examples of my
            work across frontend development, backend programming, and UI/UX
            design. Let's collaborate to bring your web projects to life with
            creativity, innovation, and technical excellence.
          </p>
          <div></div>

          <div className="relative z-10 flex items-center gap-5 mt-14 ml-4">
            <h2 className="text-textColor text-xl font-[600]">Follow me:</h2>

            <a
              href="https://github.com/Alekshamon"
              alt="github"
              className="text-textColor text-[40px] font-[600]  hover:cursor-pointer "
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/aleksandra-hamon/"
              alt="linkedin"
              className="text-textColor text-[40px] font-[600] hover:cursor-pointer"
            >
              <CiLinkedin />
            </a>
          </div>

          {/*----------- Left end ------------*/}

          {/*-----------  content right ------------*/}
          {/* <div className="mb:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="mb-10">
              <h2 className="text-textColor font-[700]  text-[32px]">
                <CountUp start={0} end={6} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Years of Experience
              </h4>
              <div className="mb-10">
                <h2 className="text-headingColor font-[700] text-[32px]">
                  <CountUp start={0} end={100} duration={2} suffix="%" />
                </h2>
                <h4 className="text-headingColor font-[600] text-[18px]">
                  Success Rate
                </h4>
              </div>
            </div>
          </div> */}
          {/*-----------  content right end ------------*/}
        </div>
      </div>
    </div>
  );
}

export default Hero;

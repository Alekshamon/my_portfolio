import React from "react";
import myImg from "../assets/images/_MG_9967.jpg";
//import CountUp from "react-countup";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import Aos from "aos";
import { useEffect } from "react";

function Hero() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
      id="about"
    >
      {/* photo*/}
      <div
        data-aos="fade-left"
        data-aos-duration="1500"
        className="flex-1 flex items-center justify-center h-full"
      >
        <img
          src={myImg}
          alt=""
          className="w-[300px]  md:w-[400px]  md:object-cover"
        />
      </div>

      <div className="flex-1">
        <div className="md:text-left text-center">
          {/*----------- Left content ------------*/}
          <h1
            data-aos="fade-right"
            data-aos-duration="1500"
            className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold mt-4"
          >
            <span className="text-textColor md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            I'm <span>Aleksandra Hamon</span>
          </h1>
          <h4
            data-aos="fade-right"
            data-aos-duration="1500"
            className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-textColor"
          >
            Web Developer
          </h4>
          <div
            data-aos="fade-up"
            data-aos-duration="1800"
            data-aos-delay="200"
            className="flex items_center gap-3 mt-7 justify-center md:justify-start"
          >
            <a href="http://localhost:3001/contact">
              <button className="bg-buttonColor text-white font-[500] flex text-center gap-2 hover:bg-primaryColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                <i class="ri-mail-line"></i> Hire me
              </button>
            </a>
            <a
              href="http://localhost:3001/portfolio"
              className="text-textColor font-[600] text-[16px] hover:text-buttonColor ease-in duration-300 py-2 px-4"
            >
              See portfolio
            </a>
          </div>
          <p
            data-aos="fade-left"
            data-aos-duration="1200"
            className="flex gap-2 text-textColor font-[500] text-[15px] mt-12 sm:pl-14 sm:pr-10 text-justify leading-7 w-11/12 mx-auto"
          >
            Welcome to my portfolio website! I'm a dedicated web developer
            residing in Saint-Marcellin, Isère, France. Specializing in creating
            compelling digital experiences, I offer expertise in crafting
            innovative web solutions. Explore my portfolio to see examples of my
            work across frontend development, backend programming, and UI/UX
            design. Let's collaborate to bring your web projects to life with
            creativity, innovation, and technical excellence.
          </p>

          <div className="flex items-center gap-5 mt-14 ml-4">
            <h2 className="text-textColor text-[15px] font-[600]">
              Follow me:
            </h2>

            <div
              src="https://github.com/Alekshamon"
              alt="github"
              className="text-textColor text-[40px] font-[600]  hover:cursor-pointer "
            >
              <FaGithub />
            </div>
            <div
              src="https://www.linkedin.com/in/aleksandra-hamon/"
              alt="linkedin"
              className="text-textColor text-[40px] font-[600] hover:cursor-pointer"
            >
              <CiLinkedin />
            </div>
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
    </section>
  );
}

export default Hero;

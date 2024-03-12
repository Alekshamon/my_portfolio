import React from "react";
//import myImg from "../assets/images/_MG_9967.jpg";
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
    <section className="pt-20" id="about">
      <div className="container pt-14 pb-14">
        <div className="md:flex items-center justify-center sm:flex-col md:flex-row">
          {/*----------- Left content ------------*/}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-accentColor text-[20px] font-[600]"
            >
              Hello !
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-textColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[50px] mt-4"
            >
              I'm Aleksandra Hamon <br />
              Web Developer
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items_center gap-6 mt-7"
            >
              <a href="http://localhost:3001/contact">
                <button className="bg-buttonColor text-white font-[500] flex items-center gap-2 hover:bg-primaryColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                  <i class="ri-mail-line"></i> Hire me
                </button>
              </a>
              <a
                href="http://localhost:3001/portfolio"
                className="text-textColor font-[600] text-[16px] hover:text-accentColor ease-in duration-300 py-2 px-4"
              >
                See portfolio
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1200"
              className="flex gap-2 text-textColor font-[500] text-[15px] mt-12 leadint-7 sm:pl-14 sm:pr-10"
            >
              Welcome to my portfolio website! I'm a dedicated web developer
              residing in Saint-Marcellin, Isère, France. Specializing in
              creating compelling digital experiences, I offer expertise in
              crafting innovative web solutions. Explore my portfolio to see
              examples of my work across frontend development, backend
              programming, and UI/UX design. Let's collaborate to bring your web
              projects to life with creativity, innovation, and technical
              excellence.
            </p>

            <div className="flex items-center gap-5 mt-14">
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
          </div>

          {/*----------- Left end ------------*/}
          {/*----------- Right img ------------*/}
          <div className="basis-1/3 sm:mt-0 m-10 ">
            <span
              data-aos="fade-left"
              data-aos-duration="1000"
              className="flex rounded-full bg-accentColor w-[300px] h-[300px]"
            >
              <span
                data-aos="fade-up"
                data-aos-duration="1200"
                className="flex rounded-full bg-primaryColor w-[200px] h-[400px]"
              >
                {/* <figure className="flex items-center rounded-full justify-center">
                <img src={myImg} alt="profile_photo" />
              </figure> */}
              </span>
            </span>
          </div>
          {/*----------- Right img end ------------*/}
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

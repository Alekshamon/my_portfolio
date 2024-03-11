import React from "react";
import myImg from "../assets/images/_MG_9967.jpg";
import CountUp from "react-countup";

function Hero() {
  return (
    <section className="pt-20" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
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
              Fullstack Web Developer
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id fuga
              eum unde velit distinctio sequi modi accusantium vel aperiam
              deleniti corrupti voluptatem porro nulla, rerum minima repellat
              magnam molestias! Beatae.
            </p>

            <div className="flex items-center gap-9 mt-14">
              <span className="text-textColor text-[15px] font-[600]">
                Follow me:
              </span>
              <span>
                <a
                  href="#github"
                  className="text-textColor text-[25px] font-[600] pr-2"
                >
                  <i class="ri-github-line"></i>
                </a>
                <a
                  href="#linkedin"
                  className="text-textColor text-[25px] font-[600]"
                >
                  <i class="ri-linkedin-box-line"></i>
                </a>
              </span>
            </div>
          </div>

          {/*----------- Left end ------------*/}
          {/*----------- Right img ------------*/}
          <div className="basis-1/3 mt-10 sm:mt-0 ">
            <span className="">
              <figure className="flex items-center border-accentColor border-8 w-[300px] h-[300px]justify-center">
                <img src={myImg} alt="profile_photo" />
              </figure>
            </span>
          </div>
          {/*----------- Right img end ------------*/}
          {/*-----------  content right ------------*/}
          <div className="mb:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
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
          </div>
          {/*-----------  content right end ------------*/}
        </div>
      </div>
    </section>
  );
}

export default Hero;

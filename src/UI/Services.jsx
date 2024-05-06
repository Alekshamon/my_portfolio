import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import frontendImg from "../assets/images/front-end.png";
import backendImg from "../assets/images/backend.png";
import uiImg from "../assets/images/design.png";
//import appsImg from "../assets/images/apps.png";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section id="services">
      <div className="relative z-0 md:pt-5">
        <div className="text-center">
          <h2 className="text-textColor font-[800] text-[2.4rem] mb-5">
            What do I help
          </h2>
          <p className="md:max-w-[600px] md:mx-auto text-textColor font-[500] text-2xl mx-2">
            With a comprehensive skill set encompassing frontend development,
            backend programming, and UI/UX design, I specialize in delivering
            seamless digital solutions that marry aesthetics with functionality.
            From the initial concept to the final product, I work tirelessly to
            ensure that every aspect of the digital experience is thoughtfully
            crafted and expertly executed.
          </p>
        </div>

        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/* =========== vertical line running through the middle ============ */}
              <div className="hidden absolute w-1 sm:block bg-accentColor h-full left-1/2 transform -translate-x-1/2"></div>

              {/* =========== left card ================= */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                          Frontend Development
                        </h3>

                        <p className="text-[15px] text-textColor group-hover:text-white group-hover:font-[500] leading-7">
                          In frontend development, I focus on creating visually
                          stunning and intuitive user interfaces that not only
                          captivate the audience but also enhance usability.
                          This involves utilizing the latest technologies and
                          design trends to deliver responsive, mobile-friendly
                          designs that adapt to various screen sizes and devices
                          seamlessly.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={frontendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* ======= right card ================ */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="1300"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                          Backend Development
                        </h3>

                        <p className="text-[15px] text-textColor group-hover:text-white group-hover:font-[500] leading-7">
                          On the backend, I thrive in architecting robust and
                          scalable systems that power the frontend experience.
                          By leveraging my expertise in backend programming
                          languages and frameworks, I build efficient and secure
                          solutions that handle complex data processing and
                          ensure smooth interactions between the user interface
                          and the server.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={backendImg} alt="backendImg" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* =========== left card ================= */}
              <div className=" mt-6 sm:mt-0 sm:mb-12">
                <div className=" flex items-center flex-col sm:flex-row">
                  <div className=" flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-delay="100"
                        data-aos-duration="1400"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                          UI/UX Design
                        </h3>

                        <p className="text-[15px] text-textColor group-hover:text-white group-hover:font-[500] leading-7">
                          In UI/UX design, I apply user-centered design
                          principles to create interfaces that are both
                          aesthetically pleasing and user-friendly. Through
                          extensive research, wireframing, and prototyping, I
                          strive to understand user needs and preferences,
                          designing interfaces that not only look great but also
                          provide a seamless and enjoyable user experience.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={uiImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // emailjs proprety
    const serviceId = "service_3f235mf";
    const templateIde = "template_yn2i2af";
    const publicKey = "hUcIlOyKe_FmFIsL7";

    // new object with dynamic data
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Aleksandra",
      subject: subject,
      message: message,
    };

    // send email

    emailjs
      .send(serviceId, templateIde, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((error) => {
        console.log("FAILED...", error);
      });
  };

  return (
    <section id="contact" className="pb-16">
      <div className="container">
        <h2 className="text-textColor font-[700] text-[2.5rem] mb-8">
          Send me a message:
        </h2>
        <div className="md:flex justify-between items-center">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            <iframe
              title="google-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45019.241443583574!2d5.275316386790872!3d45.15262071295665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478ab858d4e06ab3%3A0x408ab2ae4be6a60!2s38160%20Saint-Marcellin!5e0!3m2!1sen!2sfr!4v1709766062289!5m2!1sen!2sfr"
              className="border-0 w-full h-full"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-primaryColor px-4 lg:px-8 py-8">
            <form onSubmit={handleSubmit} className="w-full">
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>

              <div className="mb-5">
                <textarea
                  type="text"
                  rows={3}
                  placeholder="Write your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>

              <button className="w-full bg-accentColor p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-textColor text-center ease-linear duration-150">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

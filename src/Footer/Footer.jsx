import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-accentColor text-sm p-4 text-center text-white">
      Copyright {year} - Aleksandra Hamon. All rights reserved.
    </div>
  );
};

export default Footer;

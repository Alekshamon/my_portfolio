import React from "react";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
  return (
    <div className="bg-gradient-to-br from-amber-500 to-orange-100">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

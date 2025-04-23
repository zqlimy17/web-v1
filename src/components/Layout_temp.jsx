import React from "react";
import Navbar from "./Navbar_temp";
import Footer from "./Footer_temp";

import "normalize.css";
import "../assets/css/main.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

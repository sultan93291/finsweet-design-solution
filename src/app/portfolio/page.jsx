"use client";
import Footer from "@/Components/Layout/Footer/Footer";
import Navbar from "@/Components/Layout/Navbar/Navbar";
import Portfolio from "@/Components/Routes/Portfolio/Portfolio";

import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <Portfolio />
      <Footer />
    </>
  );
};

export default page;

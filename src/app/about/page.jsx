"use client"
import Footer from "@/Components/Layout/Footer/Footer";
import Navbar from "@/Components/Layout/Navbar/Navbar";
import About from "@/Components/Routes/About/About";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <About />
      <Footer />
    </>
  );
};

export default page;

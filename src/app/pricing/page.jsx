"use client"
import Footer from "@/Components/Layout/Footer/Footer";
import Navbar from "@/Components/Layout/Navbar/Navbar";
import Pricing from "@/Components/Routes/Pricing/Pricing";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <Pricing />
      <Footer />
    </>
  );
};

export default page;

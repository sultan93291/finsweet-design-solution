"use client"
import Footer from "@/Components/Layout/Footer/Footer";
import Navbar from "@/Components/Layout/Navbar/Navbar";
import Features from "@/Components/Routes/Features/Features";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <Features />
      <Footer />
    </>
  );
};

export default page;

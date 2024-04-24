import Footer from "@/Components/Layout/Footer/Footer";
import Navbar from "@/Components/Layout/Navbar/Navbar";
import Contact from "@/Components/Routes/Contact/Contact";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <Contact />
      <Footer />
    </>
  );
};

export default page;

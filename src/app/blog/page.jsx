import Footer from "@/Components/Layout/Footer/Footer";
import Navbar from "@/Components/Layout/Navbar/Navbar";
import Blog from "@/Components/Routes/Blog/Blog";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <Blog />
      <Footer />
    </>
  );
};

export default page;

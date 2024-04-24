import Footer from "@/Components/Layout/Footer/Footer";
import Navbar from "@/Components/Layout/Navbar/Navbar";
import PrivacyPolicy from "@/Components/Routes/PrivacyPolicy/PrivacyPolicy";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <PrivacyPolicy />
      <Footer />
    </>
  );
};

export default page;

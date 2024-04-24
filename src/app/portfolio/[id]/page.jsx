"use client";
import Footer from "@/Components/Layout/Footer/Footer";
import Navbar from "@/Components/Layout/Navbar/Navbar";
import TemplatePages from "@/Components/Routes/TemplatePages/TemplatePages";

const Page = () => {
  return (
    <>
      <Navbar />
      <TemplatePages />
      <Footer />
    </>
  );
};

export default Page;

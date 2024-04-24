"use client";

import Footer from "@/Components/Layout/Footer/Footer";
import Navbar from "@/Components/Layout/Navbar/Navbar";
import HomePage from "@/Components/Routes/Home/Homepage";


export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Footer />
    </>
  );
}

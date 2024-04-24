"use client";
import React from "react";

import IMG from "@/Components/Tags/IMG/IMG";
import { useEffect, useState } from "react";
import BlogImgCard from "@/Components/Cards/BlogImgCard/BlogImgCard";

const BlogImg = () => {
  const [img, setImg] = useState("");

  useEffect(() => {
    const queryParams = window.location.search;
    const imgSrc = queryParams.replace("?", "").replace("=", "");

    setImg(imgSrc);
  }, []);

  return (
    <section className=" h-auto w-auto  bg-white  flex flex-col pt-32    ">
      <div className="flex flex-col gap-y-12 items-center max-w-maxWidth mx-auto ">
        {img && <BlogImgCard imgSrc={img} />}
      </div>
    </section>
  );
};

export default BlogImg;

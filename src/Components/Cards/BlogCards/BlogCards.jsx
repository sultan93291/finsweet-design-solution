"use client";
import Heading from "@/Components/Tags/Heading/Heading";
import IMG from "@/Components/Tags/IMG/IMG";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const BlogCards = ({
  src,
  width,
  height,
  alt,
  imgStyle,
  ParaTxt,
  HeadingTxt,
  DateTxt,
}) => {
  
  return (
    <div className="flex flex-col w-fouro_Five gap-10 cursor-pointer ">
      <IMG
        src={src}
        height={height}
        width={width}
        alt={alt}
        className={imgStyle}
      />
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 ">
          <Paragraph
            text={DateTxt}
            className={"label-two text-DarkBlue opacity-70 "}
          />
          <Heading
            text={HeadingTxt}
            Heading={"h6"}
            className={" text-DarkBlue Heading-Six w-fouro_Five "}
          />
          <Paragraph
            text={ParaTxt}
            className={"Body-One text-DarkBlue w-fouro_Five "}
          />
        </div>
        <span className=" flex items-center gap-4 label-two  text-base text-DarkBlue ">
          {" "}
          Read More <BsArrowRight className=" text-xl " />{" "}
        </span>
      </div>
    </div>
  );
};

export default BlogCards;

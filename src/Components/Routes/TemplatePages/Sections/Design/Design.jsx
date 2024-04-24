"use client";
import React, { useEffect, useState } from "react";

import IMG from "@/Components/Tags/IMG/IMG";
import Heading from "@/Components/Tags/Heading/Heading";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";

const Design = () => {
  const [img, setImg] = useState("");

  useEffect(() => {
    const queryParams = window.location.search;
    console.log(queryParams);
    const imgSrc = queryParams.replace("?", "").replace("=", "");
    setImg(imgSrc);
  }, []);

  return (
    <section className=" h-auto  bg-white     ">
      <div className="max-w-maxWidth pt-32 pb-24 flex flex-col justify-between gap-12 px-navbarPadding relative ml-oneZeroEight  ">
        <div className="flex flex-col gap-3 ">
          <Heading
            Heading={"h6"}
            text={"Web design and development"}
            className={"Heading-Six text-DarkBlue opacity-80 "}
          />
          <div className="flex flex-col gap-4 ">
            <Heading
              Heading={"h2"}
              text={"Finsweet Design case studies"}
              className={"common-HeadingTwo text-DarkBlue "}
            />
            <Paragraph
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse."
              }
              className={" Body-Two text-DarkBlue  "}
            />
          </div>
        </div>
        <div className="flex flex-col gap-12  w-thousandSixtyEight  relative after:absolute after:w-full after:content-[''] after:h-one  after:left-0 after:bottom-0 after:mb-collpase after:bg-DarkBlue after:opacity-30  ">
          <IMG
            src={img}
            width={1063}
            height={641}
            alt={"template image"}
            className={"h-[641px] w-full  bg-cover bg-no-repeat"}
          />
          <div className="flex justify-between ">
            <div className="flex flex-col gap-1 ">
              <Paragraph
                text={"client"}
                className={"label-two text-DarkBlue opacity-80 capitalize"}
              />
              <Heading
                Heading={"h6"}
                text={"facebook.com"}
                className={"Heading-Six text-DarkBlue "}
              />
            </div>
            <div className="flex flex-col gap-1 ">
              <Paragraph
                text={"Service"}
                className={"label-two text-DarkBlue opacity-80 capitalize"}
              />
              <Heading
                Heading={"h6"}
                text={"facebook.com"}
                className={"Heading-Six text-DarkBlue "}
              />
            </div>
            <div className="flex flex-col gap-1 ">
              <Paragraph
                text={"Product Design"}
                className={"label-two text-DarkBlue opacity-80 capitalize"}
              />
              <Heading
                Heading={"h6"}
                text={"UI Screens, UX Flow & Prototype"}
                className={"Heading-Six text-DarkBlue "}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Design;

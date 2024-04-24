import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import Heading from "@/Components/Tags/Heading/Heading";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";

const Work = () => {
  return (
    <section className="h-auto w-auto bg-Gray py-24 mx-auto  flex flex-col gap-8 items-center ">
      <div className=" flex flex-col gap-6 ">
        <div className="flex flex-col gap-1">
          <Paragraph
            text={"What we created"}
            className={"Body-Two w-sevenThirtyThree text-center text-DarkBlue "}
          />
          <Heading
            Heading={"h2"}
            className={"common-HeadingTwo text-DarkBlue text-center "}
            text={"Our Work Portfolio"}
          />
        </div>
        <Paragraph
          text={
            "We help teams create great digital products by providing them with tools and technology to make the design-to-code process universally accessible."
          }
          className={"Body-Two w-sevenThirtyThree text-center text-DarkBlue "}
        />
      </div>
      <ul className="flex gap-twentySix ">
        <li className="text-black text-navLink ">
          <FaFacebook />
        </li>
        <li className="text-black  text-navLink">
          <AiOutlineTwitter />
        </li>
        <li className="text-black text-navLink">
          <AiOutlineInstagram />
        </li>
        <li className="text-black text-navLink ">
          <AiFillLinkedin />
        </li>
      </ul>
    </section>
  );
};

export default Work;

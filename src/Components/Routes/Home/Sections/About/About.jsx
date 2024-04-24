import Heading from "@/Components/Tags/Heading/Heading";
import IMG from "@/Components/Tags/IMG/IMG";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";
import React from "react";
import { MdOutlineExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";

const About = () => {
  return (
    <section className=" h-auto w-auto  pl-navbarPadding py-32 flex  bg-Gray gap-hundrenanTen  ">
      <div>
        <Heading
          text={"What our clients say about us"}
          Heading={"h3"}
          className={"Heading-Five text-DarkBlue w-threeTwentySeven"}
        />
        <Paragraph
          text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.`}
          className={"Body-One w-threeTwentySeven "}
        />
      </div>
      <div className=" flex flex-col gap-12">
        <Heading
          text={`"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."`}
          Heading={"h5"}
          className={"HeadingFive w-eightFourtyThree text-DarkBlue "}
        />
        <div className="flex justify-between items-center ">
          <div className="flex gap-2 items-center ">
            <IMG
              src={"/Images/Home/About/jenny.png"}
              height={52}
              width={52}
              alt={"jenny client"}
            />
            <div className="flex flex-col">
              <Paragraph
                text={"Jenny Wilson"}
                className={"label-one text-DarkBlue "}
              />
              <span className="Cap-two text-DarkBlue "> Vice President </span>
            </div>
          </div>
          <div className=" flex items-center gap-2 ">
            <div className=" h-11 w-11 relative bg-white rounded-full flex items-center justify-center hover:bg-royalBlue transition duration-100 group ">
              <MdOutlineExpandMore className=" rotate-90 h-6 w-6 text-navLinkTxtColor group-hover:text-white duration-100 " />
            </div>
            <div className=" h-11 w-11 relative bg-white rounded-full flex items-center justify-center hover:bg-royalBlue transition duration-100 group">
              <MdExpandLess className=" rotate-90 h-6 w-6 text-navLinkTxtColor group-hover:text-white duration-100 " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import WorkCards from "@/Components/Cards/WorkCards/WorkCards";
import Heading from "@/Components/Tags/Heading/Heading";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Work = () => {
  const paraTxt =
    "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .";
  const WorkCard = [
    {
      imgpath: "/Images/Home/Work/maskOne.png",
      HeadingTxt: "Strategy",
      paraTxt: paraTxt,
    },
    {
      imgpath: "/Images/Home/Work/maskTwo.png",
      HeadingTxt: "Wireframing",
      paraTxt: paraTxt,
    },
    {
      imgpath: "/Images/Home/Work/maskThree.png",
      HeadingTxt: "Design",
      paraTxt: paraTxt,
    },
    {
      imgpath: "/Images/Home/Work/maskFour.png",
      HeadingTxt: "Development",
      paraTxt: paraTxt,
    },
  ];

  return (
    <section className=" h-auto w-auto  pl-navbarPadding py-32 flex justify-between  bg-Gray  ">
      <div className="flex flex-col gap-4 ">
        <Heading
          text={"How we work"}
          Heading={"h2"}
          className={"Heading-two text-DarkBlue "}
        />
        <Paragraph
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          }
          className={"common-ParagraphTwo text-DarkBlue w-fouro_Five"}
        />
        <span className=" flex items-center gap-4 label-two text-royalBlue text-lg ">
          {" "}
          get in touch with us <BsArrowRight className=" text-xl " />{" "}
        </span>
      </div>
      <div className="flex flex-wrap gap-twentyFive w-sixO_fiftySix mr-TwoFiftySeven ">
        {WorkCard.map((item, index) => (
          <WorkCards
            key={index}
            HeadingText={item.HeadingTxt}
            HeadingStyle={"HeadingFive"}
            paraText={item.paraTxt}
            paraStyle={"common-ParagraphTwo w-threeO_three"}
            src={item.imgpath}
            alt={"mask image"}
          />
        ))}
      </div>
    </section>
  );
};

export default Work;

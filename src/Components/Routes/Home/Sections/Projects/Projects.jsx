import Heading from "@/Components/Tags/Heading/Heading";
import IMG from "@/Components/Tags/IMG/IMG";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Projects = () => {
  return (
    <section className=" h-auto w-auto  px-navbarPadding py-32 flex flex-col gap-16    bg-white  ">
      <div className="flex justify-between items-center  ">
        <Heading
          Heading={"h2"}
          text={"View our projects"}
          className={"Heading-two text-DarkBlue "}
        />
        <span className=" flex items-center  gap-4 label-two text-DarkBlue text-base ">
          {" "}
          view pricing <BsArrowRight className=" text-xl " />{" "}
        </span>
      </div>
      <div className="flex gap-8 ">
        <div className=" h-sixHundred w-eightFourtyThree relative after:absolute after:content-[''] after:h-sixHundred after:w-threeNintySix after:bg-blue_linear  after:top-0 after:left-0 after:z-20 ">
          <IMG
            src={"/Images/Home/Projects/workhub.jpg"}
            alt={"workhub img"}
            width={843}
            height={600}
            className={"h-full w-full bg-cover"}
          />
          <div className=" absolute top-0 left-0 z-30 ml-12 mt-threeOneTwo flex flex-col gap-10 ">
            <div className="flex flex-col gap-4">
              <Heading
                Heading={"h5"}
                text={"Workhub office Webflow Webflow Design"}
                className={"label-five text-white w-threeOneThree "}
              />
              <Paragraph
                text={
                  "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam  "
                }
                className={"common-Paragraph text-white w-twoNintyThree "}
              />
            </div>
            <span className=" flex items-center  gap-4 label-two text-yellow text-base ">
              {" "}
              view pricing <BsArrowRight className=" text-xl " />{" "}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-8 relative after:absolute after:content-[''] after:h-twoEightyFour after:w-FourOFive after:bg-blue_linear  after:top-0 after:left-1 after:z-20  ">
          <IMG
            src={"/Images/Home/Projects/uninas.jpg"}
            alt={"uninas img"}
            width={405}
            height={284}
            className={"h-full w-full bg-cover"}
          />
          <IMG
            src={"/Images/Home/Projects/chruch.jpg"}
            alt={"chruch img"}
            width={405}
            height={284}
          />
          <div className=" absolute top-0 left-0 z-30 ml-14 mt-hundredTwentyNine flex flex-col gap-10 ">
            <div className="">
              <Heading
                Heading={"h5"}
                text={"Unisaas Website Design"}
                className={"label-five text-white w-twoninety "}
              />
            </div>
            <span className=" flex items-center  gap-4 label-two text-yellow text-base ">
              {" "}
              view pricing <BsArrowRight className=" text-xl " />{" "}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

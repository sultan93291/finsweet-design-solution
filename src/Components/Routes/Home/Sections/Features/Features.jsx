import FeaturesCards from "@/Components/Cards/FeaturesCards/FeaturesCards";
import Heading from "@/Components/Tags/Heading/Heading";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";
import React from "react";

const Features = () => {
  const paraTxt =
    "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ";
  const featureCards = [
    {
      imgPath: "/Images/Home/Features/clients.png",
      height: "27",
      width: "32",
      alt: "feature png",
      HeadingTxt: "Uses Client First",
      ParaTxt: paraTxt,
    },
    {
      imgPath: "/Images/Home/Features/round.png",
      height: "32",
      width: "32",
      alt: "feature png",
      HeadingTxt: "Two Free Revision Round",
      ParaTxt: paraTxt,
    },
    {
      imgPath: "/Images/Home/Features/ruler.png",
      height: "35",
      width: "35",
      alt: "feature png",
      HeadingTxt: "Template Customization",
      ParaTxt: paraTxt,
    },
    {
      imgPath: "/Images/Home/Features/support.png",
      height: "35",
      width: "35",
      alt: "feature png",
      HeadingTxt: "24/7 Support",
      ParaTxt: paraTxt,
    },
    {
      imgPath: "/Images/Home/Features/timer.png",
      height: "35",
      width: "35",
      alt: "feature png",
      HeadingTxt: "Quick Delivery",
      ParaTxt: paraTxt,
    },
    {
      imgPath: "/Images/Home/Features/doc.png",
      height: "34",
      width: "34",
      alt: "feature png",
      HeadingTxt: "Hands-on approach",
      ParaTxt: paraTxt,
    },
  ];
  return (
    <section className=" h-auto w-auto bg-Gray px-navbarPadding py-32  flex flex-col gap-12 ">
      <div className="flex flex-col items-center ">
        <Paragraph
          text={"Features"}
          className={"common-ParaThree text-DarkBlue "}
        />
        <Heading
          Heading={"h2"}
          text={"Design that solves problems, one product at a time"}
          className={"common-HeadingTwo w-sixThirty text-center text-DarkBlue "}
        />
      </div>
      <div className=" flex flex-wrap gap-x-8 gap-y-6  justify-center  ">
        {featureCards.map((item, index) => (
          <FeaturesCards
            key={index}
            src={item.imgPath}
            alt={item.alt}
            height={item.height}
            width={item.width}
            HeadingText={item.HeadingTxt}
            HeadingStyle={"Heading-Six text-DarkBlue "}
            paraText={item.ParaTxt}
            paraStyle={" Body-One text-DarkBlue"}
            boxColor={"white"}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;

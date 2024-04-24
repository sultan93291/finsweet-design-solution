import React from "react";
import FeaturesCards from "@/Components/Cards/FeaturesCards/FeaturesCards";
import Heading from "@/Components/Tags/Heading/Heading";

const BenefitsCard = () => {
  const paraTxt =
    "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ";
  const featureCards = [
    {
      imgPath: "/Images/Home/Features/doc.png",
      height: "27",
      width: "32",
      alt: "feature png",
      HeadingTxt: "Customize with ease",
      ParaTxt: paraTxt,
    },
    {
      imgPath: "/Images/Home/Features/ruler.png",
      height: "32",
      width: "32",
      alt: "feature png",
      HeadingTxt: "Perfectly Responsive",
      ParaTxt: paraTxt,
    },
    {
      imgPath: "/Images/Home/Features/community.png",
      height: "35",
      width: "35",
      alt: "feature png",
      HeadingTxt: "Friendly Support",
      ParaTxt: paraTxt,
    },
  ];
  return (
    <>
      <div className="flex items-center justify-center text-center ">
        <Heading
          Heading={"h2"}
          text={"The benefits of working with us"}
          className={"w-sixThirty Heading-two text-DarkBlue "}
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
            boxColor={"Gray"}
          />
        ))}
      </div>
    </>
  );
};

export default BenefitsCard;

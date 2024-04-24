import { PriceCard } from "@/Components/Cards/PriceCard/PriceCard";
import Heading from "@/Components/Tags/Heading/Heading";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";
import React from "react";

const Plan = () => {
  const links = [
    "All limited links",
    "Own analytics platform",
    "Chat support",
    "Optimize hashtags",
    "Unlimited users",
  ];

  const Commonpara = "When you’re ready to go beyond prototyping in Figma, ";
  const priceCardInfo = [
    {
      priceTag: "$299",
      priceTagHeading: "Per Design",
      subHeading: "Landing Page ",
      paraTxt: Commonpara,
      link: links.map(item => item),
      btnTxt: "Get started",
      isGray : true
    },
    {
      priceTag: "$399",
      priceTagHeading: "Multi Design",
      subHeading: "Website Page  ",
      paraTxt:
        "When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help.",
      link: links.map(item => item),
      btnTxt: "Get started",
      isMiddle: true,
    },
    {
      priceTag: "$399 +",
      priceTagHeading: "Multi Design",
      subHeading: "Complex Project  ",
      paraTxt: Commonpara,
      link: links,
      btnTxt: "Contact us",
    },
  ];

  return (
    <section className=" h-auto  bg-white     ">
      <div className="max-w-maxWidth py-32 flex flex-col justify-between gap-16 mx-auto   ">
        <div className="flex flex-col items-center gap-4 ">
          <Heading
            Heading={"h2"}
            text={"Our Pricing Plans"}
            className={"common-HeadingTwo text-DarkBlue"}
          />
          <Paragraph
            text={
              "When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them."
            }
            className={"Body-Two  text-DarkBlue w-fivesixtytwo"}
          />
        </div>
        <div className="flex gap-8">
          {priceCardInfo.map((item, index) => (
            <PriceCard
              key={index}
              paraTxt={item.paraTxt}
              pricgTag={item.priceTag}
              priceTagHeading={item.priceTagHeading}
              subHeading={item.subHeading}
              ismiddle={item.isMiddle}
              btnTXt={item.btnTxt}
              facilites={item.link}
              isGray={item.isGray}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plan;

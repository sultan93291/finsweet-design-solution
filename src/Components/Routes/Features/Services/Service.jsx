import ImgCard from "@/Components/Cards/ImgCards/ImgCard";
import React from "react";

const Service = () => {
  const paraTxt =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const ImgCards = [
    {
      heaingTxt: "Our Mission ",
      subHeadingTxt: "Inspire, Innovate, Share",
      paraTxt: paraTxt,
      ImgSrc: "/Images/Features/Service/explain.png",
      height: 336,
      width: 516,
      posX: "right",
      alt: "man.png",
      bgColor: "white",
    },
    {
      heaingTxt: "Our Vision ",
      subHeadingTxt: "Laser focus",
      paraTxt: paraTxt,
      ImgSrc: "/Images/Features/Service/book.png",
      height: 336,
      width: 516,
      posX: "left",
      alt: "gog.png",
      bgColor: "Gray",
    },
    {
      heaingTxt: "Our Mission ",
      subHeadingTxt: "Inspire, Innovate, Share",
      paraTxt: paraTxt,
      ImgSrc: "/Images/Features/Service/whiteshirtman.png",
      height: 336,
      width: 516,
      posX: "right",
      alt: "man.png",
      bgColor: "white",
    },
    {
      heaingTxt: "Our Vision ",
      subHeadingTxt: "Laser focus",
      paraTxt: paraTxt,
      ImgSrc: "/Images/Features/Service/macbook.png",
      height: 336,
      width: 516,
      posX: "left",
      alt: "gog.png",
      bgColor: "[#FFFFF0]",
    },
  ];
  return (
    <section className="bg-white">
      {ImgCards.map((item, index) => (
        <section
          key={index}
          className={`h-auto w-full  px-navbarPadding py-32 flex  flex-col gap-seventySix bg-${item.bgColor} `}
        >
          <ImgCard
            imgSrc={item.ImgSrc}
            altTxt={item.alt}
            ImagePosX={item.posX}
            paraTxt={item.paraTxt}
            heading={item.heaingTxt}
            subheadingTxt={item.subHeadingTxt}
            height={item.height}
            width={item.width}
          />
        </section>
      ))}
    </section>
  );
};

export default Service;

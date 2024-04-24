import ImgCard from "@/Components/Cards/ImgCards/ImgCard";
import React from "react";

const Mission = () => {
  const paraTxt =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const ImgCards = [
    {
      heaingTxt: "Our Mission ",
      subHeadingTxt: "Inspire, Innovate, Share",
      paraTxt: paraTxt,
      ImgSrc: "/Images/About/Mission/man.png",
      height: 336,
      width: 516,
      posX: "right",
      alt: "man.png",
    },
    {
      heaingTxt: "Our Vision ",
      subHeadingTxt: "Laser focus",
      paraTxt: paraTxt,
      ImgSrc: "/Images/About/Mission/gog.png",
      height: 336,
      width: 516,
      posX: "left",
      alt: "gog.png",
    },
  ];

  return (
    <section className=" h-auto  mx-auto bg-Gray  ">
      <div className="flex flex-col gap-16 py-32 max-w-maxWidth mx-auto ">
        <div className="flex flex-col gap-oneFourty  ">
          {
            ImgCards.map((item, index) => (
              <ImgCard key={index} imgSrc={item.ImgSrc} altTxt={item.alt} ImagePosX={item.posX} paraTxt={item.paraTxt} heading={item.heaingTxt} subheadingTxt={item.subHeadingTxt} height={item.height} width={item.width} bgColor={"black"} />
            ))
          }
        
        </div>
      </div>
    </section>
  );
};

export default Mission;

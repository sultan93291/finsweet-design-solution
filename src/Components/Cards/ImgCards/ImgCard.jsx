import Heading from "@/Components/Tags/Heading/Heading";
import IMG from "@/Components/Tags/IMG/IMG";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";
import React from "react";

const ImgCard = ({
  ImagePosX,
  imgSrc,
  height,
  width,
  ImgStyle,
  heading,
  subheadingTxt,
  paraTxt,
  altTxt,
  bgColor
}) => {
  return (
    <div className={`flex gap-sixty items-center  
     h-auto w-full `}>
      {ImagePosX === "left" && (
        <IMG
          src={imgSrc}
          height={height}
          width={width}
          alt={altTxt}
          className={ImgStyle}
        />
      )}
      <div className="flex flex-col gap-4  ">
        <Paragraph text={heading} className={"label-two text-DarkBlue"} />
        <Heading
          Heading={"h3"}
          text={subheadingTxt}
          className={"Heading-Three text-DarkBlue "}
        />
        <Paragraph
          text={paraTxt}
          className={"Body-One text-DarkBlue  w-sixTwentyThree "}
        />
      </div>
      {ImagePosX === "right" && (
        <IMG
          src={imgSrc}
          height={height}
          width={width}
          alt={altTxt}
          className={ImgStyle}
        />
      )}
    </div>
  );
};

export default ImgCard;

import Heading from "@/Components/Tags/Heading/Heading";
import IMG from "@/Components/Tags/IMG/IMG";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";
import React from "react";

const FeaturesCards = ({
  src,
  width,
  height,
  alt,
  HeadingStyle,
  paraStyle,
  ImageStyle,
  paraText,
  HeadingText,
  boxColor
}) => {
  return (
    <div
      className={`h-threeOneSix w-fouro_Five bg-${boxColor} pt-fiftySix pl-12 flex flex-col gap-logoparaGap `}
    >
      <IMG
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={ImageStyle}
      />
      <div className=" flex flex-col gap-3 ">
        <Heading Heading={"h6"} text={HeadingText} className={HeadingStyle} />
        <Paragraph text={paraText} className={paraStyle} />
      </div>
    </div>
  );
};

export default FeaturesCards;

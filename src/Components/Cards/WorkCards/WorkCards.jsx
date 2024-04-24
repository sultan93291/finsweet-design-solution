import Heading from "@/Components/Tags/Heading/Heading";
import IMG from "@/Components/Tags/IMG/IMG";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";
import React from "react";

const WorkCards = ({
  src,
  width,
  height,
  alt,
  HeadingStyle,
  paraStyle,
  ImageStyle,
  paraText,
  HeadingText,
}) => {
  return (
    <div className="flex flex-col gap-4 bg-Gray ">
      <IMG
        src={src}
        width={50}
        height={50}
        alt={alt}
        className={ImageStyle}
      />
      <div className=" flex flex-col gap-2">
        <Heading text={HeadingText} className={HeadingStyle} Heading={"h5"} />
        <Paragraph text={paraText} className={paraStyle} />
      </div>
    </div>
  );
};

export default WorkCards;

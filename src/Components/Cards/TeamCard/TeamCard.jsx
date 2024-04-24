import Heading from "@/Components/Tags/Heading/Heading";
import IMG from "@/Components/Tags/IMG/IMG";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";
import React from "react";

const TeamCard = ({
  imgSrc,
  alt,
  height,
  width,
  imgStyle,
  MemberNameTxt,
  postName,
}) => {
  return (
    <div
      className=" w-twoNintySix h-auto pt-12
  pb-8 px-16 flex flex-col gap-thirty bg-white
  "
    >
      <div className="h-[168px] w-[168px] overflow-hidden rounded-full  relative ">
        <IMG
          src={imgSrc}
          alt={alt}
          height={height}
          width={width}
          className={" h-full w-full"}
        />
      </div>
      <div className="flex flex-col items-center ">
        <Heading
          Heading={"h6"}
          className={"Heading-Six text-SBlack capitalize "}
          text={MemberNameTxt}
        />
        <Paragraph
          text={postName}
          className={"Body-One text-SBlack uppercase"}
        />
      </div>
    </div>
  );
};

export default TeamCard;

import Heading from "@/Components/Tags/Heading/Heading";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";
import React from "react";

const ProcessCard = ({ParaTxt,HeadingTxt}) => {
  return (
    <div className="flex flex-col w-twoSeventyTwo gap-8 ">
      <div className="flex items-center justify-between  ">
        <div className=" h-6 w-6 rounded-full bg-royalBlue  "></div>
        <hr className="w-[224px]  border-dotted border-royalBlue opacity-40 " />
      </div>
      <div className="flex flex-col">
        <Heading
          Heading={"h6"}
          className={"Heading-Six-2nd text-DarkBlue"}
          text={HeadingTxt}
        />
        <Paragraph className={"Body-One text-DarkBlue "} text={ParaTxt} />
      </div>
    </div>
  );
};

export default ProcessCard;

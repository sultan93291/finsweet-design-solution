import React from "react";
import Heading from "../../Tags/Heading/Heading";
import Paragraph from "../../Tags/Paragraph/Paragraph";

const CommonHeadingPara = ({ headinTxt, paraTxt }) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <Heading
        Heading={"h2"}
        text={headinTxt}
        className={"common-HeadingTwo text-DarkBlue"}
      />
      <Paragraph
        text={paraTxt}
        className={"Body-One text-DarkBlue w-fivesixtytwo text-center "}
      />
    </div>
  );
};

export default CommonHeadingPara;

import Heading from "@/Components/Tags/Heading/Heading";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";
import React from "react";

const BlogHeadingPara = ({ headingTxt, paraTxt, isheading, isUl }) => {
  const linktxt =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.";
  return (
    <div className="flex flex-col gap-6 ">
      <div className="flex flex-col gap-y-8">
        {isheading && (
          <Heading
            text={headingTxt}
            Heading={"h3"}
            className={"text-DarkBlue w-eightFourtyTwo Heading-Three  "}
          />
        )}
        <Paragraph
          text={paraTxt}
          className={" text-DarkBlue w-eightFourtyTwo opacity-70 mixed-label "}
        />
      </div>
      {isUl && (
        <ul className="flex flex-col gap-3 opacity-70 ml-4 ">
          <li className=" list-disc">
            <Paragraph
              text={linktxt}
              className={"mixed-label text-DarkBlue "}
            />
          </li>
          <li className=" list-disc">
            <Paragraph
              text={linktxt}
              className={"mixed-label text-DarkBlue "}
            />
          </li>
          <li className=" list-disc">
            <Paragraph
              text={linktxt}
              className={"mixed-label text-DarkBlue "}
            />
          </li>
        </ul>
      )}
    </div>
  );
};

export default BlogHeadingPara;

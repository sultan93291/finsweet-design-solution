import Heading from "@/Components/Tags/Heading/Heading";
import IMG from "@/Components/Tags/IMG/IMG";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";
import React from "react";

const BlogImgCard = ({ imgSrc }) => {
  console.log(imgSrc)
  return (
    <div className="flex flex-col gap-y-12 items-center ">
      <div className="  flex flex-col items-center gap-y-4 ">
        <Heading
          Heading={"h2"}
          className={
            "common-HeadingTwo text-DarkBlue w-nineFourtyNine text-center"
          }
          text={
            "A UX Case Study on Creating a Studious Environment for Students"
          }
        />
        <Paragraph
          className={
            "label-two text-DarkBlue opacity-85 flex text-center items-center "
          }
          text={
            <>
              Andrew Jonsons{" "}
              <span className={"label-two text-DarkBlue text-center"}>
                Posted on 27th January 2021s
              </span>
            </>
          }
        />
      </div>
      <IMG
        src={imgSrc ? imgSrc : "/Images/BlogCard/cutegirl.png"}
        height={477}
        width={1280}
        className={
          "h-fourSeventySeven w-thousandTwoZeroeight bg-cover bg-no-repeat"
        }
        alt={"blog img card"}
      />
    </div>
  );
};

export default BlogImgCard;

import Heading from "@/Components/Tags/Heading/Heading";
import IMG from "@/Components/Tags/IMG/IMG";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useParams, useRouter } from "next/navigation";

const TeamplateCard = ({ ImgSrc, HeadingTxt, ParaTxt }) => {
  const router = useRouter();
  const handleTemplate = () => {
    router.push(`/portfolio/Template?=${ImgSrc}`);
  };
  return (
    <div
      className=" h-auto w-sixTwentyThree flex  flex-col  gap-6 cursor-pointer"
      onClick={handleTemplate}
    >
      <IMG src={ImgSrc} height={317} width={623} alt={"templates img"} />
      <div className="flex flex-col gap-6 ">
        <div className="flex flex-col gap-3">
          <Heading
            Heading={"h3"}
            text={`Template ${HeadingTxt}`}
            className={"Heading-Three text-DarkBlue "}
          />
          <Paragraph
            text={ParaTxt}
            className={"Body-One text-DarkBlue w-sixTwentyThree "}
          />
        </div>
        <span className=" flex items-center gap-4 label-two  text-base text-DarkBlue  ">
          {" "}
          View Portfolio <BsArrowRight className=" text-xl " />{" "}
        </span>
      </div>
    </div>
  );
};

export default TeamplateCard;

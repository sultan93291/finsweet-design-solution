import Button from "@/Components/Tags/Button/Button";
import Heading from "@/Components/Tags/Heading/Heading";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";
import { BsArrowRight } from "react-icons/bs";
import React from "react";
import IMG from "@/Components/Tags/IMG/IMG";
import { useRouter } from "next/navigation";

const Banner = () => {
  const router = useRouter();
  const handleclick = () => {
    router.push("/portfolio");
  };
  return (
    <section className=" h-auto w-auto bg-Blue px-navbarPadding py-32  flex justify-between ">
      <div className=" flex flex-col gap-6 ">
        <Heading
          Heading="h1"
          text="Building stellar websites for early startups"
          className="Main-Heading text-white w-fiveEightyTwo "
        />
        <Paragraph
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
          }
          className={" common-ParagraphTwo text-white w-fivesixtytwo "}
        />
        <div className=" mt-12 flex gap-10 items-center ">
          <Button
            text={"view our work"}
            className={"common-Btn"}
            onclick={handleclick}
          />
          <span className=" flex items-center gap-4 label-two text-white text-base ">
            {" "}
            view pricing <BsArrowRight className=" text-xl " />{" "}
          </span>
        </div>
      </div>
      <div>
        <IMG
          src={"/Images/Home/Banner/hero.png"}
          alt={"hero"}
          width={638}
          height={24}
          className={"bg-contain "}
        />
      </div>
    </section>
  );
};

export default Banner;

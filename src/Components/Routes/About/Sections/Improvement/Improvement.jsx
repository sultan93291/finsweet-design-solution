import Heading from "@/Components/Tags/Heading/Heading";
import IMG from "@/Components/Tags/IMG/IMG";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";
import React from "react";

const Improvement = () => {
  return (
    <section className=" h-auto max-w-maxWidth mx-auto   my-32  bg-Gray   ">
      <div className=" flex flex-col p-20 ">
        <Paragraph text={"Who we are"} className={"label-two text-DarkBlue"} />
        <div className="flex gap-sixty ">
          <div className="flex flex-col gap-4 ">
            <Heading
              Heading={"h3"}
              text={"Goal focussed"}
              className={"Heading-Three text-DarkBlue "}
            />
            <Paragraph
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              }
              className={"Body-One text-DarkBlue w-fiveOneFive"}
            />
          </div>
          <div className="flex flex-col gap-4 ">
            <Heading
              Heading={"h3"}
              text={"Continuous improvement"}
              className={"Heading-Three text-DarkBlue "}
            />
            <Paragraph
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              }
              className={"Body-One text-DarkBlue w-fiveOneFive"}
            />
          </div>
        </div>
      </div>
      <IMG src={"/Images/About/Improvement/startUp.png"} width={1280} height={340} />
    </section>
  );
};

export default Improvement;

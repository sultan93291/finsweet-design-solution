import ProcessCard from "@/Components/Cards/ProcessCards/ProcessCard";
import Heading from "@/Components/Tags/Heading/Heading";
import React from "react";

const Process = () => {
  const paraTxt = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.";
  const processcard = [
    { headingTxt: "planning", paraTxt: paraTxt },
    { headingTxt: "conception", paraTxt: paraTxt },
    { headingTxt: "design", paraTxt: paraTxt },
    { headingTxt: "development", paraTxt: paraTxt },
  ];

  return (
    <section className=" h-auto max-w-maxWidth mx-auto ">
      <div className="flex flex-col gap-sixty py-32 ">
        <div className="flex items-center justify-center ">
          <Heading
            className={"Heading-two text-DarkBlue"}
            Heading={"h2"}
            text={"The process we follow"}
          />
        </div>
        <div className=" flex flex-wrap gap-[56px] ">
          {processcard.map((item, index) => (
            <ProcessCard
              HeadingTxt={item.headingTxt}
              ParaTxt={item.paraTxt}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

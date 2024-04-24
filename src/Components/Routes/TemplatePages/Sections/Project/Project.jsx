import Heading from "@/Components/Tags/Heading/Heading";
import IMG from "@/Components/Tags/IMG/IMG";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";
import React from "react";

const Project = () => {
  const paraTxt =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  return (
    <section className=" h-auto w-auto  bg-white      ">
      <div className="max-w-maxWidth pt-32  flex flex-col justify-between gap-ninetySix px-navbarPadding relative ml-twoTwenty  ">
        <div className="flex flex-col gap-y-16 h-full w-full  ">
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-3">
              <Heading
                Heading={"h3"}
                text={"About the project"}
                className={"Heading-Three text-DarkBlue"}
              />
              <Paragraph
                text={paraTxt}
                className={
                  "Body-One text-DarkBlue opacity-70 w-eightThirtySeven"
                }
              />
            </div>
            <ul className="flex flex-col gap-y-4 ">
              <li className=" list-disc ml-3 ">
                <Paragraph
                  text={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                  }
                  className={"Body-One text-DarkBlue"}
                />
              </li>
              <li className=" list-disc ml-3 ">
                <Paragraph
                  text={
                    "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"
                  }
                  className={"Body-One text-DarkBlue"}
                />
              </li>
              <li className=" list-disc ml-3 ">
                <Paragraph
                  text={
                    "Duis aute irure dolor in reprehenderit in voluptate velit esse"
                  }
                  className={"Body-One text-DarkBlue"}
                />
              </li>
              <li className=" list-disc ml-3 ">
                <Paragraph
                  text={
                    "Excepteur sint occaecat cupidatat non proident, sunt in culpa"
                  }
                  className={"Body-One text-DarkBlue"}
                />
              </li>
            </ul>
          </div>
          <div className=" w-eightFourtyTwo  relative flex flex-col    ">
            <IMG
              src={"/Images/TemplateImg/commoncover.png"}
              height={508}
              width={842}
              alt={"common cover"}
              className={" h-fiveOEight w-ful  bg-cover bg-no-repeat  l"}
            />
          </div>
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-3">
              <Heading
                Heading={"h3"}
                text={"How we do it"}
                className={"Heading-Three text-DarkBlue"}
              />
              <Paragraph
                text={paraTxt}
                className={
                  "Body-One text-DarkBlue opacity-70 w-eightThirtySeven"
                }
              />
            </div>
            <ul className="flex flex-col gap-y-4 ">
              <li className=" list-disc ml-3 ">
                <Paragraph
                  text={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                  }
                  className={"Body-One text-DarkBlue"}
                />
              </li>
              <li className=" list-disc ml-3 ">
                <Paragraph
                  text={
                    "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"
                  }
                  className={"Body-One text-DarkBlue"}
                />
              </li>
              <li className=" list-disc ml-3 ">
                <Paragraph
                  text={
                    "Duis aute irure dolor in reprehenderit in voluptate velit esse"
                  }
                  className={"Body-One text-DarkBlue"}
                />
              </li>
              <li className=" list-disc ml-3 ">
                <Paragraph
                  text={
                    "Excepteur sint occaecat cupidatat non proident, sunt in culpa"
                  }
                  className={"Body-One text-DarkBlue"}
                />
              </li>
            </ul>
          </div>
        </div>
        <div className=" flex flex-col gap-y-twentySix ">
          <hr className="w-nineFiftyFive h-one bg-DarkBlue opacity-20 border-dotted " />
          <ul className="flex gap-x-fiftyThree ">
            <li>
              <Heading
                Heading={"h6"}
                className={"Heading-Six-3rd text-royalBlue"}
                text={"Keywords"}
              />
            </li>
            <li>
              <Paragraph
                className={" text-DarkBlue label-one capitalize opacity-70 "}
                text={"design"}
              />
            </li>
            <li>
              <Paragraph
                className={" text-DarkBlue label-one uppercase opacity-70 "}
                text={"ui/ux"}
              />
            </li>
            <li>
              <Paragraph
                className={" text-DarkBlue label-one capitalize opacity-70 "}
                text={"wirefarming"}
              />
            </li>
            <li>
              <Paragraph
                className={" text-DarkBlue label-one capitalize opacity-70 "}
                text={"branding"}
              />
            </li>
            <li>
              <Paragraph
                className={" text-DarkBlue label-one capitalize opacity-70 "}
                text={"development"}
              />
            </li>
            <li>
              <Paragraph
                className={" text-DarkBlue label-one capitalize opacity-70 "}
                text={"webflow"}
              />
            </li>
          </ul>
          <hr className="w-nineFiftyFive h-one bg-DarkBlue opacity-20 border-dotted " />
        </div>
      </div>
    </section>
  );
};

export default Project;

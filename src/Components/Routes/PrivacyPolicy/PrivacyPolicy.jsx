import BlogHeadingPara from "@/Components/Cards/BlogHeadingPara/BlogHeadingPara";
import CommonHeadingPara from "@/Components/Cards/CommonHeadingPara/CommonHeadingPara";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className=" h-auto w-auto  bg-white  flex flex-col py-32    ">
      <div className="flex flex-col gap-y-16 items-center max-w-maxWidth mx-auto ">
        <CommonHeadingPara
          headinTxt={"Privacy Policy"}
          paraTxt={
            "When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help you bring your "
          }
        />
        <div className="flex flex-col gap-10">
          <div className=" flex flex-col gap-6">
            <BlogHeadingPara
              headingTxt={"Lorem ipsum dolor."}
              paraTxt={
                <>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                  {
                    <span className=" text-royalBlue ">
                      {" "}
                      Excepteur sint occaecat{" "}
                    </span>
                  }
                  cupidatat non proident.
                </>
              }
            />
            <BlogHeadingPara
              paraTxt={
                "Sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
          </div>
          <div className="flex flex-col gap-4">
            <BlogHeadingPara
              isheading={true}
              isUl={true}
              headingTxt={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              }
              paraTxt={
                <>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat{" "}
                  {<span className=" text-royalBlue "> cupidatats </span>} non
                  proident. Dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris.
                </>
              }
            />
            <BlogHeadingPara
              paraTxt={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;

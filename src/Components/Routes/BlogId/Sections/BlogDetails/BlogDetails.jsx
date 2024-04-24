import BlogHeadingPara from "@/Components/Cards/BlogHeadingPara/BlogHeadingPara";
import IMG from "@/Components/Tags/IMG/IMG";
import React from "react";

const BlogDetails = () => {
  return (
    <section className=" h-auto w-auto  bg-white  flex flex-col pt-12 pb-32    ">
      <div className="flex flex-col gap-y-14 items-center max-w-maxWidth mx-auto ">
        <div className="flex flex-col gap-10">
          <BlogHeadingPara
            isheading={true}
            headingTxt={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
            paraTxt={
              <>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
                {
                  <span className=" text-royalBlue ">
                    Excepteur sint occaecat
                  </span>
                }{" "}
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </>
            }
          />
          <BlogHeadingPara
            isheading={true}
            isUl={true}
            headingTxt={"Ut enim ad minim veniam, quis nostrud."}
            paraTxt={
              <>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.Excepteur sint occaecat{" "}
                {<span className=" text-royalBlue "> cupidatat non </span>}
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </>
            }
          />
        </div>
        <div className="flex flex-col gap-y-8">
          <BlogHeadingPara
            paraTxt={
              <>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud{" "}
                {
                  <span className=" text-royalBlue ">
                    {" "}
                    exercitation ullamco{" "}
                  </span>
                }{" "}
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </>
            }
          />
          <IMG
            src={"/Images/BlogCard/hands.jpg"}
            width={841}
            height={311}
            className={" w-eightFourtyTwo h-threeOneOne bg-cover bg-no-repeat "}
            alt={"hands.png"}
          />
        </div>
        <BlogHeadingPara
          isheading={true}
          headingTxt={"Ut enim ad minim veniam, quis nostrud."}
          paraTxt={
            <>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud{" "}
              {<span className=" text-royalBlue "> exercitation ullamco </span>}{" "}
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </>
          }
        />
      </div>
    </section>
  );
};

export default BlogDetails;

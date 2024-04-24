import TeamplateCard from "@/Components/Cards/TemplateCard/TeamplateCard";
import Button from "@/Components/Tags/Button/Button";
import Heading from "@/Components/Tags/Heading/Heading";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";
import React from "react";
import { useRouter } from "next/navigation";

const Template = () => {
  const router = useRouter();
  const handleclick = () => {
    router.push("/contact");
  };
  const paraTxt =
    "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.";
  const templateCardInfo = [
    {
      imgSrc: "/Images/TemplateImg/smile.png",
      headingTxt: "1",
      paraTxt: paraTxt,
    },
    {
      imgSrc: "/Images/TemplateImg/ether.png",
      headingTxt: "2",
      paraTxt: paraTxt,
    },
    {
      imgSrc: "/Images/TemplateImg/service.png",
      headingTxt: "3",
      paraTxt: paraTxt,
    },
    {
      imgSrc: "/Images/TemplateImg/trial.png",
      headingTxt: "4",
      paraTxt: paraTxt,
    },
    {
      imgSrc: "/Images/TemplateImg/andrew.png",
      headingTxt: "5",
      paraTxt: paraTxt,
    },
    {
      imgSrc: "/Images/TemplateImg/analaysis.png",
      headingTxt: "5",
      paraTxt: paraTxt,
    },
  ];
  return (
    <section className="h-auto w-auto  py-24     ">
      <div className=" max-w-maxWidth h-auto mx-auto flex flex-col  gap-32 ">
        <div className="flex flex-col gap-12 items-center ">
          <ul className="flex gap-8 items-center ">
            <li className="label-one capitalize text-center  text-royalBlue">
              all
            </li>
            <li className="label-one capitalize text-center opacity-70 text-DarkBlue ">
              ui design
            </li>
            <li className="label-one capitalize text-center opacity-70 text-DarkBlue ">
              Webflow Design
            </li>
            <li className="label-one capitalize text-center opacity-70 text-DarkBlue">
              Figma Design
            </li>
          </ul>
          <div className=" flex flex-wrap gap-x-thirtyFour gap-y-6">
            {templateCardInfo.map((item, index) => (
              <TeamplateCard
                key={index}
                ImgSrc={item.imgSrc}
                HeadingTxt={item.headingTxt}
                ParaTxt={item.paraTxt}
              />
            ))}
          </div>
        </div>
        <div>
          <div className=" flex flex-col gap-10 items-center ">
            <div className="flex flex-col gap-6 items-center">
              <Heading
                Heading={"h2"}
                className={
                  "common-HeadingTwo text-DarkBlue text-center w-sevenThirtyThree "
                }
                text={"Let's build something great together"}
              />

              <Paragraph
                text={
                  "Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet, scelerisque cursus purus."
                }
                className={"Body-Two w-fivesixtytwo text-center text-DarkBlue "}
              />
            </div>
            <Button
              text={"Contact Us"}
              className={"common-yellow-BlackBtn"}
              onclick={handleclick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Template;

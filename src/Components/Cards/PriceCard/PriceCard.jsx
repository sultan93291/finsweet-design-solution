import Button from "@/Components/Tags/Button/Button";
import Heading from "@/Components/Tags/Heading/Heading";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";
import { useRouter } from "next/navigation";

import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
export const PriceCard = ({
  isGray,
  ismiddle,
  pricgTag,
  priceTagHeading,
  subHeading,
  paraTxt,
  btnTXt,
  facilites,
}) => {
  const router = useRouter();
  const handleclick = () => {
    router.push("/contact");
  };
  return (
    <div className="w-fourOSix h-auto  flex flex-col bg-Gray rounded-xl hover:bg-Blue group transition duration-150 ">
      <div
        className={`flex flex-col ${
          ismiddle ? "gap-fifty" : "gap-20"
        } py-16 pl-12`}
      >
        <div className=" flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <Heading
              Heading={"h3"}
              text={pricgTag}
              className={"Heading-Three text-DarkBlue group-hover:text-white"}
            />
            <Paragraph
              text={priceTagHeading}
              className={"Body-One text-royalBlue group-hover:text-yellow"}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Heading
              Heading={"h6"}
              text={subHeading}
              className={"Heading-Six text-DarkBlue group-hover:text-white"}
            />
            <Paragraph
              text={paraTxt}
              className={"Body-Two text-DarkBlue group-hover:text-white"}
            />
          </div>
        </div>
        <ul className="flex flex-col gap-5">
          {facilites.map((link, index) => (
            <li key={index} className="flex gap-3 items-center ">
              <BsFillPlayFill
                className={` ${
                  isGray &&
                  (index === facilites.length - 2 ||
                    index === facilites.length - 1)
                    ? "text-gray-400"
                    : "text-green"
                }  text-2xl `}
              />
              <Paragraph
                text={link}
                className={
                  "Body-One text-base text-DarkBlue group-hover:text-white"
                }
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex px-seventySix pb-sixtyTwo ">
        <Button
          text={btnTXt}
          className={
            "py-[16px] px-[56px] rounded-[41px] bg-DarkBlue text-white text-base capitalize font-semibold font-manrope leading-8  border-[2px] border-transparent group-hover:border-solid group-hover:bg-yellow  group-hover:text-DarkBlue transition duration-100 h-full w-full "
          }
          onclick={handleclick}
        />
      </div>
    </div>
  );
};

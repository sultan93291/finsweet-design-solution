"use client";
import Heading from "@/Components/Tags/Heading/Heading";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";
import React, { useState, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoIosAdd } from "react-icons/io";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Contact = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleAccordion = index => {
    if (index !== expandedIndex) {
      setExpandedIndex(index);
    }
  };

  const ItemContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  const items = [
    {
      itemNum: "01",
      Heading: "How much time does it take?",
      content: ItemContent,
    },
    {
      itemNum: "02",
      Heading: "What is your class naming convention?",
      content: ItemContent,
    },
    {
      itemNum: "03",
      Heading: "How do you communicate?",
      content: ItemContent,
    },
    {
      itemNum: "04",
      Heading: "I have a bigger project. Can you handle it?",
      content: ItemContent,
    },
    {
      itemNum: "05",
      Heading: "What is your class naming convention?",
      content: ItemContent,
    },
  ];
  return (
    <section className=" h-auto w-auto  pl-navbarPadding py-32   bg-white flex gap-hundredThirtySix  ">
      <div className=" flex flex-col gap-4">
        <Heading
          Heading={"h3"}
          className={"Heading-Three text-DarkBlue w-threeTwentySeven "}
          text={"Frequently asked questions"}
        />
        <Paragraph
          text={"Contact us for more info"}
          className={"label-one text-royalBlue opacity-85 "}
        />
      </div>
      <div>
        <Accordion
          preExpanded={[0]}
          className="relative flex flex-col gap-8  w-eightFourtyThree "
        >
          {items.map((item, index) => (
            <AccordionItem
              className={`${index !== 0 ? " mt-8 " : ""} ${index === expandedIndex ?"mb-8":""} `}
              uuid={index}
              key={index}
            >
              <Heading
                Heading={"h6"}
                text={item.itemNum}
                className=" absolute flex items-center text-center Heading-Six text-royalBlue left-0 "
              />

              <AccordionItemHeading
                className={`ml-eighttyNine Heading-Six-2nd text-DarkBlue mb-4 relative ${
                  index !== 4
                    ? `after:absolute after:content-[''] after:h-0.5 after:w-eightFourtyThree after:bg-offWhite after:right-0 after:bottom-0   
                  ${
                    expandedIndex === index
                      ? "after:mb-expand"
                      : "after:mb-collpase"
                  } `
                    : ""
                }   `}
              >
                {item.Heading}
                <AccordionItemButton className=" absolute top-0 right-0  flex ">
                  {expandedIndex === index ? (
                    <RxCross1
                      className=" text-base text-DarkBlue "
                      onClick={() => handleAccordion(index)}
                    />
                  ) : (
                    <IoIosAdd
                      className=" text-xl text-DarkBlue "
                      onClick={() => handleAccordion(index)}
                    />
                  )}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="ml-eighttyNine label-one opacity-85 w-sixTwentyFour ">
                {item.content}
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Contact;

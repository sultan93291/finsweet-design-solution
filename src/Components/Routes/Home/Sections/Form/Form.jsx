"use client";
import Button from "@/Components/Tags/Button/Button";
import Heading from "@/Components/Tags/Heading/Heading";
import IMG from "@/Components/Tags/IMG/IMG";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";
import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";


const Form = () => {
  const [Form, setForm] = useState({
    name: "",
    email: "",
    url: "",
  });

  const handleForm = e => {
    const { name, value } = e.target;
    setForm((prevFormValue)=>({...prevFormValue, [name]:value}))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section className=" h-auto w-auto  px-navbarPadding pb-32   bg-white flex   ">
      <div className="flex flex-col w-sixO_fiftySix gap-8 relative after:absolute after:content-[''] after:h-full after:w-full after:bg-blue_linear  after:top-0 after:left-0 after:z-20  ">
        <IMG
          src={"/Images/Home/Form/laptop.png"}
          alt={"uninas img"}
          width={656}
          height={691}
          className={"h-full w-full bg-cover"}
        />

        <div className=" absolute top-0 left-0 z-30 ml-24 mt-24 flex flex-col gap-10 ">
          <div className="">
            <Heading
              Heading={"h5"}
              text={"Building stellar websites for early startups"}
              className={"Main-Heading text-white  w-[464px] "}
            />
          </div>
          <Paragraph
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."
            }
            className={"Body-Two w-fourSixtyFour text-white "}
          />
        </div>
      </div>
      <form className="h-auto pt-24 px-24 w-sixTwentyFour bg-Blue flex flex-col gap-10 ">
        <div className="flex flex-col gap-4 ">
          <Heading
            Heading={"h5"}
            text={"Send inquiry"}
            className={"text-white HeadingFive-one "}
          />
          <Paragraph
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
            }
            className={"label-two text-white "}
          />
        </div>
        <div className="flex flex-col gap-4">
          <input
            onChange={handleForm}
            type="text"
            className="inputStyle Body-One text-offWhite "
            placeholder="your name"
            name="name"
          />
          <input
            onChange={handleForm}
            type="email"
            className="inputStyle Body-One text-offWhite "
            placeholder="email"
            name="email"
          />
          <input
            onChange={handleForm}
            name="url"
            type="text"
            className="inputStyle Body-One text-offWhite "
            placeholder="paste your figma url"
          />
        </div>
        <div className="flex flex-col gap-7 w-full relative ">
          <Button text={"Send an Inquiry"} className={"common-Btn w-full "} />
          <span className=" flex  items-center gap-4 label-one text-white text-base justify-center ">
            {" "}
            Get in touch with us <BsArrowRight className=" text-xl " />{" "}
          </span>
        </div>
      </form>
    </section>
  );
};

export default Form;

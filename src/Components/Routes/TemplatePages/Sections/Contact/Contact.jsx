"use client";
import Button from "@/Components/Tags/Button/Button";
import Heading from "@/Components/Tags/Heading/Heading";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";
import React from "react";
import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();
  const handleclick = () => {
    router.push("/contact");
  };

  return (
    <section className=" h-auto w-auto  bg-white mx-auto flex flex-col items-center gap-10 py-32    ">
      <div className="flex flex-col gap-y-twenty items-center ">
        <Heading
          Heading={"h2"}
          text={"Let's build something great together"}
          className={
            "common-HeadingTwo text-DarkBlue w-eightFourtyThree text-center"
          }
        />
        <Paragraph
          text={
            "Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet, scelerisque cursus purus."
          }
          className={
            "Body-One text-DarkBlue opacity-70  w-sixTwentyThree  text-center"
          }
        />
      </div>
      <Button
        text={"Contact Us"}
        className={"common-yellow-BlackBtn"}
        onclick={handleclick}
      />
    </section>
  );
};

export default Contact;

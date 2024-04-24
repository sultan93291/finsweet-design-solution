"use client";
import BlogCards from "@/Components/Cards/BlogCards/BlogCards";
import Heading from "@/Components/Tags/Heading/Heading";
import React from "react";
import { useParams, useRouter } from "next/navigation";
const BlogCardsSec = () => {
  const router = useRouter();
  const handleblog = ImgSrc => {
    router.push(`/blog/blogsrc?=${ImgSrc}`);
  };
  const Date = "27 Jan 2021";
  const HeadingTXt =
    "How one Webflow user grew his single person consultancy from $0-100K in 14 months";
  const paraTxt =
    "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract";
  const BlogCard = [
    {
      imgPath: "/Images/BlogCard/meeting.png",
      Date: Date,
      HeadingTXt: HeadingTXt,
      paraTxt: paraTxt,
    },
    {
      imgPath: "/Images/BlogCard/smilingwomen.png",
      Date: Date,
      HeadingTXt: HeadingTXt,
      paraTxt: paraTxt,
    },
    {
      imgPath: "/Images/BlogCard/airpod.png",
      Date: Date,
      HeadingTXt: HeadingTXt,
      paraTxt: paraTxt,
    },
    {
      imgPath: "/Images/BlogCard/table.png",
      Date: Date,
      HeadingTXt: HeadingTXt,
      paraTxt: paraTxt,
    },
    {
      imgPath: "/Images/BlogCard/redtshirt.png",
      Date: Date,
      HeadingTXt: HeadingTXt,
      paraTxt: paraTxt,
    },
    {
      imgPath: "/Images/BlogCard/conference.png",
      Date: Date,
      HeadingTXt: HeadingTXt,
      paraTxt: paraTxt,
    },
  ];
  return (
    <section className=" h-auto w-auto  bg-white  flex flex-col py-32    ">
      <div className="flex flex-col gap-y-12 items-center max-w-maxWidth mx-auto ">
        <Heading
          Heading={"h2"}
          text={"Our Blog"}
          className={"Heading-two text-DarkBlue"}
        />
        <div className=" flex  flex-wrap gap-x-8 gap-y-sixtyFour ">
          {BlogCard.map((item, index) => (
            <div onClick={() => handleblog(item.imgPath)} key={index}>
              <BlogCards
                key={index}
                src={item.imgPath}
                height={285}
                width={405}
                DateTxt={item.Date}
                ParaTxt={item.paraTxt}
                HeadingTxt={item.HeadingTXt}
                alt={"blog card image"}
                imgStyle={"bg-cover"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCardsSec;

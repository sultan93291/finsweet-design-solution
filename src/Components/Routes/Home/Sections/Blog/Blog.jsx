import BlogCards from "@/Components/Cards/BlogCards/BlogCards";
import Heading from "@/Components/Tags/Heading/Heading";
import React from "react";
import { useRouter } from "next/navigation";

const Blog = () => {
  const router = useRouter();
  
  const handleblog = ImgSrc => {
    router.push(`/blog/blogsrc?=${ImgSrc}`);
  };
  const Date = "19 jan 2022";
  const HeadingTXt =
    "How one Webflow user grew his single person consultancy from $0-100K in 14 months";
  const paraTxt =
    "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract";
  const BlogCard = [
    {
      imgPath: "/Images/Home/Blog/beard.png",
      Date: Date,
      HeadingTXt: HeadingTXt,
      paraTxt: paraTxt,
    },
    {
      imgPath: "/Images/Home/Blog/brownHair.png",
      Date: Date,
      HeadingTXt: HeadingTXt,
      paraTxt: paraTxt,
    },
    {
      imgPath: "/Images/Home/Blog/apple.png",
      Date: Date,
      HeadingTXt: HeadingTXt,
      paraTxt: paraTxt,
    },
  ];
  return (
    <section className=" h-auto w-auto  px-navbarPadding py-32   bg-white flex flex-col gap-16  ">
      <Heading
        Heading={"h2"}
        text={"Our blog"}
        className={"Heading-two text-DarkBlue"}
      />
      <div className=" flex  flex-wrap gap-x-8 gap-y-sixtyFour  ">
        {BlogCard.map((item, index) => (
          <div key={index} onClick={() => handleblog(item.imgPath)}>
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
    </section>
  );
};

export default Blog;

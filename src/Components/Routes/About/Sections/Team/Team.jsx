import TeamCard from "@/Components/Cards/TeamCard/TeamCard";
import Heading from "@/Components/Tags/Heading/Heading";
import React from "react";

const Team = () => {
  const measurements = {
    height: 168,
    width: 168,
  };
  const TeamCardInfo = [
    {
      imgSrc: "/Images/TeamCard/ceo.png",
      height: measurements.height,
      width: measurements.width,
      alt: "drill",
      MemberNameTxt: "johon smith",
      postName: "ceo",
    },
    {
      imgSrc: "/Images/TeamCard/shavedman.png",
      height: measurements.height,
      width: measurements.width,
      alt: "drill",
      MemberNameTxt: "Simon Adams",
      postName: "CTO",
    },
    {
      imgSrc: "/Images/TeamCard/blackhat.png",
      height: measurements.height,
      width: measurements.width,
      alt: "drill",
      MemberNameTxt: "Paul Jones",
      postName: "Design Lead",
    },
    {
      imgSrc: "/Images/TeamCard/pinkgirl.png",
      height: measurements.height,
      width: measurements.width,
      alt: "drill",
      MemberNameTxt: "Sara Hardin",
      postName: "Project Manager",
    },
  ];
  return (
    <section className=" h-auto  bg-Gray     ">
      <div className="max-w-maxWidth py-32 flex flex-col justify-between gap-12 mx-auto   ">
        <div className=" flex justify-center ">
          <Heading
            Heading={"h2"}
            text={"Meet our team"}
            className={"common-HeadingTwo text-DarkBlue"}
          />
        </div>
        <div className="flex flex-wrap gap-8">
          {TeamCardInfo.map((item, index) => (
            <TeamCard
              height={item.height}
              width={item.width}
              postName={item.postName}
              MemberNameTxt={item.MemberNameTxt}
              key={index}
              imgSrc={item.imgSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

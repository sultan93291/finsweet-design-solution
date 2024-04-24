import React from "react";
import Banner from "./Sections/Banner/Banner";
import Team from "./Sections/Team/Team";
import Service from "./Services/Service";
import Logos from "./Sections/Logos/Logos";
import Faq from "./Sections/Faq/Faq";

const Features = () => {
  return (
    <>
      <Banner />
      <Logos/>
      <Team />
      <Service />
      <Faq/>
    </>
  );
};

export default Features;

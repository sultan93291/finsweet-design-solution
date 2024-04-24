import Heading from "@/Components/Tags/Heading/Heading";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";
import Image from "next/image";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <section className="h-auto pt-footerSectionPadding  bg-Blue w-auto flex gap-FooterSec   ">
        <div className=" flex flex-col gap-logoBoxGap px-navbarPadding  ">
          <div className="flex flex-col gap-logoparaGap ">
            <Image
              src={"/Images/Footer/footerLogo.png"}
              className="bg-cover"
              height={38}
              width={158}
              alt="footer logo"
            />
            <Paragraph
              text={
                "We are always open to discuss your project and improve your online presence."
              }
              className={"common-Paragraph w-paraWidth  text-white "}
            />
          </div>
          <div className=" bg-yellow h-auto w-Yellobox py-yellowBoxPadding flex  ">
            <div className="flex flex-col ml-yellowboxLeft ">
              <Heading
                Heading={"h4"}
                text={"Email me at"}
                className={"common-Heading5  "}
              />
              <Paragraph
                text={"contact@website.com"}
                className={"common-Paragraph text-DarkBlue "}
              />
            </div>

            <div className="flex flex-col ml-yellowboxLeft ">
              <Heading
                Heading={"h4"}
                text={"Call us"}
                className={"common-Heading5  "}
              />
              <Paragraph
                text={"0927 6277 28525"}
                className={"common-Paragraph text-DarkBlue "}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-twentyEight ">
          <div className="flex flex-col gap-fourteen">
            <Heading
              Heading="h2"
              text="Lets Talk!"
              className=" common-HeadingTwo text-heading2 text-white"
            />
            <Paragraph
              text={
                "We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges."
              }
              className={"common-Paragraph w-paraWidth  text-white "}
            />
          </div>
          <ul className="flex gap-twentySix ">
            <li className="text-white text-navLink ">
              <FaFacebook />
            </li>
            <li className="text-white  text-navLink">
              <AiOutlineTwitter />
            </li>
            <li className="text-white text-navLink">
              <AiOutlineInstagram />
            </li>
            <li className="text-white text-navLink ">
              <AiFillLinkedin />
            </li>
          </ul>
        </div>
      </section>
      <footer className="h-navbar_Height w-auto px-navbarPadding justify-between flex items-center  ">
        <Paragraph
          text={"Copyright 2022, Finsweet.com"}
          className={"common-Heading5"}
        />
        <ul className="flex gap-8  ">
          <li>
            <Link href={"/"} className="Navbar-Link text-DarkBlue ">
              home
            </Link>
          </li>
          <li>
            <Link href={"/about"} className="Navbar-Link text-DarkBlue ">
              about us
            </Link>
          </li>
          <li>
            <Link href={"/features"} className="Navbar-Link text-DarkBlue ">
              features
            </Link>
          </li>
          <li>
            <Link href={"/pricing"} className="Navbar-Link text-DarkBlue ">
              pricing
            </Link>
          </li>
          <li>
            <Link href={"/portfolio"} className="Navbar-Link text-DarkBlue ">
              portfolio
            </Link>
          </li>

          <li>
            <Link href={"/blog"} className="Navbar-Link text-DarkBlue ">
              blog
            </Link>
          </li>
          <li>
            <Link href={"/privacy"} className="Navbar-Link text-DarkBlue ">
              privacy
            </Link>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;

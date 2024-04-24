"use client";
import Button from "@/Components/Tags/Button/Button";
import IMG from "@/Components/Tags/IMG/IMG";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";


const Navbar = () => {
  const router = useRouter()
  const handleclick = () => {
    router.push("/contact")
  }
  const [pathName, setpathName] = useState();
  useEffect(() => {
    const path = window.location.pathname;
    setpathName(path);
  }, []);
  return (
    <nav className=" h-navbar_Height w-auto bg-Blue px-navbarPadding flex items-center justify-between ">
      <IMG
        src={"/Images/Navbar/sitelogo.png"}
        height={28}
        width={122}
        alt="navbar logo"
      />

      <div className="flex gap-navMenuGap items-center ">
        <ul className="flex gap-8">
          <li>
            <Link
              href={"/"}
              className={`${
                pathName === "/" ? " text-white " : " text-navLinkTxtColor "
              } Navbar-Link `}
            >
              home
            </Link>
          </li>
          <li>
            <Link
              href={"/about"}
              className={`${
                pathName === "/about"
                  ? " text-white "
                  : " text-navLinkTxtColor "
              } Navbar-Link `}
            >
              about us
            </Link>
          </li>
          <li>
            <Link
              href={"/features"}
              className={`${
                pathName === "/features"
                  ? " text-white "
                  : " text-navLinkTxtColor "
              } Navbar-Link `}
            >
              features
            </Link>
          </li>
          <li>
            <Link
              href={"/pricing"}
              className={`${
                pathName === "/pricing"
                  ? " text-white "
                  : " text-navLinkTxtColor "
              } Navbar-Link `}
            >
              pricing
            </Link>
          </li>
          <li>
            <Link
              href={"/portfolio"}
              className={`${
                pathName === "/portfolio"
                  ? " text-white "
                  : " text-navLinkTxtColor "
              } Navbar-Link `}
            >
              portfolio
            </Link>
          </li>

          <li>
            <Link
              href={"/blog"}
              className={`${
                pathName === "/blog" ? " text-white " : " text-navLinkTxtColor "
              } Navbar-Link `}
            >
              blog
            </Link>
          </li>
          <li>
            <Link
              href={"/privacy"}
              className={`${
                pathName === "/privacy"
                  ? " text-white "
                  : " text-navLinkTxtColor "
              } Navbar-Link `}
            >
              privacy policy
            </Link>
          </li>
        </ul>
        <Button className=" NavBtn" text={"contact us"} onclick={handleclick} />
      </div>
    </nav>
  );
};

export default Navbar;

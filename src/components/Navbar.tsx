import Link from "next/link";
import React, { useEffect, useState } from "react";
import BrandIco from "./icons/BrandIco";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import useWindowSize from "@/hooks/useWindowSize";

const navData = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "About US",
    link: "/",
  },
  {
    label: "Services",
    link: "/",
  },
  {
    label: "Portfolio",
    link: "/",
  },
  {
    label: "Contact Us",
    link: "/",
  },
  {
    label: "Support",
    link: "/",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width < 768) {
      setIsOpen(false);
    }
  }, [windowSize.width]);
  return (
    <>
      {/* ----------- Desktop Navbar ----------- */}
      <nav className="fixed top-0 left-0 w-full hidden md:flex justify-center items-center py-10">
        <ul className="nav_items_grp">
          {navData.slice(0, Math.ceil(navData.length / 2)).map((item, i) => {
            return (
              <li key={i}>
                <Link href="/" passHref>
                  <a>{item.label}</a>
                </Link>
              </li>
            );
          })}
        </ul>
        <Link href="/" passHref>
          <a className="px-10 lg:px-20">
            <BrandIco />
          </a>
        </Link>
        <ul className="nav_items_grp">
          {navData.slice(Math.ceil(navData.length / 2)).map((item, i) => {
            return (
              <Link href="/" key={i} passHref>
                <a>{item.label}</a>
              </Link>
            );
          })}
        </ul>
      </nav>

      {/* ----------- Mobile Navbar ----------- */}
      <nav className="fixed top-0 left-0 w-full flex justify-between md:hidden py-5 px-4 transform duration-300">
        <Link href="/" passHref>
          <a className="">
            <BrandIco size={"40"} />
          </a>
        </Link>
        <button onClick={() => setIsOpen(!isOpen)}>
          <IoMenu size={40} />
        </button>

        <div
          className={`w-80 top-20 left-0 h-screen ${
            isOpen
              ? "absolute translate-x-0"
              : "absolute left-0 -translate-x-80"
          } px-10 pt-16 transform duration-300 bg-secondary/10 z-20`}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-5 top-5"
          >
            <IoMdClose size={20} />
          </button>
          <ul className="grid gap-3">
            {navData.map((item, i) => {
              return (
                <li key={i}>
                  <Link href="/" passHref>
                    <a className="font-semibold">{item.label}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

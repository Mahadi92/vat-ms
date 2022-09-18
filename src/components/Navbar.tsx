import Link from "next/link";
import React, { useEffect, useState } from "react";
import BrandIco from "./icons/BrandIco";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import useWindowSize from "@/hooks/useWindowSize";
import { useRouter } from "next/router";

const navData = [
  {
    label: "Dashboard",
    link: "/",
  },
  {
    label: "Create",
    link: "/create",
  },
  {
    label: "Posts List",
    link: "/list",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const windowSize = useWindowSize();
  const router = useRouter();

  useEffect(() => {
    if (windowSize.width < 768) {
      setIsOpen(false);
    }
  }, [windowSize.width]);
  return (
    <>
      {/* ----------- Desktop Navbar ----------- */}
      <nav className="sticky top-0 left-0 border-b-2 border-primary bg-white z-50">
        <div className="wrapper w-full hidden md:flex justify-start items-center px-5 py-5">
          <ul className="nav_items_grp">
            {navData.map((item, i) => {
              return (
                <li key={i}>
                  <Link href={item.link} passHref>
                    <a
                      className={`${
                        router.pathname === item.link && "text-primary"
                      }`}
                    >
                      {item.label}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
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

"use client";

import { useState } from "react";
import { close, logo, menu } from "@/public/assets";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image src={logo} alt="Vidya Naik Wellness" width={150} height={40} className="object-contain" />
      </Link>

      {/* Desktop Navigation */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white hover:text-secondary transition-colors ${
              index === navLinks.length - 1 ? "mr-0" : "mr-8"
            }`}
          >
            <Link href={nav.path || "#"}>{nav.title}</Link>
          </li>
        ))}
        <li className="ml-6">
          <Link href="/contact">
            <button className="py-2 px-6 bg-secondary font-poppins font-medium text-[14px] text-primary rounded-[8px] hover:opacity-90 transition-all">
              Book Call
            </button>
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image
          src={toggle ? close : menu}
          alt="menu"
          className="object-contain"
          width={28}
          height={28}
          onClick={() => setToggle((prev) => !prev)}
        />

        {/* Mobile Dropdown */}
        <div
          className={`${toggle ? "flex" : "hidden"}
            p-6 bg-black-gradient absolute top-20 ring-0 mx-4 my-2 min-w-[180px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white hover:text-secondary transition-colors ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                }`}
              >
                <Link href={nav.path || "#"} onClick={() => setToggle(false)}>
                  {nav.title}
                </Link>
              </li>
            ))}
            <li className="mt-4 w-full">
              <Link href="/contact" onClick={() => setToggle(false)}>
                <button className="w-full py-3 px-6 bg-secondary font-poppins font-medium text-[14px] text-primary rounded-[8px]">
                  Book Call
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

"use client"
import React, { useState } from "react";
import Image from "next/image";
import SearchBox from "./search-box";
import { NavbarButtons } from "./navbar-buttons";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3">
        <Link href="/">
          <div className="flex items-center">
            <p className="text-white text-2xl sm:text-3xl">LU</p>
            <Image
              src="/lu_crawler.svg"
              alt="Crawler"
              width={60}
              height={37}
              priority
            />
          </div>
        </Link>


        {/* Menu Items - Hidden on Mobile */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } sm:flex sm:flex-row text-white space-x-4`}
        >
          <li className="cursor-pointer" onClick={toggleMenu}>
            Question Papers
          </li>
          <li className="cursor-pointer" onClick={toggleMenu}>
            Notes
          </li>
          <li className="cursor-pointer" onClick={toggleMenu}>
            Forms
          </li>
          <li className="cursor-pointer" onClick={toggleMenu}>
            News
          </li>
        </ul>

        {/* Search Box - Always Shown */}
        <div className="flex-1 sm:flex-none">
          <SearchBox />
        </div>

        {/* Navbar Buttons - Hidden on Mobile */}
        <div className="hidden sm:block">
          <NavbarButtons />
        </div>
      </div>
    </div>
  );
}

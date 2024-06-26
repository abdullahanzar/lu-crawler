"use client"
import React, { useState } from "react";
import Image from "next/image";
import SearchBox from "./search-box";
import { NavbarButtons } from "./navbar-buttons";
import Link from "next/link";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MobileHamburger from "./mobile-hamburger";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="h-14 bg-black flex items-center justify-between">
      <Link href="/">
        <div className="flex flex-row items-center">
          <p className="text-white text-2xl sm:pl-8 pl-4">LU</p>
          <Image
            src="/lu_crawler.svg"
            alt="Crawler"
            width={60}
            height={37}
            priority
          />
        </div>
      </Link>
      <ul className="hidden sm:flex flex-row text-white">
        <Link href={"/question-papers"}>
          <li className="pl-8 cursor-pointer">Question Papers</li>
        </Link>
        <Link href={"/midsem-papers"}>
          <li className="pl-8 cursor-pointer">Midsem Papers</li>
        </Link>
        <Link href={"/notes"}>
          <li className="pl-8 cursor-pointer">Notes</li>
        </Link>
        <Link href={"/forms"}>
          <li className="pl-8 cursor-pointer">Forms</li>
        </Link>
        <Link href={"/news"}>
          <li className="pl-8 cursor-pointer">News</li>
        </Link>
      </ul>
      {/*<SearchBox />*/}
      <NavbarButtons />
      <MobileHamburger />
    </div>
  );
}

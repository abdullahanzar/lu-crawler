import React from "react";
import Image from "next/image";
import SearchBox from "./search-box";
import { NavbarButtons } from "./navbar-buttons";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className=" max-w-full h-14 bg-black flex items-center justify-between">
      <Link href="/">
        <div className="flex flex-row items-center">
          <p className="text-white text-2xl pl-8">LU</p>
          <Image
            src="/lu_crawler.svg"
            alt="Crawler"
            width={60}
            height={37}
            priority
          />
        </div>
      </Link>
      <ul className="flex flex-row text-white">
        <li className="pl-8 cursor-pointer">Question Papers</li>
        <li className="pl-8 cursor-pointer">Notes</li>
        <li className="pl-8 cursor-pointer">Forms</li>
        <li className="pl-8 cursor-pointer">News</li>
      </ul>
      <SearchBox />
      <NavbarButtons />
    </div>
  );
}

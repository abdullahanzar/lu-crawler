import { Tooltip } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="bg-[#000] text-white px-7 sm:px-8 pt-4 pb-4">
      <div className="mx-auto">
        <Link href="/">
          <div className="flex flex-row items-center">
            <p className="text-white text-2xl">LU</p>
            <Image
              src="/lu_crawler.svg"
              alt="Crawler"
              width={60}
              height={37}
              priority
            />
          </div>
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Your content goes here */}
          <div className=" pt-4 pb-4 col-span-1 sm:col-span-2 lg:col-span-1 ">
            <p className="pb-5 text-base text-[#fff] font-normal max-w-[260px]">
              Nawabi Knights Private Club, FoET, University of Lucknow
            </p>
          </div>
          <div className="pt-4 pb-4">
            <p className="text-[#767676] pb-5 font-semibold text-base">
              Quick Links
            </p>
            <div className="grid grid-cols-2">
              <div>
                <ul className="space-y-3 text-base text-[#fff] font-normal font-['Inter']">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/question-papers">Question Papers</Link>
                  </li>
                  <li>
                    <Link href="/notes">Notes</Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3 text-base text-[#fff] font-normal font-['Inter']">
                  <li>
                    <Link href="/forms">Forms</Link>
                  </li>
                  <li>
                    <Link href="/news">News</Link>
                  </li>
                  <li>
                    <Link href="/contribute">Contribute</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-4 pb-4">
            <p className="text-[#767676] pb-5 font-semibold text-base pr-16">
              Subscribe to our newsletter to get latest news across the old and
              the new campus.
            </p>
            <Tooltip title="Press enter to submit">
              <input
                type="text"
                className="p-3 min-w-72 text-black rounded-2xl"
                placeholder="lucrawler@gmail.com"
              />
            </Tooltip>
          </div>
          <div className="pt-4 pb-4">
            <p className="text-[#767676] pb-5 font-semibold text-base">
              Supports
            </p>
            <div className="grid grid-cols-2">
              <div>
                <ul className="space-y-3 text-base text-[#fff] font-normal font-['Inter']">
                  <li>
                    <Link href="/my-account">Your Account</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/faq">FAQ</Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3 text-base text-[#fff] font-normal font-['Inter']">
                  <li>
                    <Link href="/contribute">Contribute</Link>
                  </li>
                  <li>
                    <Link href="/develop">Develop</Link>
                  </li>
                  <li>
                    <Link href="/about-us">About Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Add more columns as needed */}
        </div>
        <p className=" text-[#fff]">
          © {currentYear} LU Crawler. All rights reserved.
        </p>
      </div>
    </section>
  );
}

export default Footer;

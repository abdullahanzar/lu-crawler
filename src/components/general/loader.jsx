import Image from "next/image";
import React from "react";
import "./loader.css";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

export default function Loader() {
  const words = [
    {
      text: "Crawling",
    },
    {
      text: "the",
    },
    {
      text: "results.",
      className: "text-[#ab9898]",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <Image
        src="/crawler_black.svg"
        alt="Crawler"
        className="relative bottom-10 fade-in-out"
        width={60}
        height={37}
        priority
      />
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}

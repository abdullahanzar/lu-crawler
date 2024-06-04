import Image from "next/image";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import Search from "./search";

export default function EyeCatcher() {
  const words = [
    {
      text: " Your",
    },
    {
      text: "one",
    },
    {
      text: "time",
    },
    {
      text: "stop",
    },
    {
      text: "for",
    },
    {
      text: "all",
    },
    {
      text: "your",
    },
    {
      text: "exam",
    },
    {
      text: "needs.",
      className: "text-[#ab9898]",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      {
        <Image
          src="/crawler_black.svg"
          alt="Crawler"
          className=" sm:hidden relative bottom-5"
          width={60}
          height={37}
          priority
        />
      }
      <p className="text-neutral-600 text-xl sm:text-3xl  mb-0 sm:mb-3">
        Welcome to LU Crawler
      </p>
      <TypewriterEffectSmooth words={words} />
      <Search />
    </div>
  );
}

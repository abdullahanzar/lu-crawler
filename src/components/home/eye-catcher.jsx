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
      className: "text-[#ab9898] dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      {/*<Image
        src="/crawler_black.svg"
        alt="Crawler"
        className="relative bottom-10"
        width={60}
        height={37}
        priority
  />*/}
      <p className="text-neutral-600 dark:text-neutral-200 text-3xl  mb-5">
        Welcome to LU Crawler
      </p>
      <TypewriterEffectSmooth words={words} />
      <Search />
    </div>
  );
}

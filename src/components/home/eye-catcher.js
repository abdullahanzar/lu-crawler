import Image from "next/image";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

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
      <PlaceholdersAndVanishInput
        placeholders={[
          "BCA LU Question Papers",
          "BCA LU Midsem Papers",
          "B.Tech LU Question Papers",
          "Midsem LU Notes",
          "B.Com Question Papers",
          "Engineering Mathematics - 1 Question Papers",
          "Professional Communication Notes",
          "MCA LU Question Papers",
          "BCA LU Semester 3 Notes",
          "Engineering Mathematics - 2 Question Papers",
          "Business Economics Notes and Question Papers",
          "You search it, we find it.",
        ]}
      />
    </div>
  );
}

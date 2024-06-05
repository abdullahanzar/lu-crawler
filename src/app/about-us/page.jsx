import EyeCatcher from "@/components/home/eye-catcher";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us - LU Crawler",
  description:
    "Learn more about LU Crawler, our mission, and the team behind the platform.",
  keywords: "about us, LU Crawler, mission, team",
  canonical: "https://lucrawler.in/about-us",
};

export default function AboutUs() {
  const words = [
    {
      text: "We",
    },
    {
      text: "are",
    },
    {
      text: "the",
    },
    {
      text: "Nawabi",
    },
    {
      text: "Knights",
    },
    {
      text: "Private",
    },
    {
      text: "Club",
    },
    {
      text: "of",
    },
    {
      text: "LU.",
      className: "text-[#ab9898]",
    },
  ];
  const description =
    "We were originally the BCA students from the year 2021. Then we became friends and in our final year, we got together to develop this site. We used to face trouble collecting question papers for our studies. So we created this site where people can contribute their question papers and other study resources to share with all. Our journey doesn't stop here. We have made the source code for this site as open source. Future students can make this site as they want it to be. We will still own the domain and provide support such that our basic mission of sharing files across Lucknow University is acheived.";
  return (
    <main>
      <div className="flex flex-col items-center justify-center h-min sm:h-[40rem]">
        <p className="text-neutral-600 text-3xl mt-5 sm:mt-0 sm:text-3xl mb-3 sm:mb-5">
          About Us
        </p>
        <div className="w-full sm:hidden">
          <TypewriterEffectSmooth words={words} />
        </div>
        <TypewriterEffectSmooth words={words} className="hidden sm:flex" />
        <TextGenerateEffect
          words={description}
          className="font-extralight sm:p-12 p-12 pt-0"
        />
      </div>
    </main>
  );
}

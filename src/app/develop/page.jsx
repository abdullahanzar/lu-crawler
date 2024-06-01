import GithubLink from "@/components/extras/github-button";
import EyeCatcher from "@/components/home/eye-catcher";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  const words = [
    {
      text: "Wanna",
    },
    {
      text: "contribute",
    },
    {
      text: "to",
    },
    {
      text: "LU",
    },
    {
      text: "Crawler's",
    },
    {
      text: "open",
    },
    {
      text: "source",
    },
    {
      text: "development",
      className: "text-[#ab9898] dark:text-blue-500",
    },
    {
      text: "?",
    },
  ];
  const description =
    "You can contribute in our open source development. We are a community together. With you, we can add more features to this site. Visit the provided GitHub link to access our repository. You can create your own fork, develop your features as you see fit, and make a pull request whenever you are ready. Just make sure to communicate to us your features, and as long as they don't affect our previous functionalities, we will surely merge your branch with the main. Technologies powering LU Crawler include Next JS with App Router, Supabase and Cloudinary for cloud storage.";
  return (
    <main>
      <div className="flex flex-col items-center justify-center h-[40rem] ">
        <p className="text-neutral-600 dark:text-neutral-200 text-3xl  mb-5">
          Develop with Us
        </p>
        <TypewriterEffectSmooth words={words} />
        <TextGenerateEffect
          words={description}
          className="font-extralight p-12"
        />
        <GithubLink />
      </div>
    </main>
  );
}

import EyeCatcher from "@/components/home/eye-catcher";
import Image from "next/image";

export const metadata = {
  title: "LU Crawler - Share Question Papers and Notes",
  description:
    "LU Crawler is a platform to share and access question papers, notes, and other resources for students.",
  keywords:
    "LU Crawler, question papers, notes, student resources, educational resources",
  canonical: "https://lucrawler.in",
};

export default function Home() {
  return (
    <main>
      <EyeCatcher />
    </main>
  );
}

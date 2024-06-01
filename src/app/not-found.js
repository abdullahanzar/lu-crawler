import EyeCatcher from "@/components/home/eye-catcher";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center h-[40rem] ">
        <Image
          src="/crawler_black.svg"
          alt="Crawler"
          className="relative bottom-10"
          width={60}
          height={37}
          priority
        />
        <p>
          Oops. Crawler couldn&apos;t crawl this page. Wanna go to{" "}
          <Link href="/">home?</Link>
        </p>
      </div>
    </main>
  );
}

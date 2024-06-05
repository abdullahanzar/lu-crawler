import MidsemPapersClient from "@/components/app-client-components/midsem-papers-client";

export const metadata = {
  title: "Midsem Papers - LU Crawler",
  description:
    "Access mid-semester papers for various subjects and courses on LU Crawler.",
  keywords: "midsem papers, mid-semester exams, LU Crawler, study materials",
  canonical: "https://lucrawler.in/midsem-papers",
};

export default function Notes() {
  return (
    <main className="min-h-screen">
      <MidsemPapersClient />
    </main>
  );
}

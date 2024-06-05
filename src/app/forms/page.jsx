import FormsClient from "@/components/app-client-components/forms-client";
export const metadata = {
  title: "Forms - LU Crawler",
  description:
    "Find various forms required for academic purposes on LU Crawler.",
  keywords: "academic forms, LU Crawler, student forms, educational resources",
  canonical: "https://lucrawler.in/forms",
};

export default function QuestionPaper() {
  return (
    <main className="min-h-screen">
      <FormsClient />
    </main>
  );
}

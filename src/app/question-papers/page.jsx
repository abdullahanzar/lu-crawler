import QuestionPaperClient from "@/components/app-client-components/question-paper-client";

export const metadata = {
  title: "Question Papers - LU Crawler",
  description:
    "Access a wide range of question papers for various subjects and courses on LU Crawler.",
  keywords:
    "question papers, past exams, LU Crawler, study materials, educational resources",
  canonical: "https://lucrawler.in/question-papers",
};

export default function QuestionPaper() {
  return (
    <main className="min-h-screen">
      <QuestionPaperClient />
    </main>
  );
}

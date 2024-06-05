import NotesClient from "@/components/app-client-components/notes-client";

export const metadata = {
  title: "Notes - LU Crawler",
  description:
    "Find and share study notes for different subjects and courses on LU Crawler.",
  keywords: "study notes, LU Crawler, educational resources, course materials",
  canonical: "https://lucrawler.in/notes",
};

export default function Notes() {
  return (
    <main className="min-h-screen">
      <NotesClient />
    </main>
  );
}

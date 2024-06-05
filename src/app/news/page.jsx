import NewsClient from "@/components/app-client-components/news-client";

export const metadata = {
  title: "News - LU Crawler",
  description:
    "Stay updated with the latest news and announcements from LU Crawler.",
  keywords: "news, announcements, LU Crawler, updates",
  canonical: "https://lucrawler.in/news",
};

export default function Notes() {
  return (
    <main className="min-h-screen">
      <NewsClient />
    </main>
  );
}

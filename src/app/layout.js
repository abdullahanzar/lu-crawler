import { Playfair_Display } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata = {
  title: "LU Crawler",
  description: "Your one time stop to get all your exam needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${playfair.className} overflow-auto`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Navbar />
            <Suspense fallback={<>Crawling</>}>{children}</Suspense>
            <Footer />
            <Toaster
              position="top-center"
              containerStyle={{
                fontFamily: "cursive",
              }}
            />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

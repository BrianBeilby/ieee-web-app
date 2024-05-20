import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FooterComponent from "@/components/FooterComponent";
import { ThemeModeScript } from "flowbite-react";
import NextTopLoader from "nextjs-toploader";
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IEEE at Sacramento State",
  description: "The IEEE Electrical Engineering Club has been a vibrant hub for students passionate about electrical engineering and related topics. This chapter serves as a hub for students to network and study."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <html lang="en">
        <head>
          <ThemeModeScript />
        </head>
        <body className={`${inter.className} flex flex-col min-h-screen`}>
          <NextTopLoader speed={400} crawlSpeed={600} />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <SpeedInsights />
          <FooterComponent />
        </body>
      </html>
    </>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Job Center - Your Dream Job Awaits",
  description:
    "Job Center helps you find the best job opportunities in your desired field. Search for jobs, apply online, and get hired today!",
  keywords:
    "jobs, job search, careers, employment, job portal, job finder, hiring, recruitment",
  authors: [{ name: "Pravakar Adhikari" }],

  openGraph: {
    title: "Job Center - Your Dream Job Awaits",
    description:
      "Job Center helps you find the best job opportunities in your desired field. Search for jobs, apply online, and get hired today!",
    type: "website",
    url: "https://www.jobcenter.com",
    images: [
      {
        url: "",
        alt: "Job Center Logo",
      },
    ],
    siteName: "Job Center",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Job Center - Your Dream Job Awaits",
    description:
      "Job Center helps you find the best job opportunities in your desired field. Search for jobs, apply online, and get hired today!",
    images: [
      {
        url: "",
        alt: "Job Center Logo",
      },
    ],
    site: "@JobCenter",
    creator: "@JobCenterTeam",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Header />
        {children}

        <footer className="container  py-8 text-gray-500">
          Job Center &copy; 2024 - All rights reserved
        </footer>
      </body>
    </html>
  );
}

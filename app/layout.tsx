import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Import only Geist and Geist_Mono
import { Poppins } from "next/font/google"; // Import Poppins without variable
import Loader from "@/component/common/loader/loader";
import { Suspense } from "react"; // Import Suspense
import "./globals.scss";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/parallax';
import CustomNavbar from "@/component/common/navbar/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Specify the weights you want to use
});

export const metadata: Metadata = {
  title: "Kay Pee",
  description: "Kay Pee",
  icons: "./images/common/navbar/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.className}`}
      >
        <CustomNavbar></CustomNavbar>
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </body>
    </html>
  );
}

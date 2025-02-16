import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Import only Geist and Geist_Mono
import { Poppins } from "next/font/google"; // Import Poppins without variable
import "./globals.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/parallax';

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
  title: "Home Page SEO",
  description: "Home Page Description SEO",
  keywords:
    "Home SEO Agenhttps://www.pexels.com/photo/woman-stands-by-serene-glacier-lake-in-winter-30180208/cy, Home SEO friendly, NextJS, ReactJS",
  openGraph: {
    title: "Home Page SEO Share",
    description: "Home Page Description SEO share",
    images: [
      "https://www.pexels.com/photo/woman-stands-by-serene-glacier-lake-in-winter-30180208/",
    ],
    url: "https://www.facebook.com/",
  },
  twitter: {
    title: "Twitter: Home Page SEO",
    description: "Twitter: Home Page Description SEO",
    images: [
      "https://www.pexels.com/photo/woman-stands-by-serene-glacier-lake-in-winter-30180208/",
    ],
    card: "summary_large_image",
    creator: "Prakhar Jain",
  },
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
        {children}
      </body>
    </html>
  );
}

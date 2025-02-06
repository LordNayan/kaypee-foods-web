import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Contact: CoCo cookies",
    description: "Contact description",
    keywords: "Contact SEO Agency, Contact SEO friendly, NextJS, ReactJS",
    openGraph: {
        title: "Contact Page SEO Share",
        description: "Contact Page Description SEO share",
      }
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
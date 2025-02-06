import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Distributors: CoCo cookies",
    description: "Distributors description",
    keywords: "Distributors SEO Agency, Distributors SEO friendly, NextJS, ReactJS",
    openGraph: {
        title: "Distributors Page SEO Share",
        description: "Distributors Page Description SEO share",
      }
}

export default function DistributorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
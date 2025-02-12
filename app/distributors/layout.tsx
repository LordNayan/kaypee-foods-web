import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Distributors: CoCo cookies",
  description: "Distributors description",
  keywords: ["Distributors SEO Agency", "Distributors SEO friendly", "NextJS", "ReactJS"],
  openGraph: {
    title: "Distributors Page SEO Share",
    description: "Distributors Page Description SEO share",
  },
};

interface DistributorsLayoutProps {
  children: ReactNode;
}

export default function DistributorsLayout({ children }: DistributorsLayoutProps) {
  return <div>{children}</div>;
}

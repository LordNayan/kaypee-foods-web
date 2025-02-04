import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "About: CoCo cookies",
    description: "About description",
    keywords: "About SEO Agency, About SEO friendly, NextJS, ReactJS",
    openGraph: {
        title: "About Page SEO Share",
        description: "About Page Description SEO share",
      }
}

export default function AboutLayout({children}: any) {
    return (
        <div>{children}</div>
    )
}
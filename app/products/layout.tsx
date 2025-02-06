import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Product: CoCo cookies",
    description: "Product description",
    keywords: "Product SEO Agency, Product SEO friendly, NextJS, ReactJS",
    openGraph: {
        title: "Product Page SEO Share",
        description: "Product Page Description SEO share",
      }
}

export default function ProductLayout({children}: any) {
    return (
        <div>{children}</div>
    )
}
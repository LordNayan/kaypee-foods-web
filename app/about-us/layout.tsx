import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "About Us | Kay Pee",
    description: "About Us | Kay Pee"
}

export default function AboutLayout({children}: any) {
    return (
        <div>{children}</div>
    )
}
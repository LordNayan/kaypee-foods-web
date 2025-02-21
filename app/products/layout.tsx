import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Product | Kay Pee",
    description: "Product | Kay Pee"
}

export default function ProductLayout({children}: any) {
    return (
        <div>{children}</div>
    )
}
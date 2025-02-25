import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Distributors | Kay Pee",
    description: "Distributors | Kay Pee",
}

export default function DistributorsLayout({children}: any) {
    return (
        <div>{children}</div>
    )
}
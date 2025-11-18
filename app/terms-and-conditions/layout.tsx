import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Terms & Conditions | Kay Pee",
    description: "Terms & Conditions | Kay Pee"
}

export default function TermsAndConditionsLayout({children}: any) {
    return (
        <div>{children}</div>
    )
}

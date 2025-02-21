import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Contact | Kay Pee",
    description: "Contact | Kay Pee",
}

export default function ContactLayout({children}: any) {
    return (
        <div>{children}</div>
    )
}
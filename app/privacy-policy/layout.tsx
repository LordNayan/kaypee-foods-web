import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Privacy Policy | Kay Pee",
    description: "Privacy Policy | Kay Pee"
}

export default function PrivacyPolicyLayout({children}: any) {
    return (
        <div>{children}</div>
    )
}

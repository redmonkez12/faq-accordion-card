"use client";
import { Kumbh_Sans } from 'next/font/google'
import { Card, FaqItem } from "@/components/card";
import { useState } from "react";

const kumbhSans = Kumbh_Sans({ subsets: ['latin'] })

const items: FaqItem[] = [
    {
        id: 1,
        text: "How many team members can I invite?",
        description: "No more than 2GB. All files in your account must fit your allotted storage space.",
        active: false,
    },
    {
        id: 2,
        text: "What is the maximum file upload size?",
        description: "No more than 2GB. All files in your account must fit your allotted storage space.",
        active: false,
    },
    {
        id: 3,
        text: "How do I reset my password?",
        description: "No more than 2GB. All files in your account must fit your allotted storage space.",
        active: false,
    },
    {
        id: 4,
        text: "Can I cancel my subscription?",
        description: "No more than 2GB. All files in your account must fit your allotted storage space.",
        active: false,
    },
    {
        id: 5,
        text: "Do you provide additional support?",
        description: "No more than 2GB. All files in your account must fit your allotted storage space.",
        active: false,
    },
];

export default function Home() {
    const [faqs, setFaqs] = useState(items);

    function onClick(id: number) {
        const newFaqs = faqs.map((faq) => {
            return {
                ...faq,
                active: faq.id === id ? !faq.active : false,
            };
        });

        setFaqs(newFaqs);
    }

    return (
        <main className={`${kumbhSans.className} w-full h-screen grid place-items-center`}>
            <Card items={faqs} handleClick={onClick}/>
        </main>
    )
}

import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    metadataBase: process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : null,
    title: {
        template: `%s | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
        absolute: `${process.env.NEXT_PUBLIC_SITE_NAME} - Seduh kopi setiap hari!`
    },
    description: 'Mari kita teroka biji kopi yang pelbagai dari seluruh pelusuk dunia.',
    keywords: [
        "kopi", "kopi tapis", "v60", "filter coffee", "coffee"
    ],
    openGraph: {
        title: `${process.env.NEXT_PUBLIC_SITE_NAME} - Seduh kopi setiap hari!`,
        siteName: `${process.env.NEXT_PUBLIC_SITE_NAME}`,
        url: process.env.NEXT_PUBLIC_SITE_URL,
        description: 'Mari kita teroka biji kopi yang pelbagai dari seluruh pelusuk dunia.',
        locale: 'ms_MY',
        type: 'website'
    },
    twitter: {
        site: process.env.NEXT_PUBLIC_SITE_NAME,
        creator: process.env.NEXT_PUBLIC_TWITTER_CREATOR,
        title: `${process.env.NEXT_PUBLIC_SITE_NAME} - Seduh kopi setiap hari!`,
        description: 'Mari kita teroka biji kopi yang pelbagai dari seluruh pelusuk dunia.',
    },
    robots: {
        index: true,
        follow: true
    }
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>{children}</body>
        </html>
    );
}

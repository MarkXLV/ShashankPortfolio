import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shashank Tiwari - AI Engineer",
  description:
    "Software engineer building backend platforms and distributed services in Python and Java. Shipped production systems handling 10,000+ requests/day on Kubernetes for enterprise workflows.",
  keywords: [
    "Software Engineer",
    "Backend Systems",
    "Distributed Systems",
    "Microservices",
    "Agent Systems",
    "MCP",
    "Python",
    "Java",
    "FastAPI",
    "Kubernetes",
  ],
  authors: [{ name: "Shashank Tiwari" }],
  creator: "Shashank Tiwari",
  openGraph: {
    title: "Shashank Tiwari - Software Engineer",
    description:
      "Software engineer building backend platforms and distributed services in Python and Java. Shipped production systems serving high-volume enterprise workflows.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="pt-16 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

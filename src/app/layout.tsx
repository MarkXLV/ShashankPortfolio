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
    "AI Engineer specializing in RL infrastructure and LLM agent systems. Built production platforms serving Microsoft and Google. Experienced across the full post-training stack.",
  keywords: [
    "AI Engineer",
    "Reinforcement Learning",
    "LLM",
    "Agent Systems",
    "MCP",
    "Post-training",
    "Fine-tuning",
    "Python",
    "FastAPI",
    "Kubernetes",
  ],
  authors: [{ name: "Shashank Tiwari" }],
  creator: "Shashank Tiwari",
  openGraph: {
    title: "Shashank Tiwari - AI Engineer",
    description:
      "AI Engineer specializing in RL infrastructure and LLM agent systems. Built production platforms serving Microsoft and Google.",
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

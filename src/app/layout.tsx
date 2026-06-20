import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MatrixRain from "@/components/MatrixRain";
import CustomCursor from "@/components/CustomCursor";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shashank Tiwari - AI Engineer",
  description:
    "AI Engineer specializing in RL infrastructure and LLM agent systems. Built production platforms serving Microsoft and Google.",
  keywords: [
    "AI Engineer",
    "RL Infrastructure",
    "LLM Agents",
    "Distributed Systems",
    "MCP",
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
      <body className={`${geistMono.variable} antialiased`}>
        <MatrixRain />
        <CustomCursor />
        <Header />
        <main className="relative z-10 pt-14 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

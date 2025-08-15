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
  title: "Shashank Tiwari - Software Engineer",
  description: "Results-driven Software Engineer with 1.5 years of experience building high-performance backend systems and MLOps pipelines. Specialized in Java, Python, Spring Boot, FastAPI, AWS, Docker, and Kubernetes.",
  keywords: ["Software Engineer", "Backend Development", "MLOps", "Java", "Python", "Spring Boot", "FastAPI", "AWS", "Docker", "Kubernetes"],
  authors: [{ name: "Shashank Tiwari" }],
  creator: "Shashank Tiwari",
  openGraph: {
    title: "Shashank Tiwari - Software Engineer",
    description: "Results-driven Software Engineer with 1.5 years of experience building high-performance backend systems and MLOps pipelines.",
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
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

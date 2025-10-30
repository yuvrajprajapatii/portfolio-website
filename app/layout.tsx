import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageTransition } from "@/components/animations/PageTransition";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-nunito",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-nunito-sans",
});

export const metadata: Metadata = {
  title: "Yuvraj Prajapati | AI Researcher & Developer",
  description:
    "Personal portfolio of Yuvraj Prajapati showcasing AI research, quantum computing projects, and technical experiments.",
  keywords: [
    "Yuvraj Prajapati",
    "AI Research",
    "Quantum Computing",
    "Portfolio",
    "Developer",
  ],
  authors: [{ name: "Yuvraj Prajapati" }],
  openGraph: {
    title: "Yuvraj Prajapati | AI Researcher & Developer",
    description:
      "Explore my work in AI, Quantum Computing, and innovative technical projects.",
    url: "https://yuvrajprajapati.com",
    siteName: "Yuvraj Prajapati",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuvraj Prajapati | AI Researcher & Developer",
    description: "AI Research, Quantum Computing & Technical Innovation",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${nunito.variable} ${nunitoSans.variable}`}>
      <body className="min-h-screen transition-colors duration-300">
        <ThemeProvider>
          <Header />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

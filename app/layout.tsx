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
  icons: {
    // Standard favicon for browsers (ICO primary, PNG fallbacks for sizes)
    icon: [
      "/favicon.ico",
      "/favicon-16x16.png",
      "/favicon-32x32.png",
      // Android Chrome icons (splash screen and high-res) - moved here as Icon objects
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    // Apple Touch Icon for iOS/macOS
    apple: "/apple-touch-icon.png",
    // Web App Manifest for PWA support
    other: {
      rel: "manifest",
      url: "/site.webmanifest",
    },
  },
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
      {/* Suppress hydration warnings on <body> due to browser extensions (e.g., Bitwarden) injecting attributes */}
      <body
        suppressHydrationWarning
        className="min-h-screen transition-colors duration-300"
      >
        <ThemeProvider>
          <Header />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
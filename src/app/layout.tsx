import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CoreHub AI - AI Tools Directory",
  description: "Discover the best AI tools and platforms. CoreHub AI is your comprehensive directory for artificial intelligence solutions across all categories.",
  keywords: ["CoreHub AI", "AI tools", "artificial intelligence", "AI directory", "machine learning", "AI platforms"],
  authors: [{ name: "CoreHub AI Team" }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
    apple: [
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ]
  },
  openGraph: {
    title: "CoreHub AI - AI Tools Directory",
    description: "Discover the best AI tools and platforms in one comprehensive directory",
    url: "https://corehub-ai.com",
    siteName: "CoreHub AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CoreHub AI - AI Tools Directory",
    description: "Discover the best AI tools and platforms in one comprehensive directory",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

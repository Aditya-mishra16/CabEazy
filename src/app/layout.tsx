import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileFloatingBar from "@/components/layout/MobileFloatingBar";
import ScrollProgressCar from "@/components/interactive/ScrollProgressCar";
import JsonLd from "@/components/seo/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#F15533",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "CabEazy — Reliable Vehicle Booking & Driver Assignment Services",
    template: "%s | CabEazy",
  },
  description:
    "Book a vehicle for your journey with CabEazy. Tell us where you need to go, and we will assign an experienced, verified driver to take you to your destination. Hatchbacks, Sedans, SUVs, and Premium vehicles. Available 24/7. Call or WhatsApp +91 9082251160.",
  keywords: [
    "CabEazy",
    "Vehicle Booking",
    "Cab Booking",
    "Outstation Cab Booking",
    "Chauffeur Driven Cars",
    "Driver Assigned Cabs",
    "Intercity Vehicle Hire",
    "Airport Taxi Transfer",
    "Sedan Rental",
    "SUV Cab Booking",
    "Reliable Car Booking",
  ],
  authors: [{ name: "CabEazy Travel" }],
  creator: "CabEazy",
  publisher: "CabEazy",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: "CabEazy — Reliable Vehicle Booking & Driver Assignment Services",
    description:
      "Book a vehicle for your journey with CabEazy. We arrange your ride and assign an experienced, verified driver to take you safely to your destination. Available 24/7.",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/HeroSectionBgImage.jpg",
        width: 1200,
        height: 630,
        alt: "CabEazy Vehicle Booking Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CabEazy — Vehicle Booking & Driver Assignment",
    description:
      "Tell us your destination and CabEazy will assign a verified driver with a clean, comfortable vehicle for your trip. Available 24/7.",
    images: ["/images/HeroSectionBgImage.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans bg-white text-gray-900 pb-safe-nav md:pb-0 antialiased">
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileFloatingBar />
        <ScrollProgressCar />
      </body>
    </html>
  );
}

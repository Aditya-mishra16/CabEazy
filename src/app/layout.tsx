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
  metadataBase: new URL("https://www.cabeazy.in"),
  title: {
    default: "Cabeazy - Cab Booking Service",
    template: "%s | Cabeazy",
  },
  description:
    "Book reliable and affordable cabs with Cabeazy. Convenient cab booking for local, airport and outstation travel.",
  keywords: [
    "CabEazy",
    "Cab Booking",
    "Taxi Booking",
    "Outstation Cab Booking",
    "Outstation Taxi Booking",
    "Vehicle Booking",
    "Chauffeur Driven Cars",
    "Driver Assigned Cabs",
    "Intercity Vehicle Hire",
    "Airport Taxi Transfer",
    "Sedan Rental",
    "SUV Cab Booking",
    "Reliable Car Booking",
    "Cab Booking Online",
    "One Way Outstation Cab",
    "Car Hire With Driver",
    "Best Outstation Cab Service",
  ],
  authors: [{ name: "Cabeazy Travel" }],
  creator: "Cabeazy",
  publisher: "Cabeazy",
  alternates: {
    canonical: "https://www.cabeazy.in/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.cabeazy.in",
    title: "Cabeazy - Cab Booking Service",
    description:
      "Book reliable and affordable cabs with Cabeazy. Convenient cab booking for local, airport and outstation travel.",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/hero-highway.jpg",
        width: 1200,
        height: 630,
        alt: "Cabeazy Vehicle Booking Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cabeazy - Cab Booking Service",
    description:
      "Book reliable and affordable cabs with Cabeazy. Convenient cab booking for local, airport and outstation travel.",
    images: ["/images/hero-highway.jpg"],
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

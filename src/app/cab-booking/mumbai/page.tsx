import React from "react";
import type { Metadata } from "next";
import SEOLandingTemplate from "@/components/seo/SEOLandingTemplate";

export const metadata: Metadata = {
  title: "Cab Booking in Mumbai - Reliable Mumbai Taxi Service | Cabeazy",
  description: "Book a cab in Mumbai with Cabeazy. Convenient local, outstation, and airport cab booking services across Mumbai with verified drivers.",
  alternates: {
    canonical: "https://www.cabeazy.in/cab-booking/mumbai",
  },
};

const detailedContent = [
  "Navigating Mumbai's dense traffic and vast geography requires a dependable transit coordinator. Cabeazy's Mumbai cab booking service provides comfortable, air-conditioned transportation across Andheri, Powai, Bandra, Dadar, Borivali, Thane, Navi Mumbai, and surrounding municipal corridors.",
  "We arrange reliable airport taxi pickups and drops at Chhatrapati Shivaji Maharaj International Airport (BOM) Terminal 1 and Terminal 2, as well as terminal transfers at CST, Dadar, and Kurla LTT railway stations. Our local dispatch team coordinates driver arrival to prevent delays and missed flights.",
  "Whether you are planning a local business commute through BKC, a family shopping day, or an outstation weekend road trip to Lonavala, Pune, Alibaug, or Nashik, Cabeazy matches your requirements with qualified, background-verified drivers. Enjoy transparent billing and zero peak-hour surge charges."
];

const features = [
  { title: "Mumbai Wide Coverage", description: "doorstep pickups across Andheri, Powai, Borivali, Bandra, Dadar, Thane, and Navi Mumbai." },
  { title: "BOM Airport Transfers", description: "Punctual terminal drops and arrivals pickups at Domestic T1 and International T2." },
  { title: "Outstation Getaways", description: "Seamless highway bookings from Mumbai to Pune, Lonavala, Nashik, Shirdi, and Goa." },
  { title: "No Dynamic Surge", description: "Flat transparent rates with zero sudden price hikes during peak transit hours." }
];

const faqs = [
  { question: "Do you provide cab booking services in Navi Mumbai and Thane?", answer: "Yes, our operational network fully covers Thane, Navi Mumbai (Vashi, Belapur, Panvel), and all suburbs of Mumbai." },
  { question: "How are airport pickups coordinated at BOM Airport?", answer: "Once your booking is confirmed, we assign a driver and share their details. The driver coordinates with you via Phone or WhatsApp and meets you at the designated arrival exit point." },
  { question: "Can I book a cab from Mumbai to outstation destinations?", answer: "Yes, we arrange one-way drops and round-trip outstation cabs from Mumbai to Pune, Nashik, Shirdi, Mahabaleshwar, and other intercity locations." }
];

export default function MumbaiCabBookingPage() {
  return (
    <SEOLandingTemplate
      h1="Cab Booking in Mumbai"
      description="Book a cab in Mumbai with Cabeazy. Convenient local, outstation, and airport cab booking services across Mumbai with verified drivers."
      canonicalUrl="https://www.cabeazy.in/cab-booking/mumbai"
      breadcrumbItems={[
        { name: "Cab Booking", url: "/cab-booking" },
        { name: "Mumbai", url: "/cab-booking/mumbai" }
      ]}
      detailedContent={detailedContent}
      features={features}
      faqs={faqs}
    />
  );
}

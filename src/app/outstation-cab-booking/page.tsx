import React from "react";
import type { Metadata } from "next";
import SEOLandingTemplate from "@/components/seo/SEOLandingTemplate";

export const metadata: Metadata = {
  title: "Outstation Cab Booking - Intercity Outstation Cabs | Cabeazy",
  description: "Book outstation cabs with Cabeazy. Reliable one-way drops and round-trip intercity taxi services with experienced highway drivers.",
  alternates: {
    canonical: "https://www.cabeazy.in/outstation-cab-booking",
  },
};

const detailedContent = [
  "Traveling across cities by road should be an enjoyable and safe experience. Cabeazy's outstation cab booking service connects you with clean, air-conditioned commercial vehicles and seasoned highway chauffeurs for intercity travel, family road trips, and weekend getaways.",
  "We arrange both one-way intercity drops and comprehensive multi-day round-trip packages. Our outstation dispatch desk coordinates the entire trip lifecycle — matching you with state-permit commercial vehicles, verifying driver background status, and providing real-time highway support.",
  "Travel safely with experienced drivers who understand highway route conditions, bypass routes, and standard rest-stop options. With Cabeazy, you pay transparent outstation rates with zero hidden charges or surprise tolls, keeping your budget clear from start to finish."
];

const features = [
  { title: "One-Way drops", description: "Pay only for the distance you travel on one-way trips, with zero return fare charges." },
  { title: "Highway Experts", description: "All assigned chauffeurs have extensive experience in high-speed intercity highway navigation." },
  { title: "Interstate Permits", description: "All vehicles carry commercial tourist taxi permits for hassle-free interstate boundary crossings." },
  { title: "Sanitized Fleet", description: "Every hatchback, sedan, or SUV is thoroughly cleaned and sanitized prior to outstation trips." }
];

const faqs = [
  { question: "What is the difference between one-way and round-trip outstation bookings?", answer: "On a one-way outstation booking, you are dropped off at your destination and only pay for that single leg. On a round-trip booking, the vehicle and driver remain with you for the entire duration and bring you back." },
  { question: "Does the outstation quote include state taxes and toll fees?", answer: "We provide detailed, transparent quotes. Tolls and state entry permit taxes are either included or clearly estimated upfront depending on the chosen corridor." },
  { question: "Can I customize my intercity route?", answer: "Yes, you can schedule custom multi-stop outstation itineraries by coordinating with our booking desk via WhatsApp." }
];

export default function OutstationCabBookingPage() {
  return (
    <SEOLandingTemplate
      h1="Outstation Cab Booking"
      description="Book outstation cabs with Cabeazy. Reliable one-way drops and round-trip intercity taxi services with experienced highway drivers."
      canonicalUrl="https://www.cabeazy.in/outstation-cab-booking"
      breadcrumbItems={[{ name: "Outstation Cab Booking", url: "/outstation-cab-booking" }]}
      detailedContent={detailedContent}
      features={features}
      faqs={faqs}
    />
  );
}

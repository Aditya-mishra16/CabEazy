import React from "react";
import type { Metadata } from "next";
import SEOLandingTemplate from "@/components/seo/SEOLandingTemplate";

export const metadata: Metadata = {
  title: "Taxi Booking Online - Reliable Chauffeur-Driven Taxis | Cabeazy",
  description: "Book a taxi online with Cabeazy. Enjoy reliable, safe, and clean chauffeur-driven taxis for local, outstation, and airport transfers with 24/7 support.",
  alternates: {
    canonical: "https://www.cabeazy.in/taxi-booking",
  },
};

const detailedContent = [
  "Cabeazy offers a seamless taxi booking service for travelers seeking reliable, clean, and comfortable transportation. By matching your requirements with qualified local and outstation taxi operators, we ensure you always receive a high-quality vehicle and a background-verified assigned driver.",
  "Whether you need an airport taxi transfer, a city commute, or a multi-day outstation road trip, our taxi booking desk acts as your dedicated coordinator. We take care of driver assignment, vehicle quality checks, and real-time updates to keep your journey smooth and on schedule.",
  "Enjoy the benefits of upfront transparent billing, flat pricing options, and zero dynamic surge multipliers. Our dedicated customer helpline is available via Phone and WhatsApp 24/7 to coordinate your bookings, solve issues, and keep you safe on the road."
];

const features = [
  { title: "doorstep Pickups", description: "Your assigned taxi driver will pick you up directly from your home, hotel, or office." },
  { title: "No Surge Pricing", description: "Pay what is agreed upon in your quote with zero sudden peak-hour price hikes." },
  { title: "Highway Experts", description: "Taxis are manned by verified drivers experienced in interstate highway safety." },
  { title: "24/7 Support Desk", description: "Dedicated human support team to assist you before, during, and after your trip." }
];

const faqs = [
  { question: "How does the taxi booking process work?", answer: "Tell us your pickup location, destination, and vehicle type. We confirm your quote, match your booking with a verified driver, and share the taxi details with you prior to departure." },
  { question: "Can I book a one-way taxi?", answer: "Yes, we arrange both one-way outstation taxi drops and round-trip highway packages based on your requirements." },
  { question: "Is driver verification standard?", answer: "Absolutely. Every chauffeur matched to your booking undergoes strict background checks and driver training verification." }
];

export default function TaxiBookingPage() {
  return (
    <SEOLandingTemplate
      h1="Taxi Booking Online"
      description="Book a taxi online with Cabeazy. Enjoy reliable, safe, and clean chauffeur-driven taxis for local, outstation, and airport transfers with 24/7 support."
      canonicalUrl="https://www.cabeazy.in/taxi-booking"
      breadcrumbItems={[{ name: "Taxi Booking", url: "/taxi-booking" }]}
      detailedContent={detailedContent}
      features={features}
      faqs={faqs}
    />
  );
}

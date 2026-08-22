import React from "react";
import type { Metadata } from "next";
import SEOLandingTemplate from "@/components/seo/SEOLandingTemplate";

export const metadata: Metadata = {
  title: "Online Cab Booking Service - Book Cabs Online | Cabeazy",
  description: "Book cabs online with Cabeazy. Reliable and convenient local, outstation and airport cab booking platform with verified drivers and 24/7 support.",
  alternates: {
    canonical: "https://www.cabeazy.in/cab-booking",
  },
};

const detailedContent = [
  "Cabeazy is a professional cab booking and driver coordination platform designed to simplify your travel requirements. Whether you are scheduling a business commute, a family outing, or a long-distance outstation journey, our travel desk matches your booking with a verified, experienced chauffeur and a clean, comfortable vehicle.",
  "Our online cab booking platform makes it simple to request hatchback, sedan, or SUV class vehicles based on your travel needs. Once you submit your pickup location, destination, and travel date, Cabeazy coordinates the driver assignment and shares trip details in advance via WhatsApp, ensuring you travel with complete peace of mind.",
  "At Cabeazy, we prioritize punctuality, driver reliability, and transparent pricing. Travel confidently without worrying about sudden peak-hour dynamic surge multipliers. Enjoy premium human coordination support available 24 hours a day, 7 days a week, throughout your journey."
];

const features = [
  { title: "24/7 Availability", description: "Schedule or request cab booking services anytime, day or night." },
  { title: "Verified Drivers", description: "All assigned chauffeurs are thoroughly background-verified and highway-trained." },
  { title: "Clean, Maintained Cars", description: "Choose from regularly sanitized hatchbacks, sedans, and SUVs." },
  { title: "Upfront Fare Clarity", description: "Receive transparent fare estimates before your booking is confirmed." }
];

const faqs = [
  { question: "How do I book a cab online with Cabeazy?", answer: "Go back to our homepage, select your trip type (one-way or round-trip), enter your pickup/destination details, select your preferred vehicle class, and click submit to receive a quote on WhatsApp." },
  { question: "Are Cabeazy cabs available 24/7?", answer: "Yes, our booking and customer support helpline is operational 24/7. We recommend booking in advance to ensure guaranteed vehicle assignment." },
  { question: "What vehicle classes can I book?", answer: "We arrange Hatchbacks (Wagon R, Swift), Sedans (Dzire, Etios), SUVs/MUVs (Innova, Ertiga), and group travellers based on availability." }
];

export default function CabBookingPage() {
  return (
    <SEOLandingTemplate
      h1="Online Cab Booking Service"
      description="Book cabs online with Cabeazy. Reliable and convenient local, outstation and airport cab booking platform with verified drivers and 24/7 support."
      canonicalUrl="https://www.cabeazy.in/cab-booking"
      breadcrumbItems={[{ name: "Cab Booking", url: "/cab-booking" }]}
      detailedContent={detailedContent}
      features={features}
      faqs={faqs}
    />
  );
}

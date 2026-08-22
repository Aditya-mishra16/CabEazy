import React from "react";
import type { Metadata } from "next";
import SEOLandingTemplate from "@/components/seo/SEOLandingTemplate";

export const metadata: Metadata = {
  title: "Local Cab Booking - Hourly & Full Day Car Hire | Cabeazy",
  description: "Book local cabs with Cabeazy. Flexible hourly and full-day vehicle hire with assigned chauffeurs for city commutes and multi-stop travel.",
  alternates: {
    canonical: "https://www.cabeazy.in/local-cab-booking",
  },
};

const detailedContent = [
  "Navigating busy cities for business meetings, shopping, or family gatherings requires a flexible transport solution. Cabeazy's local cab booking service allows you to rent a vehicle with a dedicated assigned chauffeur by the hour or for full days, giving you complete control over your schedule.",
  "Instead of booking multiple point-to-point rides and dealing with waiting times, our local car hire packages let you keep the same vehicle and driver. The driver will wait for you at every stop, manage parking navigation, and transport you safely through the city.",
  "Select from our range of Hatchbacks, Sedans, or SUVs based on your passenger space and luggage requirements. Enjoy standard flat hourly packages, transparent extra mileage billing, and 24/7 travel desk coordination throughout your city travel."
];

const features = [
  { title: "Hourly Packages", description: "Choose flexible local rental packages (e.g. 4 Hrs/40 Km, 8 Hrs/80 Km) to fit your schedule." },
  { title: "Dedicated Chauffeur", description: "The same driver stays with you throughout the day, waiting at every stop you make." },
  { title: "Unlimited Stops", description: "Make as many stops as you need within your booked hours and mileage limit." },
  { title: "No Dynamic Surge", description: "Local rental rates are locked upon confirmation with zero surprise billing." }
];

const faqs = [
  { question: "How does local hourly cab rental work?", answer: "Select a package (e.g., 8 hours / 80 kilometers). The vehicle and driver are reserved exclusively for you during that window to make multiple city stops." },
  { question: "Can I extend my local booking duration?", answer: "Yes, you can extend your ride. Extra hours and kilometers are billed at fixed, transparent rates shared in your booking quote." },
  { question: "Are airport drops covered in local rentals?", answer: "Local rentals are ideal for multi-stop city travel. For direct airport trips, we recommend booking our dedicated Airport Cab package." }
];

export default function LocalCabBookingPage() {
  return (
    <SEOLandingTemplate
      h1="Local Cab Booking"
      description="Book local cabs with Cabeazy. Flexible hourly and full-day vehicle hire with assigned chauffeurs for city commutes and multi-stop travel."
      canonicalUrl="https://www.cabeazy.in/local-cab-booking"
      breadcrumbItems={[{ name: "Local Cab Booking", url: "/local-cab-booking" }]}
      detailedContent={detailedContent}
      features={features}
      faqs={faqs}
    />
  );
}

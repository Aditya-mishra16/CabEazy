import React from "react";
import type { Metadata } from "next";
import SEOLandingTemplate from "@/components/seo/SEOLandingTemplate";

export const metadata: Metadata = {
  title: "Airport Cab Booking - Reliable Airport Taxi Service | Cabeazy",
  description: "Book airport cabs with Cabeazy. Enjoy reliable, punctual airport pick-up and drop-off taxi services with verified drivers and fixed pricing.",
  alternates: {
    canonical: "https://www.cabeazy.in/airport-cab-booking",
  },
};

const detailedContent = [
  "Catching a flight or arriving at the airport requires absolute reliability. Cabeazy's airport cab booking service is designed to eliminate the anxiety of delays, cancellations, and surge charges. We arrange punctual airport transfers to and from international and domestic terminals, CST/LTT stations, and regional transit hubs.",
  "Our dedicated airport taxi desk coordinates doorstep pickup times based on your flight schedule. We assign verified, professional drivers who are familiar with terminal layout routes, traffic patterns, and airport toll systems, ensuring a smooth and hassle-free transit.",
  "Whether you need an early morning pickup or a late-night arrival drop, our 24/7 human support desk coordinates your booking in real time. Pay a transparent flat fare with zero surge charges and receive your driver's contact and vehicle details well in advance."
];

const features = [
  { title: "Guaranteed Punctuality", description: "Drivers are dispatched early to ensure you reach the airport or get picked up on time." },
  { title: "Flight Monitoring", description: "We monitor flight arrival status to coordinate driver placement dynamically." },
  { title: "Airport Toll Assist", description: "Convenient billing options with pre-calculated parking and toll charges." },
  { title: "Luggage Comfort", description: "Choose spacious sedans or SUVs to accommodate all your travel bags easily." }
];

const faqs = [
  { question: "How early should I book my airport cab?", answer: "We recommend booking at least 4 to 6 hours in advance to guarantee driver availability, especially for early morning flights." },
  { question: "What happens if my flight is delayed?", answer: "Our travel support team monitors arrival schedules. We will adjust the driver's arrival time dynamically based on the updated flight status." },
  { question: "Do you provide airport pickups and drops?", answer: "Yes, we arrange both drops to domestic/international terminals and pickups directly from the airport arrival exit gates." }
];

export default function AirportCabBookingPage() {
  return (
    <SEOLandingTemplate
      h1="Airport Cab Booking"
      description="Book airport cabs with Cabeazy. Enjoy reliable, punctual airport pick-up and drop-off taxi services with verified drivers and fixed pricing."
      canonicalUrl="https://www.cabeazy.in/airport-cab-booking"
      breadcrumbItems={[{ name: "Airport Cab Booking", url: "/airport-cab-booking" }]}
      detailedContent={detailedContent}
      features={features}
      faqs={faqs}
    />
  );
}

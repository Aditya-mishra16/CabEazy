import React from "react";
import type { Metadata } from "next";
import SEOLandingTemplate from "@/components/seo/SEOLandingTemplate";

export const metadata: Metadata = {
  title: "Cab Booking in Pune - Reliable Pune Taxi Service | Cabeazy",
  description: "Book a cab in Pune with Cabeazy. Convenient local, outstation, and airport cab booking services across Pune with verified drivers.",
  alternates: {
    canonical: "https://www.cabeazy.in/cab-booking/pune",
  },
};

const detailedContent = [
  "Whether you are commuting for work in Hinjawadi, visiting family in Koregaon Park, or planning a weekend highway trip, Cabeazy's Pune cab booking service offers a reliable and comfortable transit option. We arrange clean, air-conditioned passenger cars and background-verified assigned drivers across Pune, Pimpri-Chinchwad (PCMC), and surrounding regions.",
  "We coordinate point-to-point transfers to Pune Airport (PNQ), Pune Junction, and outstation corridors. Our dispatch team selects experienced local chauffeurs who are familiar with city routes, tech park lanes, and highway bypasses, ensuring you arrive on time.",
  "Enjoy upfront transparent billing, flat pricing structures, and zero dynamic surge multipliers. Our customer support desk is available 24/7 via Phone and WhatsApp to coordinate your bookings, communicate driver details, and ensure your safety throughout your travel."
];

const features = [
  { title: "Pune & PCMC Coverage", description: "doorstep pickups across Hinjawadi, Baner, Kothrud, Hadapsar, Viman Nagar, Koregaon Park, and Chinchwad." },
  { title: "PNQ Airport Drops", description: "Punctual airport taxi transfers to and from Pune International Airport (Viman Nagar)." },
  { title: "Intercity Highway Travel", description: "Seamless cab booking from Pune to Mumbai, Lonavala, Mahabaleshwar, Shirdi, and Nashik." },
  { title: "Verified Chauffeurs", description: "Every ride is matched with a background-verified driver trained for safe city and highway driving." }
];

const faqs = [
  { question: "Do you serve Hinjawadi IT Park and outer areas of Pune?", answer: "Yes, our operational network covers Hinjawadi (Phases 1, 2, 3), Hadapsar (Magarpatta City), Kharadi, Baner, Wakad, and all major areas of Pune and PCMC." },
  { question: "Can I book a one-way cab from Pune to Mumbai Airport?", answer: "Yes, we frequently arrange one-way drops from Pune directly to Mumbai Chhatrapati Shivaji Maharaj Airport (BOM) terminals." },
  { question: "Is driver contact information shared in advance?", answer: "Yes, we share full trip coordinates including the vehicle number and assigned driver details via WhatsApp or SMS prior to pickup." }
];

export default function PuneCabBookingPage() {
  return (
    <SEOLandingTemplate
      h1="Cab Booking in Pune"
      description="Book a cab in Pune with Cabeazy. Convenient local, outstation, and airport cab booking services across Pune with verified drivers."
      canonicalUrl="https://www.cabeazy.in/cab-booking/pune"
      breadcrumbItems={[
        { name: "Cab Booking", url: "/cab-booking" },
        { name: "Pune", url: "/cab-booking/pune" }
      ]}
      detailedContent={detailedContent}
      features={features}
      faqs={faqs}
    />
  );
}

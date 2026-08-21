import React from "react";
import { siteConfig, faqsData } from "@/config/site";

export default function JsonLd() {
  const fullSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AutoRental",
        "@id": `${siteConfig.url}/#localbusiness`,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        description: siteConfig.description,
        url: siteConfig.url,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, UPI, Credit Card, Debit Card, Net Banking",
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.street,
          addressLocality: siteConfig.address.city,
          postalCode: siteConfig.address.postalCode,
          addressRegion: siteConfig.address.state,
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 19.1176,
          longitude: 72.8808,
        },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
      },
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/images/servicesCarImage.png`,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteConfig.phone,
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi", "Marathi"],
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.url}/#faq`,
        mainEntity: faqsData.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "ItemList",
        "@id": `${siteConfig.url}/#services`,
        itemListElement: [
          {
            "@type": "Service",
            position: 1,
            name: "Intercity Outstation Travel Booking",
            serviceType: "Vehicle Booking and Driver Assignment",
            provider: {
              "@id": `${siteConfig.url}/#localbusiness`,
            },
            description:
              "Book a vehicle for your intercity outstation travel. Cabeazy assigns an experienced, verified driver to take you safely to your destination.",
          },
          {
            "@type": "Service",
            position: 2,
            name: "Local City Transfers & Airport Rides",
            serviceType: "City Transportation Booking",
            provider: {
              "@id": `${siteConfig.url}/#localbusiness`,
            },
            description:
              "Point-to-point city transfers, airport pickups, and railway station travel with verified drivers and zero surge pricing.",
          },
          {
            "@type": "Service",
            position: 3,
            name: "Hourly & Multi-Day Car Hire",
            serviceType: "Chauffeur-Driven Vehicle Rental",
            provider: {
              "@id": `${siteConfig.url}/#localbusiness`,
            },
            description:
              "Flexible hourly and full-day vehicle hire with dedicated assigned chauffeurs for business, sightseeing, and family journeys.",
          },
        ],
      },
    ],
  };

  return (
    <script
      id="cabeazy-jsonld-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(fullSchema),
      }}
    />
  );
}

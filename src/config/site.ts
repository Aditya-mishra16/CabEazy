import { Vehicle, ServiceItem, RouteItem, FAQItem, WhyChooseItem } from "@/types";

export const siteConfig = {
  name: "CabEazy",
  legalName: "CabEazy Travel Services",
  description:
    "Book a vehicle for your journey with CabEazy. Tell us where you need to go, and we will assign an experienced, verified driver to take you safely to your destination. Available 24/7.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.cabeazy.com",
  phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || "+919323913610",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919323913610",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "cabeazy.travel@gmail.com",
  address: {
    street: "Mumbai-400072",
    city: "Mumbai",
    postalCode: "400072",
    state: "Maharashtra",
    country: "India",
    full: "Mumbai-400072, Maharashtra, India",
  },
  operatingHours: "Available 24/7 (Bookings & Inquiries)",
  mainLocation: "India",
};

export const getWhatsAppLink = (message?: string) => {
  const defaultMsg =
    message || "Hi CabEazy, I would like to enquire about booking a vehicle for my trip.";
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(defaultMsg)}`;
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Services", href: "#services" },
  { label: "Vehicles", href: "#fleet" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const howItWorksSteps = [
  {
    step: "01",
    title: "Choose Your Vehicle",
    description:
      "Select your preferred category — Hatchback, Sedan, SUV, or Group Fleet based on your travel needs.",
  },
  {
    step: "02",
    title: "Submit Your Trip Details",
    description:
      "Tell us your pickup location, destination, and preferred travel date via our enquiry form, Phone, or WhatsApp.",
  },
  {
    step: "03",
    title: "CabEazy Assigns a Driver",
    description:
      "We match your booking with a verified, experienced chauffeur and dispatch a clean, well-maintained vehicle.",
  },
  {
    step: "04",
    title: "Travel to Your Destination",
    description:
      "Enjoy a smooth, punctual, and safe ride with 24/7 human customer support throughout your journey.",
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: "outstation",
    title: "Intercity Outstation Travel",
    tagline: "One-Way Drops & Round-Trip Journeys",
    description:
      "Reliable long-distance vehicle bookings. Tell us your destination, and CabEazy will assign a seasoned highway chauffeur for a comfortable, stress-free trip.",
    iconName: "MapPin",
    highlights: [
      "Flexible one-way drops and round-trip packages",
      "Doorstep pickup at your scheduled time",
      "Experienced highway-verified chauffeurs assigned",
      "Clean, air-conditioned vehicle fleet",
    ],
    badge: "Most Popular",
  },
  {
    id: "city",
    title: "City Rides & Airport Transfers",
    tagline: "Point-to-Point Local Transportation",
    description:
      "Comfortable local city travel for business commutes, airport pickups/drops, and station transfers with punctual driver arrival.",
    iconName: "Navigation",
    highlights: [
      "Punctual doorstep pickup at any hour",
      "No peak-hour dynamic surge multipliers",
      "Courteous, verified professional drivers",
      "Available for instant or pre-scheduled travel",
    ],
  },
  {
    id: "rental",
    title: "Hourly & Full-Day Vehicle Hire",
    tagline: "Flexible Multi-Stop Chauffeur Packages",
    description:
      "Hire a vehicle with an assigned driver by the hour or for full days. Perfect for client meetings, family outings, and multi-stop errands.",
    iconName: "Clock",
    highlights: [
      "Custom hourly and multi-day travel packages",
      "Unlimited stops within your booking duration",
      "Dedicated assigned chauffeur at your disposal",
      "Choice of Hatchback, Sedan, SUV, or Premium models",
    ],
  },
];

export const vehiclesData: Vehicle[] = [
  {
    id: "mini",
    name: "Mini / Hatchback",
    category: "Hatchback",
    seats: 4,
    luggage: "2 Bags",
    image: "/images/Mini.png",
    popularModels: "Wagon R, Swift, Tiago, Ritz or equivalent",
    recommendedFor: "Solo travelers, couples & compact city commutes",
    features: [
      "Fuel-efficient & comfortable ride",
      "Full Air Conditioning",
      "Comfortable 4-passenger seating",
      "Clean, sanitized passenger cabin",
    ],
  },
  {
    id: "sedan",
    name: "Sedan Prime",
    category: "Sedan",
    seats: 4,
    luggage: "3 Bags",
    image: "/images/Sedan.png",
    popularModels: "Dzire, Etios, Aura, Ciaz or equivalent",
    recommendedFor: "Executives, families & comfortable long trips",
    features: [
      "Generous legroom & spacious boot space",
      "Smooth highway suspension comfort",
      "Ideal for outstation & business travel",
      "Quiet, comfortable passenger cabin",
    ],
  },
  {
    id: "suv",
    name: "SUV / MUV / Premium",
    category: "SUV & Luxury",
    seats: 6,
    luggage: "4–5 Bags",
    image: "/images/Suv.png",
    popularModels: "Innova Crysta, Ertiga, Fortuner & Travellers",
    recommendedFor: "Large families, group trips & long-distance journeys",
    features: [
      "Spacious 6 to 7+ passenger seating capacity",
      "Ample luggage capacity for long tours",
      "Superior comfort for hilly & highway corridors",
      "High ground clearance & smooth ride",
    ],
  },
];

export const whyChooseData: WhyChooseItem[] = [
  {
    title: "Clear & Upfront Quotes",
    description:
      "Get transparent, all-inclusive fare quotes before confirmation with zero hidden surprises.",
    icon: "/icons/price.svg",
    stat: "Upfront Clarity",
  },
  {
    title: "Verified & Professional Drivers",
    description:
      "CabEazy assigns experienced, background-verified chauffeurs trained for safe, smooth driving.",
    icon: "/icons/drivers.svg",
    stat: "Verified Chauffeurs",
  },
  {
    title: "Clean & Maintained Fleet",
    description:
      "Regularly inspected, clean, air-conditioned hatchbacks, sedans, SUVs, and luxury vehicles.",
    icon: "/icons/comfortRide.svg",
    stat: "Quality Vehicles",
  },
  {
    title: "24/7 Human Travel Support",
    description:
      "Direct phone and WhatsApp assistance to help you before, during, and after your trip.",
    icon: "/icons/technicalSupport.svg",
    stat: "24/7 Support",
  },
];

export const faqsData: FAQItem[] = [
  {
    question: "How does booking through CabEazy work?",
    answer:
      "Booking is simple: Tell us your pickup location, destination, and preferred vehicle class. CabEazy matches your trip with a suitable verified driver, confirms your upfront quote, and the assigned driver picks you up right on time.",
  },
  {
    question: "What vehicle categories are available for booking?",
    answer:
      "We arrange all types of vehicles including Hatchbacks (Wagon R, Swift), Sedans (Dzire, Etios), SUVs/MUVs (Innova Crysta, Ertiga), Premium Vehicles, and Tempo Travellers for larger groups. All vehicles are air-conditioned and well-maintained.",
  },
  {
    question: "Can I book a one-way trip or only round-trips?",
    answer:
      "You can book both one-way destination drops and round-trip packages. For one-way travel, you only pay for your requested route without return obligations.",
  },
  {
    question: "Can I schedule a vehicle in advance?",
    answer:
      "Yes. You can schedule your booking hours, days, or weeks in advance. We recommend pre-booking to ensure guaranteed vehicle and driver availability 24/7.",
  },
  {
    question: "How will my driver and vehicle details be shared?",
    answer:
      "Once your booking is confirmed with our travel desk, you will receive full trip details including the vehicle model and assigned driver contact information via WhatsApp or SMS.",
  },
  {
    question: "Are there sudden peak-hour surge charges?",
    answer:
      "No. We do not apply dynamic surge multipliers. Once your quote is confirmed, you travel with complete clarity.",
  },
  {
    question: "How can I contact CabEazy if I need assistance?",
    answer:
      "Our human support desk is available 24/7 via direct phone call (+91 9323913610) and WhatsApp for immediate travel coordination.",
  },
];

export const routesData: RouteItem[] = [
  { id: "route-1", from: "Mumbai", to: "Pune", distance: "150 km", duration: "3 hrs", highlight: true },
  { id: "route-2", from: "Mumbai", to: "Nashik", distance: "170 km", duration: "3.5 hrs" },
  { id: "route-3", from: "Mumbai", to: "Shirdi", distance: "245 km", duration: "4.5 hrs", highlight: true },
];

export const serviceLocations = [
  { name: "Outstation Trips", popular: true },
  { name: "City & Airport Rides", popular: true },
  { name: "Intercity Highway Drops", popular: true },
  { name: "Hourly & Day Hire", popular: true },
  { name: "Multi-Day Tours", popular: true },
  { name: "Custom Destinations", popular: true },
];

export interface NavItem {
  label: string;
  href: string;
}

export interface Vehicle {
  id: string;
  name: string;
  category: string;
  seats: number;
  luggage: string;
  image: string;
  popularModels: string;
  features: string[];
  recommendedFor: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: "MapPin" | "Navigation" | "Clock" | "Shield";
  highlights: string[];
  badge?: string;
}

export interface RouteItem {
  id: string;
  from: string;
  to: string;
  distance: string;
  duration: string;
  highlight?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface WhyChooseItem {
  title: string;
  description: string;
  icon: string;
  stat?: string;
}

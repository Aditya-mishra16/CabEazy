import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Services from "@/components/sections/Services";
import PopularRoutes from "@/components/sections/PopularRoutes";
import ServiceAreas from "@/components/sections/ServiceAreas";
import Fleet from "@/components/sections/Fleet";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import About from "@/components/sections/About";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Services />
      <PopularRoutes />
      <ServiceAreas />
      <Fleet />
      <WhyChooseUs />
      <About />
      <FAQ />
      <Contact />
    </>
  );
}

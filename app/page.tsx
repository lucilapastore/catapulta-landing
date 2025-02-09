import Blog from "@/components/Blog";
import Cta from "@/components/Cta";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Integrations from "@/components/Integrations";
import Sponsors from "@/components/Sponsors";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Integrations />
      <Sponsors />
      <Stats />
      <Blog />
      <FAQ />
      <Cta />
    </>
  );
}

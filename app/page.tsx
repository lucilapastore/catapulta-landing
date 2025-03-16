import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Integrations from "@/components/Integrations";
import PlatformSteps from "@/components/PlatformSteps";
import Sponsors from "@/components/Sponsors";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <PlatformSteps />
      <Integrations />
      <Sponsors />
      <Stats />
      <Blog />
      <FAQ />
    </>
  );
}

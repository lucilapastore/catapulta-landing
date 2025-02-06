import Blog from "../components/Blog";
import Cta from "../components/Cta";
import FAQ from "../components/FAQ";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Integrations from "../components/Integrations";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Sponsors from "../components/Sponsors";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Integrations />
      <Sponsors />
      <Blog />
      <FAQ />
      <Cta />
      <Footer />
      <ScrollToTop />
    </>
  );
}

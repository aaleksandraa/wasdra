import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { FeaturedProjects } from "@/components/site/FeaturedProjects";
import { WhyWasdra } from "@/components/site/WhyWasdra";
import { AboutTeaser } from "@/components/site/AboutTeaser";
import { Regions } from "@/components/site/Regions";
import { Faq } from "@/components/site/Faq";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";
import { StickyCall } from "@/components/site/StickyCall";

const Index = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [hash, pathname]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <FeaturedProjects />
        <WhyWasdra />
        <AboutTeaser />
        <Regions />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyCall />
    </div>
  );
};

export default Index;

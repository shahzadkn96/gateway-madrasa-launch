import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CallToAction from "@/components/CallToAction";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = "Gateway Education - Online Islamic Madrasa | Quran & Islamic Studies Classes";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Join Gateway Education\'s online Islamic Madrasa. 1-to-1 personalized sessions, group classes, flexible timings & affordable fees. Free trial class available. Register now!');
    }
  }, []);

  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <CallToAction />
    </main>
  );
};

export default Index;
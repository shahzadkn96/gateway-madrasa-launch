import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CallToAction from "@/components/CallToAction";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = "Gateway Education - Islamic Madrasa & School Tuition Online | Classes 1-7";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Gateway Education offers online Islamic Madrasa and school tuition for Classes 1-7. Expert guidance in English, Math, Science, Social Studies & more. Free trial available!');
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
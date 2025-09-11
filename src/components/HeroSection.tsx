import { Button } from "@/components/ui/button";
import { MessageCircle, Star, Users, Clock, BookOpen } from "lucide-react";
import heroPattern from "@/assets/hero-pattern.jpg";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/971509172474", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url(${heroPattern})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero z-10" />
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-warm-cream/20 backdrop-blur-sm px-4 py-2 rounded-full border border-warm-cream/30 mb-8">
            <Star className="w-4 h-4 text-islamic-gold" fill="currentColor" />
            <span className="text-primary-foreground font-medium">New Batches Starting Soon</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Gateway <span className="text-islamic-gold">Education</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 font-medium">
            Islamic Madrasa & School Tuition Online
          </p>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto">
            Comprehensive online education for Islamic studies and school subjects (Classes 1-7). 
            Expert guidance across all major subjects with personalized attention.
          </p>
          
          {/* Key Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10 max-w-4xl mx-auto">
            <div className="flex flex-col items-center bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/20">
              <BookOpen className="w-8 h-8 text-islamic-gold mb-2" />
              <span className="text-primary-foreground font-medium text-sm md:text-base">Islamic Studies</span>
            </div>
            <div className="flex flex-col items-center bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/20">
              <Users className="w-8 h-8 text-islamic-gold mb-2" />
              <span className="text-primary-foreground font-medium text-sm md:text-base">School Tuition</span>
            </div>
            <div className="flex flex-col items-center bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/20">
              <Clock className="w-8 h-8 text-islamic-gold mb-2" />
              <span className="text-primary-foreground font-medium text-sm md:text-base">Flexible Timings</span>
            </div>
            <div className="flex flex-col items-center bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/20">
              <Star className="w-8 h-8 text-islamic-gold mb-2" />
              <span className="text-primary-foreground font-medium text-sm md:text-base">Classes 1-7</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero"
              size="lg"
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Register on WhatsApp
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              Get Free Trial Class
            </Button>
          </div>
          
          {/* Trust Badge */}
          <div className="mt-8 text-primary-foreground/70">
            <p className="text-sm">🎁 Free trial class available • Limited seats remaining</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
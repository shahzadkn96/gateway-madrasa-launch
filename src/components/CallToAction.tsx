import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Gift, Phone, Clock } from "lucide-react";

const CallToAction = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/971509172474", "_blank");
  };

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/api/placeholder/100/100')] bg-repeat opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Begin Your Islamic Learning Journey?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Join our growing community of students and start your free trial class today!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                variant="hero"
                size="lg"
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto text-lg px-8 py-4"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                Register Now on WhatsApp
              </Button>
            </div>
            
            <p className="text-primary-foreground/80 mb-8">
              📲 Contact: <span className="font-semibold">+971 509172474</span>
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20">
              <CardContent className="p-6 text-center">
                <Gift className="w-12 h-12 text-islamic-gold mx-auto mb-4" />
                <h3 className="font-semibold text-primary-foreground mb-2">Free Trial Class</h3>
                <p className="text-primary-foreground/80 text-sm">
                  Experience our teaching methodology with no commitment required
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20">
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 text-islamic-gold mx-auto mb-4" />
                <h3 className="font-semibold text-primary-foreground mb-2">New Batches Starting</h3>
                <p className="text-primary-foreground/80 text-sm">
                  Limited seats available in our upcoming batches
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20">
              <CardContent className="p-6 text-center">
                <Phone className="w-12 h-12 text-islamic-gold mx-auto mb-4" />
                <h3 className="font-semibold text-primary-foreground mb-2">24/7 Support</h3>
                <p className="text-primary-foreground/80 text-sm">
                  Get assistance whenever you need it throughout your journey
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Urgency Message */}
          <div className="bg-islamic-gold/20 backdrop-blur-sm rounded-2xl p-6 border border-islamic-gold/30">
            <h3 className="text-2xl font-bold text-primary-foreground mb-2">
              🚀 Don't Miss Out!
            </h3>
            <p className="text-primary-foreground/90">
              New batches are starting soon with limited seats. Register today to secure your spot 
              and begin your journey towards Islamic knowledge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
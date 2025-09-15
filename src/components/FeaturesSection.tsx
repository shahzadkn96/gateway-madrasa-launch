import { Card, CardContent } from "@/components/ui/card";
import { Users, BookOpen, Clock, GraduationCap, CheckCircle } from "lucide-react";
import educationIllustration from "@/assets/education-illustration.jpg";

const FeaturesSection = () => {
  const services = [
    {
      title: "Islamic Madrasa",
      description: "Comprehensive Islamic studies with qualified scholars",
      features: ["Quran Recitation & Tajweed", "Fiqh (Islamic Jurisprudence)", "Aqeedah (Islamic Beliefs)", "Seerah (Life of the Prophet ﷺ)", "Hadith Studies", "Islamic History", "Arabic Language Basics"]
    },
    {
      title: "School Tuition (Classes 1-7)",
      description: "Expert guidance across all major school subjects",
      features: ["📖 English", "🔢 Math", "🔬 Science", "🌍 Social Studies", "✍️ Languages & more"]
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Personalized Guidance",
      description: "Every child learns at their own pace with individual attention and customized learning plans."
    },
    {
      icon: Clock,
      title: "Flexible Timing",
      description: "Learning that fits into your schedule - choose from morning, evening, or weekend slots."
    },
    {
      icon: BookOpen,
      title: "Interactive Learning", 
      description: "Engaging sessions with multimedia content to make concepts crystal clear and memorable."
    },
    {
      icon: GraduationCap,
      title: "Expert Teachers",
      description: "Qualified educators with years of experience in both Islamic studies and school curriculum."
    }
  ];

  return (
    <section className="py-20 bg-warm-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Comprehensive Online Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Gateway Education offers both Islamic studies and school tuition, combining traditional 
            teaching methods with modern technology for an exceptional learning experience.
          </p>
        </div>

        {/* Services Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="border-primary/20 shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-islamic-gold mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-primary text-center mb-12">What Makes Us Different?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-sage-green/30 shadow-sm hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] text-center">
                <CardContent className="p-6">
                  <benefit.icon className="w-12 h-12 text-islamic-gold mx-auto mb-4" />
                  <h4 className="font-semibold text-primary mb-2">{benefit.title}</h4>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <img 
              src={educationIllustration} 
              alt="Islamic education online learning"
              className="rounded-2xl shadow-elegant w-full"
            />
            <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-primary/5 rounded-xl p-6">
            <div className="text-3xl font-bold text-primary mb-2">30+</div>
            <div className="text-muted-foreground">Students Enrolled</div>
          </div>
          <div className="bg-primary/5 rounded-xl p-6">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-muted-foreground">Qualified Teachers</div>
          </div>
          <div className="bg-primary/5 rounded-xl p-6">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Student Satisfaction</div>
          </div>
          <div className="bg-primary/5 rounded-xl p-6">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
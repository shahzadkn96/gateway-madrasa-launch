import { Card, CardContent } from "@/components/ui/card";
import { Users, BookOpen, Clock, GraduationCap, Heart, CheckCircle } from "lucide-react";
import educationIllustration from "@/assets/education-illustration.jpg";

const FeaturesSection = () => {
  const features = [
    {
      icon: Users,
      title: "1-to-1 Personalized Sessions",
      description: "Individual attention with qualified Islamic scholars tailored to your learning pace and needs."
    },
    {
      icon: BookOpen,
      title: "Group Batch Classes",
      description: "Learn alongside peers in structured group sessions that encourage discussion and community."
    },
    {
      icon: Clock,
      title: "Flexible Timings",
      description: "Choose from morning, evening, or weekend slots that fit your busy schedule."
    },
    {
      icon: GraduationCap,
      title: "Structured Syllabus",
      description: "Comprehensive curriculum designed for all ages, from beginners to advanced learners."
    },
    {
      icon: Heart,
      title: "Affordable Fees",
      description: "Quality Islamic education at prices that make learning accessible to everyone."
    },
    {
      icon: CheckCircle,
      title: "All Ages Welcome",
      description: "From children to adults, our programs are designed to accommodate every age group."
    }
  ];

  return (
    <section className="py-20 bg-warm-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Why Choose Gateway Education?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We combine traditional Islamic teaching methods with modern technology to provide 
            an exceptional learning experience for students worldwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-sage-green/30 shadow-sm hover:shadow-elegant transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-6">
                  <feature.icon className="w-10 h-10 text-islamic-gold mb-4" />
                  <h3 className="font-semibold text-primary mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="order-first lg:order-last">
            <div className="relative">
              <img 
                src={educationIllustration} 
                alt="Islamic education online learning"
                className="rounded-2xl shadow-elegant w-full"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-primary/5 rounded-xl p-6">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Students Enrolled</div>
          </div>
          <div className="bg-primary/5 rounded-xl p-6">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
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
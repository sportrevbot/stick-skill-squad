import { HeroSection } from "@/components/HeroSection";
import { YouTubePlaceholder } from "@/components/YouTubePlaceholder";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { SignUpForm } from "@/components/SignUpForm";
import { FAQSection } from "@/components/FAQSection";

const Index = () => {
  const scrollToForm = () => {
    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">


      {/* YouTube Placeholder */}
      <YouTubePlaceholder />
   
         
      {/* Hero Section */}
      <HeroSection onApplyClick={scrollToForm} />
      


      {/* Benefits Section */}
      <BenefitsSection />
      
      {/* How It Works */}
      <HowItWorksSection />
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* Sign-Up Form */}
      <SignUpForm id="signup" />
      
      {/* Footer */}
      <footer className="bg-hockey-black py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-black text-ice-white mb-4">
            Better Hockey
          </div>
          <p className="text-ice-gray">
            Empowering young hockey players worldwide 🏒
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

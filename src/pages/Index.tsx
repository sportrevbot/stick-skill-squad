import { HeroSection } from "@/components/HeroSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { ProductHighlights } from "@/components/ProductHighlights";
import { SignUpForm } from "@/components/SignUpForm";
import { FAQSection } from "@/components/FAQSection";
import { Button } from "@/components/ui/button";

const Index = () => {
  const scrollToForm = () => {
    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBottomForm = () => {
    document.getElementById('bottom-signup')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection onApplyClick={scrollToForm} />
      
      {/* Benefits Section */}
      <BenefitsSection />
      
      {/* Middle CTA */}
      <section className="py-16 bg-gradient-to-r from-hockey-red to-hockey-red-light">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-ice-white mb-6">
            Ready to Join the Team?
          </h3>
          <p className="text-xl text-ice-white/90 mb-8 max-w-2xl mx-auto">
            Don't wait! Apply now and start your journey as a Better Hockey ambassador.
          </p>
          <Button 
            variant="outline-hockey" 
            size="xl"
            onClick={scrollToForm}
            className="bg-ice-white border-ice-white text-hockey-red hover:bg-ice-gray"
          >
            Apply Now! 🔥
          </Button>
        </div>
      </section>
      
      {/* How It Works */}
      <HowItWorksSection />
      
      {/* Sign-Up Form */}
      <SignUpForm id="signup" />
      
      {/* Product Highlights */}
      <ProductHighlights />
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* Bottom CTA & Sign-Up */}
      <section className="py-20 bg-gradient-to-br from-hockey-black to-hockey-gray">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-ice-white mb-6">
            Join the{" "}
            <span className="text-hockey-red bg-gradient-to-r from-hockey-red to-hockey-red-light bg-clip-text text-transparent">
              Movement
            </span>
          </h2>
          <p className="text-xl text-ice-gray mb-12 max-w-2xl mx-auto">
            Become part of a global community of young hockey creators. Apply today!
          </p>
          <Button 
            variant="hero" 
            size="xl"
            onClick={scrollToBottomForm}
            className="mb-16"
          >
            Apply One More Time! ⚡
          </Button>
        </div>
        
        <SignUpForm id="bottom-signup" showHeading={false} />
      </section>
      
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

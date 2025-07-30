import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-hockey-training.jpg";

interface HeroSectionProps {
  onApplyClick: () => void;
}

export const HeroSection = ({ onApplyClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-hockey-black/80 via-hockey-black/60 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center lg:text-left">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-ice-white mb-6 leading-tight">
            Become a{" "}
            <span className="text-hockey-red bg-gradient-to-r from-hockey-red to-hockey-red-light bg-clip-text text-transparent">
              Better Hockey
            </span>{" "}
            Ambassador!
          </h1>
          
          <p className="text-xl md:text-2xl text-ice-gray mb-8 max-w-2xl leading-relaxed">
            Get free hockey gear, share your skills, and join our global team of creators.
          </p>
          
          <Button 
            variant="hero" 
            size="xl" 
            onClick={onApplyClick}
            className="mb-4 mr-4"
          >
            Apply Now 🏒
          </Button>
          
          <div className="flex items-center justify-center lg:justify-start gap-4 text-ice-white/80 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-hockey-red rounded-full animate-pulse"></div>
              <span>Ages 8-16</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-hockey-red rounded-full animate-pulse"></div>
              <span>Free Gear</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-hockey-red rounded-full animate-pulse"></div>
              <span>Global Community</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-ice-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-ice-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-hockey-training.jpg";

interface HeroSectionProps {
  onApplyClick: () => void;
}

export const HeroSection = ({ onApplyClick }: HeroSectionProps) => {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-ice-white/95 via-ice-white/90 to-ice-white/95"></div>
      </div>
      
      {/* Content */}
{/* Content */}
<div className="relative z-10 container mx-auto px-6 text-center">
  <div className="max-w-4xl mx-auto">
    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-hockey-black mb-6 leading-tight">
      Become a Better Hockey Ambassador!
    </h1>
    
    <p className="text-xl md:text-2xl text-hockey-gray mb-8 max-w-2xl mx-auto leading-relaxed">
      Get free hockey gear, share your skills, and join our global team of creators.
    </p>
    
    <Button 
      variant="default" 
      size="xl" 
      onClick={onApplyClick}
      className="mb-4 mx-auto bg-hockey-black text-ice-white hover:bg-hockey-gray block"
    >
      Apply Now 🏒
    </Button>
    
    <div className="flex items-center justify-center gap-4 text-hockey-gray text-sm">
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
        <div className="w-6 h-10 border-2 border-hockey-gray rounded-full flex justify-center">
          <div className="w-1 h-3 bg-hockey-gray rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
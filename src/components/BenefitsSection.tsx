import { CheckCircle } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    "Get free Better Hockey gear (trainers, tiles, passers, goalie targets, shirts)",
    "Be featured by Better Hockey to thousands of players worldwide", 
    "Join a global community of hockey creators"
  ];

  return (
    <section className="py-20 bg-ice-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-hockey-black mb-6">
            Why Become an Ambassador?
          </h2>
          <p className="text-xl text-hockey-gray max-w-2xl mx-auto">
            Join an elite team of young hockey creators and get amazing perks!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8 md:gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex-shrink-0">
                  <CheckCircle className="w-8 h-8 text-hockey-red" />
                </div>
                <p className="text-lg md:text-xl text-hockey-black font-semibold leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
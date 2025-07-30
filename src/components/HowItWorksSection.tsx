import { ArrowRight } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    {
      step: "1",
      title: "Apply Below",
      description: "Fill out our simple form with your info and social profiles"
    },
    {
      step: "2", 
            title: "Post Fun Training Videos", 
      description: "Create awesome content showing off your skills with our gear"

    },
    {
      step: "3",
            title: "Get Your Gear",
      description: "Receive free Better Hockey training equipment delivered to your door"

    },
    {
      step: "4",
      title: "Become Part of the Team",
      description: "Join our global creator community and get featured!"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-hockey-black to-hockey-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-ice-white mb-6">
            How It Works
          </h2>
          <p className="text-xl text-ice-gray max-w-2xl mx-auto">
            Four simple steps to join the Better Hockey ambassador team
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((stepItem, index) => (
              <div key={index} className="relative">
                <div className="bg-card rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                  <div className="w-16 h-16 bg-hockey-red rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-black text-ice-white">
                      {stepItem.step}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-hockey-black mb-4">
                    {stepItem.title}
                  </h3>
                  
                  <p className="text-hockey-gray leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-hockey-red" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
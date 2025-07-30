export const ProductHighlights = () => {
  const products = [
    {
      name: "Stickhandling Trainer",
      description: "Master your hands with our premium training system"
    },
    {
      name: "Extreme Flooring Tiles", 
      description: "Professional synthetic ice for home training"
    },
    {
      name: "Passer",
      description: "Perfect your passing accuracy and timing"
    },
    {
      name: "Pro Goalie Cover",
      description: "Elite goalie training targets for precision shooting"
    },
    {
      name: "Better Hockey Shirts",
      description: "Rep the brand with our premium apparel"
    }
  ];

  return (
    <section className="py-20 bg-ice-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-hockey-black mb-6">
            Get This{" "}
            <span className="text-hockey-red">Amazing Gear</span>
          </h2>
          <p className="text-xl text-hockey-gray max-w-2xl mx-auto">
            Professional training equipment used by elite players worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-hockey-red to-hockey-red-light rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="w-12 h-12 bg-ice-white rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-black text-hockey-red">🏒</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-hockey-black mb-3">
                {product.name}
              </h3>
              
              <p className="text-hockey-gray leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
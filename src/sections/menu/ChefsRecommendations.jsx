import { motion } from 'framer-motion';

const recommendations = [
  {
    name: "Smoked Yak Cheese Tartlet",
    reason: "A delicate balance of robust smokiness and refined pastry. An homage to the high Himalayas.",
    pairing: "Pairs beautifully with an aged Chardonnay.",
    price: "$18",
    img: "/images/about/private_dining.png"
  },
  {
    name: "Slow-Braised Goat Curry",
    reason: "Cooked over 12 hours using traditional methods, the meat falls apart effortlessly.",
    pairing: "Best enjoyed with a robust Syrah or our house-infused Aila.",
    price: "$42",
    img: "/images/about/restaurant_story.png"
  }
];

export default function ChefsRecommendations() {
  return (
    <section className="py-24 md:py-32 bg-matteBlack text-softIvory">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-playfair text-champagneGold mb-6"
          >
            Chef's Recommendations
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
          {recommendations.map((rec, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="group flex flex-col"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-8 w-full md:w-4/5 mx-auto">
                <div className="absolute inset-0 bg-champagneGold/0 group-hover:bg-champagneGold/10 transition-colors duration-500 z-10" />
                <img src={rec.img} alt={rec.name} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
              </div>
              <div className="w-full md:w-4/5 mx-auto text-center">
                <h3 className="text-2xl font-playfair mb-4 transition-colors group-hover:text-champagneGold">{rec.name}</h3>
                <p className="text-mutedText font-inter text-sm mb-4 leading-relaxed">"{rec.reason}"</p>
                <div className="w-12 h-[1px] bg-champagneGold/30 mx-auto mb-4" />
                <p className="text-softIvory/70 font-inter text-xs uppercase tracking-widest mb-6">{rec.pairing}</p>
                <span className="text-xl font-playfair text-champagneGold">{rec.price}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

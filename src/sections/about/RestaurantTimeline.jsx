import { motion } from 'framer-motion';

const milestones = [
  { year: "2015", title: "Founded", desc: "A modest beginning with a grand vision." },
  { year: "2017", title: "First Signature Dish", desc: "The creation of our iconic Truffle Risotto." },
  { year: "2019", title: "Expansion", desc: "Opening the private dining sanctuary." },
  { year: "2022", title: "First Star", desc: "Awarded our first Michelin star." },
  { year: "Today", title: "Continuing the Legacy", desc: "Pushing boundaries every single day." }
];

export default function RestaurantTimeline() {
  return (
    <section className="py-10 md:py-16 bg-matteBlack overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-playfair text-softIvory mb-6"
          >
            Our Journey
          </motion.h2>
        </div>

        <div className="relative">
          {/* Animated Line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 hidden md:block" />
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute top-1/2 left-0 w-full h-[1px] bg-champagneGold origin-left -translate-y-1/2 hidden md:block"
          />

          <div className="flex flex-col md:flex-row justify-between relative gap-12 md:gap-0">
            {milestones.map((item, index) => (
              <div key={index} className="flex-1 flex flex-col items-center relative group">
                
                {/* Mobile vertical line */}
                {index !== 0 && (
                  <div className="h-12 w-[1px] bg-champagneGold/30 block md:hidden mb-4" />
                )}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.3 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-3 h-3 bg-matteBlack border-2 border-champagneGold rounded-full mb-6 relative z-10 group-hover:bg-champagneGold transition-colors duration-300 hidden md:block" />
                  <span className="text-champagneGold font-playfair text-xl mb-2">{item.year}</span>
                  <h4 className="text-softIvory font-inter font-medium mb-2">{item.title}</h4>
                  <p className="text-mutedText font-inter text-sm max-w-[150px]">{item.desc}</p>
                </motion.div>
                
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function SeasonalSpecials() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const xPos = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-matteBlack text-softIvory overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <h2 className="text-4xl md:text-5xl font-playfair text-champagneGold">Seasonal Specials</h2>
      </div>

      <motion.div style={{ x: xPos }} className="flex gap-8 px-6 md:px-20 w-[150vw] md:w-[120vw]">
        
        <div className="w-[80vw] md:w-[60vw] flex-shrink-0 group">
          <div className="relative aspect-video overflow-hidden mb-6">
            <img src="/images/about/kitchen_prep.png" alt="Mustang Apple Tart" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute top-4 left-4 bg-matteBlack/80 backdrop-blur-sm px-4 py-2 border border-white/10">
              <span className="text-xs font-inter uppercase tracking-widest text-softIvory">Autumn Collection</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-3xl font-playfair mb-3">Mustang Apple Tart</h3>
              <p className="text-mutedText font-inter leading-relaxed">Crisp apples sourced directly from the Mustang region, baked in a delicate pastry with wild honey glaze.</p>
            </div>
            <div className="border-l border-champagneGold/30 pl-6">
              <p className="text-sm font-inter text-champagneGold uppercase tracking-widest mb-2">Sommelier Suggestion</p>
              <p className="text-softIvory font-playfair text-lg">2018 Late Harvest Riesling</p>
            </div>
          </div>
        </div>

        <div className="w-[80vw] md:w-[60vw] flex-shrink-0 group">
          <div className="relative aspect-video overflow-hidden mb-6">
            <img src="/images/sekuwa.png" alt="Wild Boar Tareko" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute top-4 left-4 bg-matteBlack/80 backdrop-blur-sm px-4 py-2 border border-white/10">
              <span className="text-xs font-inter uppercase tracking-widest text-softIvory">Winter Collection</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-3xl font-playfair mb-3">Wild Boar Tareko</h3>
              <p className="text-mutedText font-inter leading-relaxed">Slow-cooked and crisped wild boar, marinated in a bold blend of indigenous spices and served with fermented radish.</p>
            </div>
            <div className="border-l border-champagneGold/30 pl-6">
              <p className="text-sm font-inter text-champagneGold uppercase tracking-widest mb-2">Sommelier Suggestion</p>
              <p className="text-softIvory font-playfair text-lg">Traditional Triple-Distilled Aila</p>
            </div>
          </div>
        </div>

      </motion.div>
    </section>
  );
}

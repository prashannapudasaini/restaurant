import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function OurStory() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"]
  });

  return (
    <section ref={containerRef} className="py-10 md:py-16 bg-deepCharcoal text-softIvory overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              {/* Mask reveal animation */}
              <motion.div 
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
                className="absolute inset-0 bg-champagneGold z-10"
              />
              <motion.div 
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="w-full h-full bg-[url('/images/about/restaurant_story.png')] bg-cover bg-center"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-playfair mb-10 text-champagneGold"
            >
              Our Story
            </motion.h2>

            <div className="space-y-6 text-mutedText font-inter text-lg leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Born from a deep-rooted passion for culinary excellence and family traditions, our restaurant began as a simple idea: to serve food that speaks to the soul. It was never just about feeding people; it was about sharing a piece of our heritage with every plate.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                The inspiration came from the bustling markets of our youth, where the aroma of fresh spices and the vibrant colors of seasonal produce ignited a lifelong love for cooking. We believe that true quality takes time, and we are committed to sourcing only the finest ingredients.
              </motion.p>
              
              <motion.blockquote
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.8 }}
                className="pl-6 border-l-2 border-champagneGold italic text-softIvory mt-8 text-2xl font-playfair leading-snug"
              >
                "Cooking is an art, but dining is an emotion. We strive to create moments that linger long after the last bite."
              </motion.blockquote>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

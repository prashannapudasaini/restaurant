import { motion } from 'framer-motion';

export default function IngredientsPhilosophy() {
  return (
    <section className="py-24 md:py-32 bg-deepCharcoal text-softIvory overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="w-full lg:w-1/2 order-2 lg:order-1 relative">
            <motion.div 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
              className="absolute inset-0 bg-champagneGold z-10"
            />
            <div className="relative aspect-[3/4] overflow-hidden">
              {/* Using hero_cinematic as fallback for ingredients since rate limit hit */}
              <img src="/images/about/hero_cinematic.png" alt="Himalayan Ingredients" className="w-full h-full object-cover filter brightness-75" />
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex flex-col justify-center">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-champagneGold tracking-[0.2em] text-sm uppercase mb-6 block font-inter"
            >
              The Foundation
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-playfair mb-10"
            >
              Earth to Plate
            </motion.h2>

            <div className="space-y-6 text-mutedText font-inter text-lg leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Our philosophy begins long before the kitchen. It begins in the terraced fields of the Himalayas, the vibrant local markets, and the careful hands of our local farmers.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We source rare spices like Timur (Himalayan Sichuan Pepper) and Jimbu directly from high-altitude foragers. By combining these ancestral ingredients with modern culinary techniques, we create flavors that are both profoundly familiar and astonishingly new.
              </motion.p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

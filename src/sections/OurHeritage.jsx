import { motion } from 'framer-motion';

export default function OurHeritage() {
  return (
    <section className="py-24 bg-richBlack text-warmIvory overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          <div className="w-full md:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative aspect-[4/5] overflow-hidden rounded-sm"
            >
              <div className="absolute inset-0 bg-premiumGold/10 z-10" />
              <img 
                src="/images/about/restaurant_story.png" 
                alt="Nepalese Culinary Heritage" 
                className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
              />
            </motion.div>
            
            {/* Decorative Element */}
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '50%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -left-4 top-1/4 w-[1px] bg-premiumGold hidden md:block"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-poppins text-premiumGold uppercase tracking-[0.2em] mb-4 text-sm font-semibold"
            >
              Our Heritage
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-playfair mb-8 leading-tight"
            >
              Rooted in the Himalayas
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-6 text-softCream/80 font-inter text-lg leading-relaxed"
            >
              <p>
                Our culinary journey begins in the high-altitude valleys and historic courtyards of Nepal. We carry forward centuries-old techniques, preserving the soul of traditional recipes while elevating them to modern fine dining standards.
              </p>
              <p>
                From hand-ground spices sourced directly from mountain foragers to the meticulous art of Newari feasts, every dish we serve is a tribute to our vibrant culture and an invitation to experience the true essence of Nepalese hospitality.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-10"
            >
               <button className="px-8 py-3 border border-premiumGold text-premiumGold font-poppins text-sm uppercase tracking-wider hover:bg-premiumGold hover:text-richBlack transition-all duration-300">
                  Discover Our Story
               </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

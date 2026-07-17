import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

export default function PrivateEvents() {
  return (
    <section className="py-24 bg-charcoal text-warmIvory relative">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-poppins text-premiumGold uppercase tracking-[0.2em] mb-4 text-sm font-semibold block"
          >
            Exclusive Dining
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-playfair"
          >
            Private Events & Gatherings
          </motion.h2>
        </div>

        <div className="relative group overflow-hidden rounded-sm">
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1.2 }}
             className="aspect-video w-full relative"
           >
             <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700 z-10" />
             <img 
               src="/images/about/private_dining.png" 
               alt="Private Dining Room" 
               className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
             />
             
             {/* Content Overlay */}
             <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="bg-richBlack/80 backdrop-blur-sm p-8 md:p-12 border border-premiumGold/30 max-w-2xl"
                >
                  <h3 className="text-2xl md:text-3xl font-playfair mb-4 text-premiumGold">The Himalayan Room</h3>
                  <p className="text-softCream/90 font-inter mb-8">
                    An intimate sanctuary designed for your most important celebrations. Featuring a bespoke tasting menu tailored by our Executive Chef and dedicated sommelier service.
                  </p>
                  <button className="flex items-center gap-2 mx-auto text-premiumGold font-poppins uppercase tracking-widest text-sm hover:text-white transition-colors">
                    Inquire Now <FiArrowRight />
                  </button>
                </motion.div>
             </div>
           </motion.div>
        </div>

      </div>
    </section>
  );
}

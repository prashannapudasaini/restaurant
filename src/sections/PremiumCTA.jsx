import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function PremiumCTA() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={sectionRef} className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 -z-10 h-[140%] w-full"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1920&auto=format&fit=crop")' }}
        ></div>
        <div className="absolute inset-0 bg-richBlack/80 mix-blend-multiply"></div>
      </motion.div>

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto glass p-12 md:p-20 rounded-sm"
        >
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-warmIvory mb-6 leading-tight">
            Experience Dining <br/>
            <span className="italic font-light text-premiumGold">Beyond Expectations</span>
          </h2>
          <p className="font-inter text-softCream/80 text-lg mb-10 max-w-xl mx-auto font-light">
            Indulge in a symphony of flavors crafted with passion. Your unforgettable evening awaits at Five Beans Cafe.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="#reservations" 
              className="px-8 py-4 bg-premiumGold text-richBlack font-poppins font-semibold uppercase tracking-wider hover:bg-white transition-colors duration-300 w-full sm:w-auto"
            >
              Book A Table
            </a>
            <a 
              href="#menu" 
              className="px-8 py-4 border border-warmIvory text-warmIvory font-poppins font-semibold uppercase tracking-wider hover:bg-warmIvory hover:text-richBlack transition-all duration-300 w-full sm:w-auto"
            >
              View Menu
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

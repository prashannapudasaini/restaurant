import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const experiences = [
  {
    id: 1,
    title: 'Fine Dining Hall',
    desc: 'The heart of Five Beans Cafe. Experience the vibrant energy of our main dining room under crystal chandeliers.',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Private Dining',
    desc: 'Intimate spaces designed for exclusive gatherings, complete with a dedicated service team.',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Wine Lounge',
    desc: 'A sophisticated sanctuary boasting an award-winning cellar of over 2,000 vintages.',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1000&auto=format&fit=crop'
  }
];

export default function DiningExperience() {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={sectionRef} className="py-24 bg-charcoal overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl text-warmIvory mb-6"
          >
            The Five Beans Cafe <span className="text-gradient">Experience</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-inter text-softCream/70 max-w-2xl mx-auto"
          >
            Discover meticulously designed spaces that set the stage for unforgettable culinary journeys.
          </motion.p>
        </div>

        <div className="flex flex-col space-y-16 lg:space-y-32">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-20 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image Container */}
              <div className="w-full lg:w-3/5 overflow-hidden rounded-sm relative group">
                <div className="aspect-[16/10] overflow-hidden">
                  <motion.img 
                    style={{ y }}
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-[120%] object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                  />
                </div>
                {/* Decorative Frame */}
                <div className="absolute inset-4 border border-white/20 transition-transform duration-500 group-hover:scale-[0.98]"></div>
              </div>

              {/* Text Container */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-2/5"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-poppins text-premiumGold font-bold text-lg">0{exp.id}</span>
                  <div className="w-12 h-[1px] bg-premiumGold"></div>
                </div>
                <h3 className="font-playfair text-3xl md:text-4xl text-warmIvory mb-6">
                  {exp.title}
                </h3>
                <p className="font-inter text-softCream/70 leading-relaxed mb-8">
                  {exp.desc}
                </p>
                <a 
                  href="#reservations" 
                  className="inline-flex items-center gap-3 font-poppins text-sm uppercase tracking-widest text-warmIvory hover:text-premiumGold transition-colors group/link"
                >
                  <span className="border-b border-transparent group-hover/link:border-premiumGold pb-1 transition-all">Explore</span>
                  <svg className="w-4 h-4 transform group-hover/link:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';

export default function MeetTheChef() {
  return (
    <section className="py-10 md:py-16 bg-deepCharcoal text-softIvory">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Chef Image with Clip-path reveal */}
          <div className="w-full lg:w-5/12 order-2 lg:order-1">
            <motion.div 
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
              className="relative aspect-[3/4]"
            >
              <img 
                src="/images/about/chef_portrait.png" 
                alt="Executive Chef" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-7/12 order-1 lg:order-2 flex flex-col justify-center">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-champagneGold tracking-[0.2em] text-sm uppercase mb-4 font-inter block"
            >
              Meet The Chef
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-playfair mb-10"
            >
              Marcus Sterling
            </motion.h2>

            <div className="space-y-6 text-mutedText font-inter text-lg leading-relaxed max-w-2xl">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                With over two decades of culinary experience spanning across Europe and Asia, Chef Marcus brings a wealth of knowledge and a unique perspective to our kitchen. His approach is deeply rooted in classic French techniques, yet he remains endlessly curious about global flavor profiles.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                "A dish should tell a story," he often says. "It should reflect the journey of the ingredients, the care of the farmers, and the passion of the cooks." This philosophy is evident in every meticulously crafted plate that leaves his kitchen.
              </motion.p>
            </div>

            {/* Signature Drawing Animation */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-12"
            >
              <svg viewBox="0 0 300 100" className="w-48 h-auto stroke-champagneGold fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeInOut", delay: 1.2 }}
                  d="M10,80 Q30,20 50,50 T90,30 Q120,90 140,50 T180,40 Q210,80 230,50 T280,60"
                />
              </svg>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

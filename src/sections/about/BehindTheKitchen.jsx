import { motion } from 'framer-motion';

export default function BehindTheKitchen() {
  return (
    <section className="py-10 md:py-16 bg-matteBlack overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-playfair text-softIvory mb-6"
          >
            Behind The Kitchen
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-mutedText font-inter text-lg max-w-2xl mx-auto"
          >
            A symphony of precision, heat, and passion. Step into the heart of our restaurant.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="w-full md:w-2/3 overflow-hidden group">
            <motion.div
              initial={{ scale: 1.05 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-[500px] w-full"
            >
              <img src="/images/about/kitchen_prep.png" alt="Kitchen Preparation" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            </motion.div>
          </div>
          
          <div className="w-full md:w-1/3 bg-deepCharcoal p-12 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-playfair text-champagneGold mb-4">The Preparation</h3>
              <p className="text-mutedText font-inter">Before the first flame is ignited, hours of meticulous preparation ensure every ingredient is treated with the respect it deserves.</p>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}

import { motion } from 'framer-motion';

export default function ClosingStatement() {
  return (
    <section className="py-10 md:py-16 bg-matteBlack text-softIvory relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-playfair leading-tight mb-10 text-champagneGold">
            Great food satisfies hunger.<br />
            <span className="text-softIvory">Great hospitality creates memories.</span>
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-10 py-5 bg-champagneGold text-matteBlack overflow-hidden w-full sm:w-auto"
            >
              <span className="relative z-10 font-inter text-sm tracking-widest uppercase font-semibold">Reserve A Table</span>
              <div className="absolute inset-0 bg-softIvory transform scale-x-0 origin-center transition-transform duration-500 ease-out group-hover:scale-x-100 z-0" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-10 py-5 border border-champagneGold/50 text-softIvory overflow-hidden w-full sm:w-auto transition-colors hover:text-matteBlack hover:border-champagneGold"
            >
              <span className="relative z-10 font-inter text-sm tracking-widest uppercase font-semibold">Explore Menu</span>
              <div className="absolute inset-0 bg-champagneGold transform scale-x-0 origin-center transition-transform duration-500 ease-out group-hover:scale-x-100 z-0" />
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

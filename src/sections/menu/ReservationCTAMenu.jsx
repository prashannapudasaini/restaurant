import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ReservationCTAMenu() {
  return (
    <section className="py-32 md:py-40 bg-matteBlack text-softIvory relative overflow-hidden">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <motion.div 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full bg-[url('/images/about/hero_cinematic.png')] bg-cover bg-center"
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-20">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-champagneGold tracking-[0.2em] text-sm uppercase mb-6 block font-inter">Join Us</span>
          
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-playfair leading-tight mb-12">
            Reserve Your Table For An <br className="hidden md:block" />
            <span className="text-champagneGold italic">Unforgettable Evening</span>
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/reservations" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-12 py-5 bg-champagneGold text-matteBlack overflow-hidden w-full"
              >
                <span className="relative z-10 font-inter text-sm tracking-widest uppercase font-semibold">Book A Table</span>
                <div className="absolute inset-0 bg-softIvory transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 z-0" />
              </motion.button>
            </Link>
            
            <Link to="/contact" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-12 py-5 border border-champagneGold/50 text-softIvory overflow-hidden w-full transition-colors hover:text-matteBlack hover:border-champagneGold"
              >
                <span className="relative z-10 font-inter text-sm tracking-widest uppercase font-semibold">Private Events</span>
                <div className="absolute inset-0 bg-champagneGold transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 z-0" />
              </motion.button>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

import { motion } from 'framer-motion';

export default function GalleryPreview() {
  return (
    <section className="py-10 md:py-16 bg-matteBlack">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 auto-rows-[300px] md:auto-rows-[400px]">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="md:col-span-8 relative overflow-hidden group rounded-sm"
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />
            <img src="/images/about/hero_cinematic.png" alt="Restaurant Interior" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:col-span-4 relative overflow-hidden group rounded-sm"
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />
            <img src="/images/about/kitchen_prep.png" alt="Plating" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="md:col-span-5 relative overflow-hidden group rounded-sm"
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />
            <img src="/images/about/chef_portrait.png" alt="Chef" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="md:col-span-7 relative overflow-hidden group rounded-sm"
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />
            <img src="/images/about/private_dining.png" alt="Private Dining" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
          </motion.div>

        </div>

      </div>
    </section>
  );
}

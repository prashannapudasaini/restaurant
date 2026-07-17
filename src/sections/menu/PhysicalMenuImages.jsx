import { motion } from 'framer-motion';

export default function PhysicalMenuImages() {
  return (
    <section className="py-24 bg-matteBlack overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair text-champagneGold">The Physical Menu</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "/images/menu/menu_page_1.png",
            "/images/menu/menu_page_2.png",
            "/images/menu/menu_page_3.png",
            "/images/menu/menu_page_4.png"
          ].map((src, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="aspect-[3/4] relative group overflow-hidden border border-white/10"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              {/* Note: Placeholders used until image generation quota resets */}
              <img src={src} alt={`Menu Page ${index + 1}`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter brightness-75" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const barImages = [
  { id: 1, url: '/images/about/hero_cinematic.png', category: 'Cocktails' },
  { id: 2, url: '/images/momo.png', category: 'Wines' },
  { id: 3, url: '/images/about/private_dining.png', category: 'Atmosphere' },
  { id: 4, url: '/images/sekuwa.png', category: 'Spirits' },
  { id: 5, url: '/images/about/chef_portrait.png', category: 'Cocktails' },
  { id: 6, url: '/images/thali.png', category: 'Wines' },
  { id: 7, url: '/images/about/kitchen_prep.png', category: 'Atmosphere' },
  { id: 8, url: '/images/chowmein.png', category: 'Spirits' },
  { id: 9, url: '/images/about/restaurant_story.png', category: 'Atmosphere' },
  { id: 10, url: '/images/pizza.png', category: 'Cocktails' },
];

const categories = ['All', 'Cocktails', 'Wines', 'Spirits', 'Atmosphere'];

export default function BarProducts() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = activeCategory === 'All'
    ? barImages
    : barImages.filter(img => img.category === activeCategory);

  return (
    <section id="bar-products" className="py-24 md:py-32 bg-matteBlack border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">

        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-inter text-champagneGold uppercase tracking-[0.2em] mb-4 text-sm"
            >
              Exquisite Selection
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-playfair text-4xl md:text-5xl lg:text-6xl text-softIvory"
            >
              Bar Products
            </motion.h2>
          </div>

          <div className="flex flex-wrap gap-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`font-inter text-xs uppercase tracking-widest pb-2 border-b transition-all duration-300 ${activeCategory === category
                  ? 'text-champagneGold border-champagneGold'
                  : 'text-mutedText border-transparent hover:text-softIvory hover:border-white/20'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Layout */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="break-inside-avoid relative group cursor-pointer overflow-hidden border border-white/5"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.url}
                  alt={`Bar item ${image.id}`}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110 filter brightness-75 group-hover:brightness-100"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="font-inter text-sm text-softIvory tracking-[0.2em] uppercase border border-softIvory/30 px-8 py-3 backdrop-blur-sm transition-transform duration-500 scale-95 group-hover:scale-100">
                    View
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-8 right-8 text-softIvory hover:text-champagneGold transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <FiX size={32} />
            </button>

            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              src={selectedImage.url}
              alt="Lightbox view"
              className="max-w-full max-h-full object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

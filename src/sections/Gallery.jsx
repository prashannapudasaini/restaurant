import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const galleryImages = [
  { id: 1, url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop', category: 'Food', aspect: 'aspect-[3/4]' },
  { id: 2, url: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=800&auto=format&fit=crop', category: 'Interior', aspect: 'aspect-[4/3]' },
  { id: 3, url: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop', category: 'Food', aspect: 'aspect-[1/1]' },
  { id: 4, url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop', category: 'Interior', aspect: 'aspect-[3/4]' },
  { id: 5, url: 'https://img.magnific.com/free-photo/top-view-table-full-food_23-2149209253.jpg?semt=ais_hybrid&w=740&q=80', category: 'Chef', aspect: 'aspect-[4/3]' },
  { id: 6, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRptoagYcL_zHwkKtK4XwrJy_vAI64XsefV29zydrBQL4XO4Z1VUusIRAC1&s=10', category: 'Events', aspect: 'aspect-[1/1]' },
  { id: 7, url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop', category: 'Interior', aspect: 'aspect-[3/4]' },
  { id: 8, url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop', category: 'Food', aspect: 'aspect-[4/3]' },
];

const categories = ['All', 'Food', 'Interior', 'Events', 'Chef'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-charcoal border-t border-white/5">
      <div className="container mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-inter text-copperBronze uppercase tracking-[0.2em] mb-4 text-sm"
            >
              Visual Journey
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-playfair text-4xl md:text-5xl text-warmIvory"
            >
              Five Beans Cafe <span className="text-gradient">Gallery</span>
            </motion.h2>
          </div>

          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`font-poppins text-xs uppercase tracking-widest pb-1 border-b transition-all duration-300 ${activeCategory === category
                  ? 'text-premiumGold border-premiumGold'
                  : 'text-softCream/60 border-transparent hover:text-warmIvory hover:border-white/20'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Layout */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-sm"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.url}
                  alt={`Gallery item ${image.id}`}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-richBlack/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="font-poppins text-sm text-warmIvory tracking-widest uppercase border border-warmIvory/30 px-6 py-2 rounded-sm backdrop-blur-sm">
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-richBlack/95 p-4 md:p-12 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-8 right-8 text-warmIvory hover:text-premiumGold transition-colors"
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
              className="max-w-full max-h-full object-contain rounded-sm shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

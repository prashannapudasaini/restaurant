import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  "Starters (Tapas)",
  "Signature Momo",
  "Himalayan Grill (Sekuwa)",
  "Traditional Thalis",
  "Desserts",
  "Beverages"
];

export default function MenuCategories() {
  const [activeCategory, setActiveCategory] = useState(categories[1]);

  return (
    <section className="py-12 bg-matteBlack sticky top-[80px] z-40 border-b border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex overflow-x-auto hide-scrollbar gap-4 md:justify-center items-center py-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className="relative px-6 py-3 rounded-full text-sm font-inter tracking-widest uppercase whitespace-nowrap transition-colors duration-300"
              style={{
                color: activeCategory === category ? '#0F0F10' : '#A8A39B'
              }}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-champagneGold rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

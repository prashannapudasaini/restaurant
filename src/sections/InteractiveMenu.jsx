import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Starters', 'Main Course', 'Seafood', 'Steaks', 'Desserts', 'Drinks'];

const menuItems = [
  { id: 1, name: 'Tuna Tartare', category: 'Starters', desc: 'Yellowfin tuna, avocado mousse, ponzu, sesame crisp.', price: 'NPR 3,400', diet: ['GF'] },
  { id: 2, name: 'Burrata & Heirloom', category: 'Starters', desc: 'Imported burrata, heirloom tomatoes, aged balsamic, micro basil.', price: 'NPR 2,900', diet: ['V', 'GF'] },
  { id: 3, name: 'Lobster Bisque', category: 'Starters', desc: 'Butter-poached Maine lobster, cognac cream, chive oil.', price: 'NPR 3,100', diet: [] },
  { id: 4, name: 'Duck Confit', category: 'Main Course', desc: 'Crispy duck leg, beluga lentils, cherry gastrique, frisée.', price: 'NPR 5,000', diet: ['GF'] },
  { id: 5, name: 'Herb-Crusted Rack of Lamb', category: 'Main Course', desc: 'Colorado lamb, mint chimichurri, roasted root vegetables.', price: 'NPR 7,000', diet: [] },
  { id: 6, name: 'Chilean Sea Bass', category: 'Seafood', desc: 'Miso glaze, bok choy, shiitake dashi, ginger scallion.', price: 'NPR 5,800', diet: ['GF'] },
  { id: 7, name: 'Dry-Aged Tomahawk', category: 'Steaks', desc: '32oz prime ribeye, bone marrow butter, blistered vine tomatoes. (For two)', price: 'NPR 21,500', diet: ['GF'] },
  { id: 8, name: 'Filet Mignon', category: 'Steaks', desc: '8oz center cut, truffle potato purée, asparagus, bordelaise.', price: 'NPR 7,800', diet: [] },
  { id: 9, name: 'Vanilla Bean Panna Cotta', category: 'Desserts', desc: 'Madagascar vanilla, mixed berry compote, almond tuile.', price: 'NPR 1,900', diet: ['V'] },
  { id: 10, name: 'Smoked Old Fashioned', category: 'Drinks', desc: 'Woodford Reserve, angostura bitters, maple syrup, hickory smoke.', price: 'NPR 2,600', diet: [] },
];

export default function InteractiveMenu() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-24 bg-richBlack border-y border-white/5 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl text-warmIvory mb-8"
          >
            The <span className="text-gradient">Menu</span>
          </motion.h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`font-poppins text-xs uppercase tracking-widest pb-2 border-b-2 transition-all duration-300 ${
                  activeCategory === category 
                    ? 'text-premiumGold border-premiumGold' 
                    : 'text-softCream/60 border-transparent hover:text-warmIvory'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative"
              >
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-playfair text-xl text-warmIvory flex items-center gap-3">
                    {item.name}
                    {item.diet.length > 0 && (
                      <span className="flex gap-1">
                        {item.diet.map(d => (
                          <span key={d} className="text-[9px] font-poppins border border-copperBronze text-copperBronze px-1 rounded-sm" title={d === 'V' ? 'Vegetarian' : 'Gluten Free'}>
                            {d}
                          </span>
                        ))}
                      </span>
                    )}
                  </h3>
                  <div className="flex-1 border-b border-dotted border-white/20 mx-4 relative top-[-6px] group-hover:border-premiumGold/50 transition-colors"></div>
                  <span className="font-poppins text-lg text-premiumGold">{item.price}</span>
                </div>
                <p className="font-inter text-softCream/60 text-sm font-light">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-20 text-center">
          <a href="#" className="inline-block border-b border-premiumGold text-premiumGold font-poppins text-sm uppercase tracking-wider pb-1 hover:text-warmIvory hover:border-warmIvory transition-colors">
            Download Full PDF Menu
          </a>
        </div>
      </div>
    </section>
  );
}

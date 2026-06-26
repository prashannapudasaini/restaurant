import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiPlus } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const dishes = [
  {
    id: 1,
    name: 'Wagyu Tenderloin',
    category: 'Steaks',
    description: 'A5 Japanese Wagyu, truffle pomme purée, wild mushrooms, bone marrow jus.',
    price: 'NPR 15,000',
    calories: '850 cal',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Pan-Seared Scallops',
    category: 'Seafood',
    description: 'Hokkaido scallops, cauliflower silk, caviar, brown butter emulsion.',
    price: 'NPR 5,500',
    calories: '320 cal',
    image: 'https://images.unsplash.com/photo-1626776876729-bab4369a5a5a?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Truffle Risotto',
    category: 'Main Courses',
    description: 'Acquerello rice, aged parmigiano, shaved seasonal black truffles.',
    price: 'NPR 6,600',
    calories: '600 cal',
    image: 'https://goldenspoonkitchen.com/images/risotto.png',
  },
  {
    id: 4,
    name: 'Gold Leaf Chocolate',
    category: 'Desserts',
    description: 'Valrhona dark chocolate dome, hazelnut praline, 24k gold, raspberry.',
    price: 'NPR 3,600',
    calories: '450 cal',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1000&auto=format&fit=crop',
  }
];

export default function SignatureDishes() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.dish-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="menu" className="py-24 bg-charcoal relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-inter text-copperBronze uppercase tracking-[0.2em] mb-4 text-sm"
          >
            Culinary Masterpieces
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl text-warmIvory mb-6"
          >
            Signature <span className="text-gradient">Dishes</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="dish-card group relative overflow-hidden bg-richBlack rounded-sm border border-white/5"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-richBlack via-richBlack/20 to-transparent opacity-80"></div>

                <div className="absolute top-4 left-4 bg-charcoal/80 backdrop-blur-sm px-3 py-1 rounded-sm border border-white/10">
                  <span className="font-poppins text-xs text-premiumGold uppercase tracking-wider">{dish.category}</span>
                </div>
              </div>

              <div className="p-8 relative">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-playfair text-2xl text-warmIvory">{dish.name}</h3>
                  <span className="font-poppins text-xl text-premiumGold">{dish.price}</span>
                </div>

                <p className="font-inter text-softCream/70 text-sm leading-relaxed mb-6">
                  {dish.description}
                </p>

                <div className="flex justify-between items-center pt-6 border-t border-white/10">
                  <span className="font-inter text-xs text-white/50">{dish.calories}</span>
                  <button className="flex items-center gap-2 font-poppins text-xs uppercase tracking-wider text-copperBronze hover:text-premiumGold transition-colors group/btn">
                    <span>Add to Experience</span>
                    <FiPlus className="group-hover/btn:rotate-90 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

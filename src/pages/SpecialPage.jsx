import React, { useState, useEffect, useCallback, useRef } from 'react';
import Header from '../components/Header';
import { motion, AnimatePresence } from 'framer-motion';

const dishes = [
  {
    name: 'Chicken Lolipop',
    description: 'Succulent chicken wings marinated in a spicy red chili garlic sauce and deep fried to perfection, served with a tangy dipping sauce.',
    image: 'https://prestige.webxnepal.com/images/special/chicken-lolipop-1.webp'
  },
  {
    name: 'Chicken Wings',
    description: 'Crispy and tender chicken wings tossed in our signature sauce. Perfectly cooked for a delicious, mouthwatering savory experience.',
    image: 'https://prestige.webxnepal.com/images/special/chicken-wings-1.webp'
  },
  {
    name: 'Chicken Popcorn',
    description: 'Bite-sized crispy chicken pieces, perfectly seasoned with our house spices. A fantastic starter to get your appetite going.',
    image: 'https://prestige.webxnepal.com/images/special/chicken-popcorn-1.webp'
  },
  {
    name: 'Buff Chilly',
    description: 'Tender buff meat stir-fried with hot chilies and savory sauces. A traditional favorite with a fiery, bold kick.',
    image: 'https://prestige.webxnepal.com/images/special/buff-chilly-1.webp'
  },
  {
    name: 'BBQ Ribs',
    description: 'Slow-cooked, fall-off-the-bone ribs glazed in smoky BBQ sauce. Served hot for a deeply satisfying, rich flavor profile.',
    image: 'https://prestige.webxnepal.com/images/special/bbq-ribs-1.webp'
  },
  {
    name: 'BBQ Fish Fillet',
    description: 'Fresh fish fillet grilled to perfection with a smoky BBQ flavor. A delicate yet richly seasoned seafood delight.',
    image: 'https://prestige.webxnepal.com/images/special/bbq-fish-fillet-1.webp'
  },
  {
    name: 'Honey BBQ Chicken',
    description: 'Sweet and smoky BBQ chicken glazed with pure natural honey. The perfect balance of sweet and savory notes.',
    image: 'https://prestige.webxnepal.com/images/special/honey-bbq-chicken-1.webp'
  },
  {
    name: 'BBQ Prawn',
    description: 'Juicy prawns grilled with an aromatic BBQ marinade. A deliciously light option with a bold, smoky taste.',
    image: 'https://prestige.webxnepal.com/images/special/bbq-prawn-1.webp'
  },
  {
    name: 'Classic Mojito',
    description: 'Refreshing mix of mint, lime, white rum, and club soda. A classic, cooling beverage perfect for any occasion.',
    image: '/images/special/mojito.png',
    isDrink: true
  },
  {
    name: 'Classic Margarita',
    description: 'Tequila, triple sec, and fresh strawberry puree served with a sugar rim. A vibrant and fruity tropical escape.',
    image: '/images/special/margarita.png',
    isDrink: true
  },
  {
    name: 'Iced Caramel Macchiato',
    description: 'Espresso layered over cold milk and sweet caramel syrup. A wonderfully creamy and energizing coffee refreshment.',
    image: '/images/special/macchiato.png',
    isDrink: true
  }
];

export default function SpecialPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isScrolling = useRef(false);

  const nextDish = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % dishes.length);
  }, []);

  const prevDish = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + dishes.length) % dishes.length);
  }, []);

  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrolling.current) return;
      if (Math.abs(e.deltaY) < 30) return; // Ignore small movements

      isScrolling.current = true;
      if (e.deltaY > 0) {
        nextDish();
      } else {
        prevDish();
      }
      setTimeout(() => isScrolling.current = false, 1000);
    };

    let touchStartY = 0;
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (isScrolling.current) return;
      const touchEndY = e.touches[0].clientY;
      const deltaY = touchStartY - touchEndY;

      if (Math.abs(deltaY) > 40) {
        isScrolling.current = true;
        if (deltaY > 0) {
          nextDish();
        } else {
          prevDish();
        }
        setTimeout(() => isScrolling.current = false, 1000);
      }
    };

    window.addEventListener('wheel', handleWheel);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [nextDish, prevDish]);

  return (
    <main className="w-full h-screen overflow-hidden bg-black font-inter relative">
      <Header />
      <section
        className="relative w-full h-full overflow-hidden flex flex-col justify-center transition-all duration-1000 ease-in-out select-none"
        style={{ background: 'radial-gradient(circle at center, rgba(30, 58, 138, 0.4) 0%, #0f172a 60%, #020617 100%)', touchAction: 'none' }}
      >
        {/* Left Title */}
        <div className="absolute left-[5%] md:left-[8%] lg:left-[12%] top-1/2 -translate-y-1/2 z-30 w-[28%] md:w-[25%] lg:w-[22%]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-5xl lg:text-[4vw] text-white tracking-widest leading-tight font-playfair uppercase drop-shadow-lg">
                {dishes[currentIndex].name}
              </h1>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Description */}
        <div className="absolute right-[5%] md:right-[8%] lg:right-[12%] top-1/2 -translate-y-1/2 z-30 w-[28%] md:w-[25%] lg:w-[22%] text-right flex justify-end">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-white/80 text-sm md:text-base lg:text-[1.2vw] leading-relaxed tracking-wider drop-shadow-md">
                {dishes[currentIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Center Plate Container */}
        <div
          className="absolute w-full h-full pointer-events-none flex items-center justify-center z-20"
          style={{
            '--r-plate': 'clamp(220px, 40vh, 450px)'
          }}
        >
          {/* Active Dish Image */}
          <div
            className="absolute left-1/2 top-1/2 origin-center pointer-events-none z-5"
            style={{
              width: 'calc(var(--r-plate) * 2)',
              height: 'calc(var(--r-plate) * 2)',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.8, rotate: -60 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: 60 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  {/* Extraordinary Glowing Aura */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-premiumGold/20 blur-[80px] pointer-events-none transition-all duration-1000" />

                  <img
                    src={dishes[currentIndex].image}
                    alt={dishes[currentIndex].name}
                    className={`absolute max-h-full max-w-full object-contain ${dishes[currentIndex].isDrink ? 'mix-blend-screen' : 'drop-shadow-2xl'
                      }`}
                    style={{
                      filter: dishes[currentIndex].isDrink ? 'contrast(1.2)' : 'drop-shadow(0 30px 40px rgba(0,0,0,0.9))'
                    }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

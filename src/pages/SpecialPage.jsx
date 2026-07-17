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

  const angleStep = 360 / dishes.length;
  const currentRotation = -currentIndex * angleStep;

  return (
    <main className="w-full h-screen overflow-hidden bg-black font-inter relative">
      <Header />
      <section 
        className="relative w-full h-full overflow-hidden flex flex-col justify-between transition-all duration-1200 ease-in-out select-none"
        style={{ background: 'radial-gradient(circle at bottom center, rgba(30, 58, 138, 0.4) 0%, #0f172a 60%, #020617 100%)', touchAction: 'none' }}
      >
        {/* Title and Description */}
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 text-center z-20 flex flex-col items-center max-w-2xl xl:max-w-[60vw] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <h1 className="text-3xl md:text-5xl lg:text-[3vw] text-white tracking-widest mb-4 leading-tight font-playfair uppercase drop-shadow-lg">
                {dishes[currentIndex].name}
              </h1>
              <p className="text-white text-xs md:text-sm xl:text-[1vw] leading-relaxed tracking-wider mb-6 text-center max-w-lg md:max-w-xl xl:max-w-[40vw] mx-auto opacity-80 line-clamp-2 drop-shadow-md">
                {dishes[currentIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Previous Button */}
        <button 
          className="absolute left-2 sm:left-4 md:left-8 lg:left-16 xl:left-24 top-[32%] md:top-[40%] xl:top-1/2 -translate-y-1/2 z-30 size-10 md:size-16 xl:size-[4vw] rounded-full border border-white/40 bg-black/20 backdrop-blur-xl flex items-center justify-center group hover:bg-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer"
          onClick={prevDish}
          aria-label="Previous dish"
        >
          <span className="text-white/60 group-hover:text-white group-hover:-translate-x-0.5 transition-all text-2xl md:text-4xl xl:text-[2.5vw]">‹</span>
        </button>

        {/* Next Button */}
        <button 
          className="absolute right-2 sm:right-4 md:right-8 lg:right-16 xl:right-24 top-[32%] md:top-[40%] xl:top-1/2 -translate-y-1/2 z-30 size-10 md:size-16 xl:size-[4vw] rounded-full border border-white/40 bg-black/20 backdrop-blur-xl flex items-center justify-center group hover:bg-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer"
          onClick={nextDish}
          aria-label="Next dish"
        >
          <span className="text-white/60 group-hover:text-white group-hover:translate-x-0.5 transition-all text-2xl md:text-4xl xl:text-[2.5vw]">›</span>
        </button>

        {/* Container with dynamic variables */}
        <div 
          className="slider-container relative w-full h-full pointer-events-none flex items-end justify-center z-20 [--r-text:50vw] sm:[--r-text:58vw] md:[--r-text:60vw] xl:[--r-text:23vw] [--r-plate:60vw] sm:[--r-plate:68vw] md:[--r-plate:65vw] xl:[--r-plate:26vw] [--center-y:75%] md:[--center-y:85%] xl:[--center-y:90%]"
        >
          {/* Center Dot Indicator */}
          <div 
            className="absolute left-1/2 pointer-events-none z-30 w-0 h-0 origin-center" 
            style={{ top: 'var(--center-y)', transform: 'translate(-50%, -50%) rotate(0deg)' }}
          >
            <div 
              className="size-3.5 md:size-5 xl:size-[0.8vw] rounded-full bg-white shadow-[0_0_12px_#ffffff,0_0_24px_rgba(255,255,255,0.7)] border-2 border-black" 
              style={{ transform: 'translate(-50%, -50%) translateY(calc(var(--r-text) * -0.94))' }}
            />
          </div>

          {/* Rotating Text Wheel */}
          <motion.div 
            className="absolute left-1/2 origin-center pointer-events-none"
            style={{ 
              top: 'var(--center-y)', 
              width: 'calc(var(--r-text) * 2)', 
              height: 'calc(var(--r-text) * 2)',
            }}
            initial={{ x: "-50%", y: "-50%", rotate: currentRotation }}
            animate={{ x: "-50%", y: "-50%", rotate: currentRotation }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          >
            {/* Dashed outer ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-white/15 pointer-events-none scale-[0.94]" />
            
            {dishes.map((dish, idx) => {
              const rotation = idx * angleStep;
              const isActive = idx === currentIndex;
              
              return (
                <div 
                  key={idx}
                  className="absolute left-1/2 top-1/2 z-10 origin-center pointer-events-auto cursor-pointer"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotation}deg) translateY(calc(var(--r-text) * -1))`
                  }}
                  onClick={() => setCurrentIndex(idx)}
                >
                  <div 
                    className={`w-64 md:w-72 h-8 md:h-10 xl:w-[18vw] xl:h-[3vw] flex items-center justify-center transition-all duration-700 ease-out ${
                      isActive ? 'text-white opacity-100' : 'text-white/40 hover:text-white/65 opacity-80'
                    }`}
                  >
                    <svg viewBox="0 0 300 40" className="w-full h-full overflow-visible pointer-events-none">
                      <path id={`labelCurve-${idx}`} d="M 10,35 Q 150,-5 290,35" fill="none" stroke="transparent" />
                      <text className="fill-current text-sm md:text-xl xl:text-[0.8vw] tracking-[0.2em] font-medium uppercase" textAnchor="middle">
                        <textPath href={`#labelCurve-${idx}`} startOffset="50%">{dish.name}</textPath>
                      </text>
                    </svg>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Active Dish Image */}
          <div 
            className="absolute left-1/2 origin-center pointer-events-none z-5 transition-all duration-800"
            style={{
              top: 'var(--center-y)',
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
                  {/* Glowing Aura */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-premiumGold/20 blur-[80px] pointer-events-none transition-all duration-1000" />
                  
                  <img 
                    src={dishes[currentIndex].image} 
                    alt={dishes[currentIndex].name}
                    className={`absolute max-h-full max-w-full object-contain ${
                      dishes[currentIndex].isDrink ? 'mix-blend-screen' : 'drop-shadow-2xl'
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

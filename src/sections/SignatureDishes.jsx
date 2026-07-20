import { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiPlus } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const dishes = [
  {
    id: 1,
    name: 'Momo',
    category: 'Dumplings',
    description: 'Authentic Nepalese steamed dumplings filled with spiced minced meat, served with a fiery and vibrant tomato-sesame chutney. A true taste of the Himalayas.',
    price: 'NPR 650',
    calories: '450 CAL',
    image: '/images/momo.png',
  },
  {
    id: 2,
    name: 'Pizza',
    category: 'Italian',
    description: 'Artisan Neapolitan style pizza baked in a traditional wood-fired oven. Topped with fresh basil, bubbling mozzarella, and a perfectly blistered crust.',
    price: 'NPR 1,200',
    calories: '800 CAL',
    image: '/images/pizza.png',
  },
  {
    id: 3,
    name: 'Samay Baji',
    category: 'Authentic',
    description: 'A traditional Nepalese festive platter featuring beaten rice, smoked meat, black soybeans, spicy potato salad, and boiled egg. A rich cultural culinary experience.',
    price: 'NPR 1,500',
    calories: '650 CAL',
    image: '/images/thali.png',
  },
  {
    id: 4,
    name: 'Sekuwa',
    category: 'Grilled',
    description: 'Premium spiced and marinated meat skewers, traditionally roasted over a natural wood fire. Served sizzling with a side of puffed rice and tangy fresh lime.',
    price: 'NPR 850',
    calories: '550 CAL',
    image: '/images/sekuwa.png',
  },
  {
    id: 5,
    name: 'Chowmein',
    category: 'Noodles',
    description: 'Wok-tossed stir-fried noodles mixed with tender chicken, fresh seasonal vegetables, and aromatic Nepalese spices. Served steaming hot in an elegant dark bowl.',
    price: 'NPR 550',
    calories: '600 CAL',
    image: '/images/chowmein.png',
  }
];

export default function SignatureDishes() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Blinking line effect on active index change
  useEffect(() => {
    gsap.fromTo('.target-line',
      { backgroundColor: 'rgba(234, 179, 8, 1)', height: '2px' },
      { backgroundColor: 'rgba(255, 255, 255, 0.2)', height: '1px', duration: 0.8, ease: 'power2.out', overwrite: true }
    );
    gsap.fromTo('.target-dot',
      { scale: 2.5, boxShadow: '0 0 20px 5px rgba(234,179,8,0.8)' },
      { scale: 1, boxShadow: '0 0 0px 0px rgba(234,179,8,0)', duration: 0.8, ease: 'power2.out', overwrite: true }
    );
  }, [activeIndex]);

  useGSAP(() => {
    // Top Title Animation
    gsap.from('.section-title', {
      scrollTrigger: {
        trigger: '.section-title',
        start: 'top 85%',
      },
      y: 30,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    const mm = gsap.matchMedia();

    // --------------------------------------------------------
    // DESKTOP: Native Sticky & Cinematic Crossfade
    // --------------------------------------------------------
    mm.add("(min-width: 1024px)", () => {
      const textBlocks = gsap.utils.toArray('.desktop-text-block');

      // Target line visibility
      gsap.to('.target-line-container', {
        scrollTrigger: {
          trigger: '.two-column-wrapper',
          start: "top 50%",
          end: "bottom 50%",
          toggleActions: "play reverse play reverse"
        },
        opacity: 1,
        duration: 0.3
      });

      // Bulletproof ScrollTrigger Logic
      textBlocks.forEach((block, i) => {
        ScrollTrigger.create({
          trigger: block,
          start: "top 50%",
          end: "bottom 50%",
          onEnter: () => setActiveIndex(i),
          onEnterBack: () => setActiveIndex(i),
        });
      });
    });

    // --------------------------------------------------------
    // TABLET & MOBILE: Standard clean scroll flow
    // --------------------------------------------------------
    mm.add("(max-width: 1023px)", () => {
      const mobileCards = gsap.utils.toArray('.mobile-card');

      mobileCards.forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        });
      });
    });

    return () => mm.revert();
  }, { scope: containerRef, dependencies: [] });

  return (
    <section ref={containerRef} className="bg-[#0b111e] relative text-white selection:bg-[#EAB308] selection:text-[#0b111e]">

      {/* Title Area - Hidden on desktop, visible on mobile */}
      <div className="pt-24 pb-8 lg:hidden text-center section-title container mx-auto px-6">
        <p className="font-inter text-gray-400 uppercase tracking-[0.3em] mb-4 text-xs">
          Culinary Masterpieces
        </p>
        <h2 className="font-playfair text-4xl text-white font-bold">
          Signature Dishes
        </h2>
      </div>

      {/* Main Interactive Container */}
      <div className="two-column-wrapper container mx-auto px-6 max-w-[1400px] flex flex-col lg:flex-row relative">

        {/* Middle Target Line (Desktop Only) */}
        <div className="target-line-container hidden lg:block absolute right-0 w-[45%] h-full pointer-events-none z-50 opacity-0">
          <div className="sticky top-1/2 w-full h-[1px] bg-white/20 target-line transform -translate-y-1/2">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#EAB308] target-dot"></div>
          </div>
        </div>

        {/* ======================================= */}
        {/* LEFT COLUMN: Sticky Track (Desktop)     */}
        {/* ======================================= */}
        <div className="hidden lg:block w-1/2 relative">
          <div className="sticky top-24 h-[calc(100vh-6rem)] flex items-center justify-start pr-16 pb-12">
            <div className="relative w-full aspect-[4/5] max-h-[75vh] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#070b14]">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={dishes[activeIndex].image}
                    alt={dishes[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle bottom gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b111e]/90 via-[#0b111e]/20 to-transparent opacity-80"></div>

                  {/* Outlined Category Badge (Top Left) */}
                  <div className="absolute top-8 left-8 bg-[#0b111e]/40 backdrop-blur-md px-5 py-2 rounded-sm border border-[#EAB308]/20">
                    <span className="font-poppins text-xs text-[#EAB308] font-semibold uppercase tracking-[0.25em]">
                      {dishes[activeIndex].category}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ======================================= */}
        {/* RIGHT COLUMN: Scrolling Text (Desktop)  */}
        {/* ======================================= */}
        <div className="hidden lg:block w-1/2">
          {dishes.map((dish, index) => (
            <div
              key={`text-${dish.id}`}
              className="desktop-text-block min-h-[90vh] flex flex-col justify-center pl-8 xl:pl-16 py-16 relative"
            >
              <div className="desktop-text-content">
                {/* Integrated Section Label for Desktop First Item */}
                {index === 0 && (
                  <p className="font-inter text-gray-400 uppercase tracking-[0.3em] mb-12 text-sm section-title">
                    Culinary Masterpieces
                  </p>
                )}

                <h3 className="font-playfair text-5xl xl:text-[4rem] text-white mb-6 leading-tight font-bold">
                  {dish.name}
                </h3>

                <span className="font-poppins text-2xl text-[#EAB308] font-semibold mb-8 inline-block tracking-wide">
                  {dish.price}
                </span>

                <p className="font-inter text-gray-300 text-lg leading-[1.8] mb-12 max-w-xl font-light">
                  {dish.description}
                </p>

                {/* Action Row */}
                <div className="flex items-center gap-5 w-full max-w-xl border-t border-white/10 pt-8">
                  <span className="font-inter text-sm text-gray-400 tracking-[0.2em] uppercase font-medium">
                    {dish.calories}
                  </span>

                  <span className="text-gray-600 text-lg">•</span>

                  <button className="flex items-center gap-3 font-poppins text-sm uppercase tracking-[0.15em] text-[#EAB308] hover:text-white transition-colors duration-300 group/btn font-semibold">
                    <span>Add to Experience</span>
                    <FiPlus className="text-lg group-hover/btn:rotate-90 transition-transform duration-500" />
                  </button>
                </div>
              </div>
            </div>
          ))}
          {/* Spacer block to allow the final item to scroll fully to the center of the screen before unsticking */}
          <div className="h-[50vh] w-full"></div>
        </div>

        {/* ======================================= */}
        {/* MOBILE & TABLET LAYOUT: Stacked Cards   */}
        {/* ======================================= */}
        <div className="lg:hidden w-full flex flex-col gap-24 pb-24">
          {dishes.map((dish) => (
            <div key={`mobile-${dish.id}`} className="mobile-card flex flex-col gap-8">
              <div className="w-full aspect-[4/5] rounded-xl overflow-hidden relative shadow-2xl">
                <img src={dish.image} alt={dish.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b111e]/90 via-transparent to-transparent opacity-80"></div>
                <div className="absolute top-6 left-6 bg-[#0b111e]/50 backdrop-blur-md px-4 py-1.5 rounded-sm border border-[#EAB308]/20">
                  <span className="font-poppins text-[10px] text-[#EAB308] font-semibold uppercase tracking-[0.2em]">
                    {dish.category}
                  </span>
                </div>
              </div>

              <div className="flex flex-col px-2">
                <h3 className="font-playfair text-4xl text-white mb-3 font-bold">{dish.name}</h3>
                <span className="font-poppins text-xl text-[#EAB308] font-semibold mb-6 tracking-wide">{dish.price}</span>
                <p className="font-inter text-gray-300 text-base leading-relaxed mb-8 font-light">
                  {dish.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10 w-full">
                  <span className="font-inter text-xs text-gray-400 tracking-[0.2em] uppercase font-medium">
                    {dish.calories}
                  </span>
                  <span className="text-gray-600 text-sm hidden sm:block">•</span>
                  <button className="flex items-center gap-2 font-poppins text-xs uppercase tracking-[0.15em] text-[#EAB308] font-semibold">
                    <span>Add to Experience</span>
                    <FiPlus className="text-base" />
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
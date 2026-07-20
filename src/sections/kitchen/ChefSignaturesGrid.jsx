import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const signatures = [
  {
    id: 1,
    name: 'Grilled Chicken',
    description: 'Succulent chicken marinated in secret spices and grilled to perfection.',
    price: 'Rs. 680',
    image: 'https://prestige.webxnepal.com/images/grill/chicken-grill-1.webp',
  },
  {
    id: 2,
    name: 'Chicken Tandoori',
    description: 'Classic tandoori chicken cooked in a clay oven with smoky flavors.',
    price: 'Rs. 890',
    image: 'https://prestige.webxnepal.com/images/grill/chicken-tandoori-grill-1.webp',
  },
  {
    id: 3,
    name: 'Chicken Sekuwa',
    description: 'Traditional roasted chicken skewers seasoned with local herbs.',
    price: 'Rs. 580',
    image: 'https://prestige.webxnepal.com/images/grill/chicken-sekuwa-1.webp',
  },
  {
    id: 4,
    name: 'Buff Sekuwa',
    description: 'Spicy and tender buffalo meat skewers, a street food favorite.',
    price: 'Rs. 620',
    image: 'https://prestige.webxnepal.com/images/grill/buff-sekuwa-1.webp',
  },
  {
    id: 5,
    name: 'Grilled Pork Belly',
    description: 'Crispy on the outside, juicy inside grilled pork belly slices.',
    price: 'Rs. 780',
    image: 'https://prestige.webxnepal.com/images/grill/pork-belly-grill-1.webp',
  },
  {
    id: 6,
    name: 'Grilled Garlic Butter Fish',
    description: 'Fresh fish fillet grilled with a rich garlic butter sauce.',
    price: 'Rs. 950',
    image: 'https://prestige.webxnepal.com/images/grill/garlic-butter-fish-grill-1.webp',
  },
  {
    id: 7,
    name: 'Mutton Sekuwa',
    description: 'Juicy mutton pieces marinated in authentic Nepalese spices and charcoal grilled.',
    price: 'Rs. 850',
    image: 'https://prestige.webxnepal.com/images/grill/buff-sekuwa-1.webp',
  },
  {
    id: 8,
    name: 'Tandoori Prawns',
    description: 'Jumbo prawns infused with smoky tandoori flavor and lemon zest.',
    price: 'Rs. 1200',
    image: 'https://prestige.webxnepal.com/images/grill/garlic-butter-fish-grill-1.webp',
  },
  {
    id: 9,
    name: 'Spicy Grilled Paneer',
    description: 'Cottage cheese cubes grilled with colorful bell peppers and spicy marinade.',
    price: 'Rs. 550',
    image: 'https://prestige.webxnepal.com/images/grill/chicken-tandoori-grill-1.webp',
  },
  {
    id: 10,
    name: 'BBQ Ribs',
    description: 'Slow-cooked ribs glazed in a sticky, sweet and smoky barbecue sauce.',
    price: 'Rs. 1450',
    image: 'https://prestige.webxnepal.com/images/grill/pork-belly-grill-1.webp',
  },
  {
    id: 11,
    name: 'Grilled Mushroom Skewers',
    description: 'Earthy button mushrooms charred over open flames with garlic herb butter.',
    price: 'Rs. 480',
    image: 'https://prestige.webxnepal.com/images/grill/chicken-sekuwa-1.webp',
  },
  {
    id: 12,
    name: 'Whole Roasted Chicken',
    description: 'A full chicken slow-roasted to a crispy golden brown, served with house dips.',
    price: 'Rs. 1800',
    image: 'https://prestige.webxnepal.com/images/grill/chicken-grill-1.webp',
  }
];

export default function ChefSignaturesGrid() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.signature-card', 
      { y: 60, opacity: 0 },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-transparent min-h-screen flex flex-col items-center justify-center py-16 xl:py-24 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-premiumGold/30 to-transparent"></div>
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-premiumGold/30 to-transparent"></div>
      </div>

      <div className="w-full px-6 xl:px-0 relative z-10">
        <div className="text-center mb-12 xl:mb-16">
          <p className="font-inter text-premiumGold font-semibold text-sm md:text-base uppercase tracking-[0.3em] mb-4">
            The Master&apos;s Canvas
          </p>
          <h1 className="text-4xl md:text-6xl xl:text-[4vw] text-softIvory font-playfair font-bold mb-6 drop-shadow-lg">
            CHEF&apos;S SIGNATURES
          </h1>
          <p className="text-softCream/80 max-w-xl xl:max-w-[60vw] mx-auto text-sm md:text-base xl:text-[1.1vw] leading-relaxed font-inter">
            A curated selection of our most celebrated creations. Each dish is an intricate composition of flavor, texture, and visual poetry, representing the pinnacle of our culinary philosophy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 xl:gap-16 max-w-[1400px] mx-auto">
          {signatures.map((item) => (
            <div 
              key={item.id} 
              className="signature-card opacity-0 group bg-richBlack/50 backdrop-blur-sm rounded-2xl border border-white/5 p-8 flex flex-col items-center text-center transition-all duration-500 hover:border-premiumGold/30 hover:shadow-[0_0_40px_rgba(212,175,55,0.1)] relative"
            >
              {/* Image Container with 3D-ish lift */}
              <div className="w-48 h-48 xl:w-56 xl:h-56 mb-8 relative rounded-full p-2 bg-gradient-to-tr from-premiumGold/20 to-transparent group-hover:from-premiumGold/50 transition-colors duration-500">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  loading="lazy"
                  className="object-cover rounded-full w-full h-full shadow-2xl transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              
              <h3 className="text-softIvory font-playfair font-bold text-2xl xl:text-3xl mb-4 tracking-wide group-hover:text-premiumGold transition-colors duration-300">
                {item.name}
              </h3>
              
              <p className="text-softCream/70 font-inter text-sm xl:text-base mb-8 leading-relaxed max-w-[85%]">
                {item.description}
              </p>
              
              <div className="mt-auto">
                <span className="inline-block px-8 py-3 rounded-full border border-premiumGold/50 text-premiumGold font-poppins text-sm uppercase tracking-widest group-hover:bg-premiumGold group-hover:text-black transition-colors duration-500">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

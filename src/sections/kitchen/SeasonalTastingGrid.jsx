import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiArrowRight } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const seasonalDishes = [
  {
    id: 1,
    name: 'Wagyu Beef Tataki',
    description: 'Thinly sliced premium Wagyu beef lightly seared, topped with toasted sesame seeds and microgreens, served with pickled ginger and a splash of citrusy ponzu sauce.',
    price: 'Rs. 1250',
    image: 'https://prestige.webxnepal.com/images/foreign/dish-1.webp',
  },
  {
    id: 2,
    name: 'Premium Wagyu Ribeye Steak',
    description: 'Raw marbled Grade A5 Wagyu ribeye steak, dry-aged and accompanied by fresh rosemary sprigs, garlic bulbs, and mountain herbs, ready for tableside grilling.',
    price: 'Rs. 2400',
    image: 'https://prestige.webxnepal.com/images/foreign/dish-2.webp',
  },
  {
    id: 3,
    name: 'Bulgogi Style Sliced Ribs',
    description: 'Tender, thinly sliced prime beef ribs marinated in a sweet and savory garlic-sesame glaze, served with fresh enoki mushrooms and crisp romaine lettuce.',
    price: 'Rs. 1450',
    image: 'https://prestige.webxnepal.com/images/foreign/dish-3.webp',
  },
  {
    id: 4,
    name: 'Spicy Tofu Ramen Hotpot',
    description: 'A rich, steaming pot of spicy chili broth loaded with tender silken tofu, fresh green onions, eggs, and soft ramen noodles, topped with melted cheddar cheese.',
    price: 'Rs. 750',
    image: 'https://prestige.webxnepal.com/images/foreign/dish-4.webp',
  },
  {
    id: 5,
    name: 'Crispy Kimchi Seafood Pancake',
    description: 'A beautifully golden crisp savory pancake filled with chopped kimchi, assorted fresh seafood, and scallions, served with a tangy soy-vinegar dipping sauce.',
    price: 'Rs. 650',
    image: 'https://prestige.webxnepal.com/images/foreign/dish-5.webp',
  },
  {
    id: 6,
    name: 'Korean Spicy Glazed Wings',
    description: 'Crispy, twice fried chicken wings coated in a sticky, sweet and spicy red chili glaze, sprinkled with sesame seeds and served with fresh lemon slices.',
    price: 'Rs. 580',
    image: 'https://prestige.webxnepal.com/images/foreign/dish-6.webp',
  }
];

export default function SeasonalTastingGrid() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from('.seasonal-card', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
      },
      scale: 0.9,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: 'power3.out',
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-transparent min-h-screen flex flex-col items-center justify-center py-16 xl:py-24 border-t border-white/5 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-premiumGold/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="w-full px-6 md:px-12 xl:px-0 max-w-[1400px] relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 xl:mb-24">
          <div className="max-w-2xl">
            <p className="font-inter text-premiumGold font-semibold text-sm md:text-base uppercase tracking-[0.3em] mb-4">
              A Journey Through Time
            </p>
            <h1 className="text-4xl md:text-5xl xl:text-[4vw] text-softIvory font-playfair font-bold mb-4">
              SEASONAL TASTING
            </h1>
            <p className="text-softCream/70 text-sm md:text-base leading-relaxed font-inter">
              Our tasting menu is a reflection of nature&apos;s rhythm. By embracing the micro-seasons, we capture ingredients at their absolute peak of flavor and vibrancy.
            </p>
          </div>
          <button className="mt-8 md:mt-0 flex items-center gap-3 text-premiumGold font-poppins text-sm uppercase tracking-widest hover:text-white transition-colors group">
            <span>Book Experience</span>
            <FiArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {seasonalDishes.map((item) => (
            <div key={item.id} className="seasonal-card group cursor-pointer flex flex-col">
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-6 relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-4 py-1 border border-white/10 rounded-full">
                  <span className="text-premiumGold font-poppins text-sm tracking-wider">{item.price}</span>
                </div>
              </div>
              
              <h3 className="text-softIvory font-playfair font-bold text-xl mb-3 group-hover:text-premiumGold transition-colors duration-300">
                {item.name}
              </h3>
              
              <p className="text-softCream/60 font-inter text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

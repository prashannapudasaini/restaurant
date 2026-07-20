import { motion } from 'framer-motion';

const signatureDrinks = [
  {
    id: 1,
    name: "Midnight Elixir",
    profile: "Dark — Spiced",
    price: "NRs. 2100",
    image: "https://prestige.webxnepal.com/images/bar/hard-drinks-1.webp"
  },
  {
    id: 2,
    name: "Azure Dream",
    profile: "Crisp — Floral",
    price: "NRs. 1850",
    image: "https://prestige.webxnepal.com/images/bar/hard-drinks-2.webp"
  },
  {
    id: 3,
    name: "Crimson Velvet",
    profile: "Bold — Fruity",
    price: "NRs. 1950",
    image: "https://prestige.webxnepal.com/images/bar/hard-drinks-3.webp"
  },
  {
    id: 4,
    name: "Golden Solstice",
    profile: "Smooth — Honeyed",
    price: "NRs. 2200",
    image: "https://prestige.webxnepal.com/images/bar/hard-drinks-4.webp"
  },
  {
    id: 5,
    name: "Emerald Breeze",
    profile: "Herbaceous — Fresh",
    price: "NRs. 1750",
    image: "https://prestige.webxnepal.com/images/bar/hard-drinks-5.webp"
  },
  {
    id: 6,
    name: "Smoked Ember",
    profile: "Rich — Peaty",
    price: "NRs. 2400",
    image: "https://prestige.webxnepal.com/images/bar/hard-drinks-6.webp"
  },
  {
    id: 7,
    name: "Obsidian Frost",
    profile: "Intense — Chilled",
    price: "NRs. 2000",
    image: "https://prestige.webxnepal.com/images/bar/soft-drinks-1.webp"
  },
  {
    id: 8,
    name: "Amber Illusion",
    profile: "Sweet — Oaky",
    price: "NRs. 2150",
    image: "https://prestige.webxnepal.com/images/bar/soft-drinks-2.webp"
  },
  {
    id: 9,
    name: "Pearl Whisper",
    profile: "Delicate — Vanilla",
    price: "NRs. 1800",
    image: "https://prestige.webxnepal.com/images/bar/soft-drinks-3.webp"
  },
  {
    id: 10,
    name: "Ruby Twilight",
    profile: "Tart — Complex",
    price: "NRs. 2300",
    image: "https://prestige.webxnepal.com/images/bar/hard-drinks-1.webp"
  },
  {
    id: 11,
    name: "Sapphire Spark",
    profile: "Zesty — Effervescent",
    price: "NRs. 1900",
    image: "https://prestige.webxnepal.com/images/bar/hard-drinks-3.webp"
  },
  {
    id: 12,
    name: "Copper Mirage",
    profile: "Warm — Caramel",
    price: "NRs. 2250",
    image: "https://prestige.webxnepal.com/images/bar/hard-drinks-6.webp"
  }
];

export default function BarProducts() {
  return (
    <section className="relative w-full bg-matteBlack overflow-hidden flex flex-col items-center justify-center py-20 xl:py-32 border-t border-white/5">
      <div className="relative z-10 text-center mb-12 xl:mb-20 px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-inter text-premiumGold font-semibold text-sm md:text-base uppercase tracking-[0.2em] mb-4"
        >
          Beverage Menu
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-playfair text-4xl md:text-6xl text-softIvory mb-6"
        >
          Signature Drinks
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-softCream/80 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-inter"
        >
          Indulge in our curation of premium craft elixirs. Each beverage is meticulously designed with top-shelf spirits, house-made syrups, cold-pressed fruit essence, and fresh organic botanicals to provide a complete sensory experience.
        </motion.p>
      </div>

      <div className="relative z-10 w-full px-4 md:px-8 xl:px-16 max-w-[1600px]">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-6 xl:gap-8">
          {signatureDrinks.map((drink, index) => (
            <motion.div
              key={drink.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col items-center bg-richBlack/40"
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-sm border border-white/5 bg-black group cursor-pointer">
                <img
                  src={drink.image}
                  alt={drink.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                  loading="lazy"
                />
                
                <div className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-black/90 via-black/40 to-transparent pointer-events-none z-10"></div>
                
                <div className="absolute top-0 left-0 w-full pt-10 pb-4 px-6 text-center z-20 pointer-events-none space-y-3">
                  <p className="font-inter font-bold text-xs md:text-sm uppercase tracking-widest text-premiumGold block">
                    {drink.profile}
                  </p>
                  <h3 className="font-playfair text-2xl md:text-3xl tracking-wider text-softIvory block drop-shadow-md">
                    {drink.name}
                  </h3>
                  <p className="font-inter text-sm md:text-base tracking-widest text-premiumGold block">
                    {drink.price}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';

const menuItems = [
  {
    name: "Momo",
    description: "Wild mushrooms, spiced sesame-tomato broth, white truffle oil.",
    price: "NRs. 550",
    img: "/images/momo.png",
    category: "Signature"
  },
  {
    name: "Sekuwa",
    description: "Marinated in Timur and Jimbu, grilled over wood fire.",
    price: "NRs. 850",
    img: "/images/sekuwa.png",
    category: "Grill"
  },
  {
    name: "Thali",
    description: "A fine-dining interpretation of the traditional Newari feast.",
    price: "NRs. 1200",
    img: "/images/thali.png",
    category: "Traditional"
  },
  {
    name: "Chowmein",
    description: "Hand-pulled noodles, seasonal mountain vegetables, soy-ginger glaze.",
    price: "NRs. 450",
    img: "/images/chowmein.png",
    category: "Mains"
  },
  {
    name: "Pizza",
    description: "Nepalese spiced yak cheese, wild honey, roasted garlic.",
    price: "NRs. 950",
    img: "/images/pizza.png",
    category: "Mains"
  }
];

export default function AnimatedMenuList() {
  return (
    <section className="py-10 md:py-16 bg-deepCharcoal text-softIvory relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-playfair mb-6"
          >
            A Journey of Flavors
          </motion.h2>
          <div className="w-16 h-[1px] bg-champagneGold mx-auto" />
        </div>

        <div className="space-y-16 md:space-y-24">
          {menuItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
              className="group relative flex flex-col md:flex-row items-center gap-8 md:gap-16 border-b border-white/5 pb-16 md:pb-24 last:border-0"
            >
              
              {/* Image Reveal */}
              <div className={`w-full md:w-1/2 overflow-hidden relative aspect-[4/3] ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                <motion.div 
                  initial={{ scaleX: 1 }}
                  whileInView={{ scaleX: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
                  style={{ transformOrigin: index % 2 === 0 ? "right" : "left" }}
                  className="absolute inset-0 bg-matteBlack z-10"
                />
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
                />
              </div>

              {/* Text Reveal */}
              <div className={`w-full md:w-1/2 flex flex-col justify-center ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <span className="text-champagneGold text-xs uppercase tracking-[0.2em] mb-4 block font-inter">{item.category}</span>
                  <h3 className="text-3xl md:text-4xl font-playfair mb-4 transition-colors group-hover:text-champagneGold">
                    {item.name}
                  </h3>
                  <p className="text-mutedText font-inter text-lg leading-relaxed mb-6">
                    {item.description}
                  </p>
                  
                  {/* Animated Price Line */}
                  <div className="flex items-center gap-6">
                    <span className="text-2xl font-playfair text-softIvory">{item.price}</span>
                    <div className="flex-1 h-[1px] bg-white/10 relative overflow-hidden">
                       <div className="absolute inset-0 bg-champagneGold origin-left scale-x-0 transition-transform duration-1000 group-hover:scale-x-100" />
                    </div>
                  </div>
                </motion.div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

import { motion } from 'framer-motion';

export default function SignatureDishesMenu() {
  return (
    <section className="py-24 md:py-32 bg-deepCharcoal text-softIvory overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center mb-20">
          <span className="text-champagneGold tracking-[0.2em] text-sm uppercase mb-4 block font-inter">The Masterpieces</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair">Signature Dishes</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Featured Dish */}
          <div className="lg:col-span-7 group">
            <motion.div 
              initial={{ clipPath: 'inset(10% 10% 10% 10%)', scale: 1.1 }}
              whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
              className="relative aspect-[4/3] overflow-hidden"
            >
              <img src="/images/momo.png" alt="Truffle Infused Jhol Momo" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" />
            </motion.div>
            
            <div className="mt-8 flex justify-between items-start">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-3xl font-playfair">Truffle Infused Jhol Momo</h3>
                  <span className="bg-champagneGold text-matteBlack text-xs font-bold uppercase tracking-wider px-2 py-1">Chef's Choice</span>
                </div>
                <p className="text-mutedText font-inter mb-4 max-w-md">Our modern take on the classic Nepalese dumpling, filled with wild mushrooms and drenched in a warm, spiced sesame-tomato broth, finished with white truffle oil.</p>
                <p className="text-softIvory/70 font-inter text-sm italic">Wild Mushrooms, Sesame, Heirloom Tomato, Truffle</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-playfair text-champagneGold relative group-hover:after:scale-x-100 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-champagneGold after:origin-left after:scale-x-0 after:transition-transform after:duration-500">$24</span>
              </div>
            </div>
          </div>

          {/* Supporting Dishes */}
          <div className="lg:col-span-5 space-y-16">
            
            <div className="group flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              <motion.div 
                initial={{ x: "-100%" }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-full sm:w-1/2 aspect-square relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-champagneGold z-10 origin-right transition-transform duration-700 delay-300 group-hover:scale-x-0" style={{ transformOrigin: "right" }} />
                <img src="/images/sekuwa.png" alt="Himalayan Spiced Lamb Sekuwa" className="w-full h-full object-cover" />
              </motion.div>
              <div className="w-full sm:w-1/2">
                <h4 className="text-xl font-playfair mb-2">Himalayan Spiced Lamb Sekuwa</h4>
                <p className="text-mutedText font-inter text-sm mb-4">Marinated in Timur and Jimbu, grilled over wood fire.</p>
                <span className="text-champagneGold font-playfair">$32</span>
              </div>
            </div>

            <div className="group flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              <motion.div 
                initial={{ x: "100%" }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-full sm:w-1/2 aspect-square relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-champagneGold z-10 origin-left transition-transform duration-700 delay-300 group-hover:scale-x-0" style={{ transformOrigin: "left" }} />
                <img src="/images/thali.png" alt="Deconstructed Newari Samay Baji" className="w-full h-full object-cover" />
              </motion.div>
              <div className="w-full sm:w-1/2">
                <h4 className="text-xl font-playfair mb-2">Deconstructed Samay Baji</h4>
                <p className="text-mutedText font-inter text-sm mb-4">A fine-dining interpretation of the traditional Newari feast.</p>
                <span className="text-champagneGold font-playfair">$45</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

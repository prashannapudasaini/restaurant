import { motion } from 'framer-motion';

export default function DessertBeverages() {
  return (
    <section className="py-24 md:py-32 bg-deepCharcoal text-softIvory">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5 sticky top-32">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-playfair mb-6"
            >
              Sweet Endings & Rare Pours
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-mutedText font-inter leading-relaxed max-w-sm mb-12"
            >
              A celebration of Nepalese sweets reimagined, alongside an exclusive collection of high-altitude teas and artisanal spirits.
            </motion.p>
            <div className="hidden lg:block relative aspect-square overflow-hidden group">
              <img src="/images/about/kitchen_prep.png" alt="Dessert Preparation" className="w-full h-full object-cover filter brightness-75 group-hover:scale-105 transition-transform duration-1000" />
            </div>
          </div>

          <div className="lg:col-span-7">
            {/* Desserts */}
            <div className="mb-20">
              <h3 className="text-2xl font-inter uppercase tracking-widest text-champagneGold mb-12 pb-4 border-b border-white/10">Desserts</h3>
              <div className="space-y-12">
                <div className="group">
                  <div className="flex justify-between items-end mb-2">
                    <h4 className="text-xl font-playfair group-hover:text-champagneGold transition-colors">Classic Yomari Reimagined</h4>
                    <span className="text-lg font-playfair text-champagneGold">$16</span>
                  </div>
                  <p className="text-mutedText font-inter text-sm max-w-md">Rice flour dumpling filled with a rich molasses and sesame ganache, served with sweet yogurt foam.</p>
                </div>
                <div className="group">
                  <div className="flex justify-between items-end mb-2">
                    <h4 className="text-xl font-playfair group-hover:text-champagneGold transition-colors">Juju Dhau Cheesecake</h4>
                    <span className="text-lg font-playfair text-champagneGold">$14</span>
                  </div>
                  <p className="text-mutedText font-inter text-sm max-w-md">Bhaktapur's famous 'King Yogurt' transformed into a light, airy cheesecake with honey drizzle.</p>
                </div>
              </div>
            </div>

            {/* Beverages */}
            <div>
              <h3 className="text-2xl font-inter uppercase tracking-widest text-champagneGold mb-12 pb-4 border-b border-white/10">Beverages</h3>
              <div className="space-y-12">
                <div className="group">
                  <div className="flex justify-between items-end mb-2">
                    <h4 className="text-xl font-playfair group-hover:text-champagneGold transition-colors">Ilam First Flush Tea</h4>
                    <span className="text-lg font-playfair text-champagneGold">$8</span>
                  </div>
                  <p className="text-mutedText font-inter text-sm max-w-md">Delicate, floral tea sourced from the finest estates in eastern Nepal.</p>
                </div>
                <div className="group">
                  <div className="flex justify-between items-end mb-2">
                    <h4 className="text-xl font-playfair group-hover:text-champagneGold transition-colors">Artisanal Aila Tasting</h4>
                    <span className="text-lg font-playfair text-champagneGold">$22</span>
                  </div>
                  <p className="text-mutedText font-inter text-sm max-w-md">A flight of traditional Newari triple-distilled spirits, varying in age and botanical infusions.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

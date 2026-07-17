import { motion } from 'framer-motion';

const experiences = [
  {
    number: "01",
    subtitle: "INTIMATE GATHERINGS",
    title: "Private Dining",
    desc: "An exclusive sanctuary for your most intimate gatherings. We believe that some moments deserve to be celebrated in complete seclusion, surrounded by those who matter most.",
    details: "Tailored menus • Dedicated service • Complete privacy",
    img: "/images/about/private_dining.png"
  },
  {
    number: "02",
    subtitle: "CURATED SELECTIONS",
    title: "Wine Pairing",
    desc: "Our master sommelier curates an extraordinary journey through the world's finest vineyards, perfectly harmonizing with every course. Discover rare vintages and bold new profiles.",
    details: "Over 500 labels • Expert sommeliers • Rare vintages",
    img: "/images/about/hero_cinematic.png" // reusing cinematic hero for wine pairing due to lack of distinct generated images
  }
];

export default function DiningExperienceAbout() {
  return (
    <section className="py-10 md:py-16 bg-deepCharcoal">
      <div className="container mx-auto px-0 md:px-6 max-w-7xl">
        
        <div className="text-center mb-12 px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-playfair text-softIvory mb-6"
          >
            The Dining Experience
          </motion.h2>
        </div>

        <div className="space-y-8 md:space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} h-auto md:h-[600px]`}>
              
              <div className="w-full md:w-1/2 relative overflow-hidden h-[400px] md:h-full">
                <motion.div 
                  initial={{ x: index % 2 === 0 ? "-100%" : "100%" }}
                  whileInView={{ x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
                  className="absolute inset-0 bg-champagneGold z-10"
                />
                <img src={exp.img} alt={exp.title} className="w-full h-full object-cover" />
              </div>

              <div className="w-full md:w-1/2 bg-matteBlack flex items-center justify-center p-12 md:p-24 relative overflow-hidden">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="max-w-lg relative z-10 w-full"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-champagneGold font-playfair text-2xl italic">{exp.number}</span>
                    <div className="h-[1px] w-12 bg-champagneGold/50" />
                    <span className="text-mutedText font-inter text-xs uppercase tracking-widest">{exp.subtitle}</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-playfair text-softIvory mb-6">{exp.title}</h3>
                  <p className="text-mutedText font-inter leading-relaxed text-lg mb-10">{exp.desc}</p>
                  
                  <div className="border-l-2 border-champagneGold/40 pl-6 py-2">
                    <p className="text-champagneGold font-inter text-sm uppercase tracking-widest leading-loose">{exp.details}</p>
                  </div>
                </motion.div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

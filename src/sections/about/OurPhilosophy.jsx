import { motion } from 'framer-motion';

const pillars = [
  {
    title: "Seasonal Ingredients",
    desc: "Sourced locally, respecting the rhythm of nature."
  },
  {
    title: "Authentic Craftsmanship",
    desc: "Traditional techniques refined with modern precision."
  },
  {
    title: "Exceptional Hospitality",
    desc: "Anticipating needs before they are even spoken."
  }
];

export default function OurPhilosophy() {
  return (
    <section className="py-10 md:py-16 bg-matteBlack text-softIvory">
      <div className="container mx-auto px-6 max-w-5xl flex flex-col items-center text-center">
        
        <motion.h3 
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-3xl md:text-4xl lg:text-5xl font-playfair leading-tight mb-12 max-w-4xl"
        >
          "We believe unforgettable meals are created through patience, craftsmanship, and genuine hospitality."
        </motion.h3>

        <div className="flex flex-col md:flex-row justify-between w-full relative">
          
          {pillars.map((pillar, index) => (
            <div key={index} className="flex-1 flex flex-col items-center px-4 mb-16 md:mb-0 relative group">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <h4 className="text-xl font-playfair text-champagneGold mb-4 uppercase tracking-widest">{pillar.title}</h4>
                <p className="text-mutedText font-inter text-sm max-w-[250px] mx-auto">{pillar.desc}</p>
              </motion.div>

              {/* Vertical divider for desktop */}
              {index !== pillars.length - 1 && (
                <motion.div 
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="hidden md:block absolute right-0 top-0 bottom-0 w-[1px] bg-white/10 origin-top"
                />
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';

const highlights = [
  {
    title: "Handmade Daily",
    desc: "Our momo wrappers are rolled by hand every morning. We never compromise on the texture and freshness that only human touch can provide."
  },
  {
    title: "Himalayan Spices",
    desc: "We import our Timur, Jimbu, and authentic spices directly from the mountain villages to ensure the purest, boldest flavors."
  },
  {
    title: "Perfect Pairings",
    desc: "Every dish is meticulously paired with wines and spirits that elevate the intricate spices of Nepali cuisine."
  }
];

export default function MenuHighlights() {
  return (
    <section className="py-24 md:py-32 bg-matteBlack text-softIvory border-t border-white/5">
      <div className="container mx-auto px-6 max-w-5xl">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {highlights.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center md:text-left flex flex-col items-center md:items-start"
            >
              <div className="w-12 h-[1px] bg-champagneGold mb-8" />
              <h3 className="text-2xl font-playfair mb-4">{item.title}</h3>
              <p className="text-mutedText font-inter text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

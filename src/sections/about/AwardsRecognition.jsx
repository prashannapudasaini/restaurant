import { motion } from 'framer-motion';

export default function AwardsRecognition() {
  return (
    <section className="py-10 md:py-16 bg-deepCharcoal text-softIvory">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-playfair mb-10"
        >
          Recognized for Exceptional Dining
        </motion.h2>

        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-[1px] w-full max-w-md mx-auto bg-champagneGold origin-center mb-10"
        />

        <div className="space-y-12">
          {[
            { award: "One Michelin Star", year: "2022, 2023, 2024", body: "Michelin Guide" },
            { award: "Best Contemporary Restaurant", year: "2023", body: "Culinary Excellence Awards" },
            { award: "Top 50 Dining Experiences", year: "2024", body: "Global Gastronomy Review" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col items-center"
            >
              <h3 className="text-2xl font-playfair text-champagneGold mb-2">{item.award}</h3>
              <p className="text-mutedText font-inter uppercase tracking-widest text-sm">{item.body} — {item.year}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

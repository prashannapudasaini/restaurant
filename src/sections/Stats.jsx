import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { id: 1, label: 'Happy Guests', value: 25000, suffix: '+' },
  { id: 2, label: 'Signature Dishes', value: 150, suffix: '+' },
  { id: 3, label: 'Years Experience', value: 15, suffix: '+' },
  { id: 4, label: 'Star Rating', value: 5, suffix: '.0' },
];

function Counter({ from, to, duration, inView }) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!inView) return;

    let startTime;
    let animationFrame;

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      if (progress < duration) {
        const nextValue = Math.min(from + (to - from) * (progress / duration), to);
        setCount(Math.floor(nextValue));
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(to);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration, inView]);

  return <span>{count.toLocaleString()}</span>;
}

export default function Stats() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-24 bg-charcoal border-y border-white/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="font-playfair text-4xl md:text-5xl lg:text-6xl text-premiumGold mb-4 group-hover:scale-110 transition-transform duration-500">
                <Counter from={0} to={stat.value} duration={2000} inView={isInView} />
                <span className="text-3xl md:text-4xl">{stat.suffix}</span>
              </div>
              <div className="w-12 h-[1px] bg-white/20 mx-auto mb-4 group-hover:bg-premiumGold transition-colors duration-500"></div>
              <p className="font-poppins text-xs md:text-sm text-warmIvory uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

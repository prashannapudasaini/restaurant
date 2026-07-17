import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const text = "A Story Served On Every Plate";

export default function AboutHero() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Split text into words then letters for "SplitText" effect
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.5 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-matteBlack flex items-center justify-center pt-20"
    >
      <motion.div 
        style={{ y: backgroundY, opacity }}
        className="absolute inset-0 z-0"
      >
        <motion.div
          initial={{ scale: 1.1, filter: "blur(10px)" }}
          animate={{ scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full bg-[url('/images/about/hero_cinematic.png')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-champagneGold tracking-[0.2em] text-sm md:text-base uppercase mb-6 block font-inter"
        >
          More Than A Restaurant
        </motion.span>
        
        <motion.h1 
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-softIvory text-5xl md:text-7xl lg:text-8xl font-playfair leading-tight mb-8"
        >
          {words.map((word, index) => (
            <span key={index} className="inline-block mr-[0.25em] whitespace-nowrap">
              {word.split("").map((letter, index) => (
                <motion.span variants={child} key={index} className="inline-block">
                  {letter}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="text-mutedText text-lg md:text-xl font-inter max-w-2xl mx-auto mb-12"
        >
          Every dish is a chapter, every flavor a memory. Welcome to our world.
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="group relative px-8 py-4 border border-champagneGold/50 text-softIvory overflow-hidden transition-colors hover:text-matteBlack"
        >
          <span className="relative z-10 font-inter text-sm tracking-widest uppercase">Reserve a Table</span>
          <div className="absolute inset-0 bg-champagneGold transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 z-0" />
        </motion.button>
      </div>
    </section>
  );
}

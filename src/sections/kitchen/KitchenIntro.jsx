import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function KitchenIntro() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from('.intro-text', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      y: 40,
      opacity: 0,
      duration: 1.5,
      stagger: 0.2,
      ease: 'power3.out',
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full bg-transparent text-softIvory overflow-hidden z-10 py-16 xl:py-24 border-t border-white/5">
      <div className="relative z-10 max-w-4xl xl:max-w-[50vw] mx-auto text-center flex flex-col items-center gap-8 px-6">
        <h2 className="intro-text text-premiumGold text-3xl md:text-5xl xl:text-[3vw] font-playfair font-bold tracking-widest leading-tight uppercase">
          The Art of Plating
        </h2>
        
        <div className="flex flex-col gap-6 text-softCream/80 text-sm md:text-base xl:text-[1.1vw] leading-relaxed mx-auto font-inter">
          <p className="intro-text">
            At Five Beans Cafe, the kitchen is more than a place of preparation—it is an atelier. Every dish is envisioned as a canvas, where color, texture, and flavor converge to create a masterpiece.
          </p>
          <p className="intro-text">
            Sourcing the finest seasonal ingredients, our culinary artisans employ both time-honored techniques and avant-garde precision. From the initial slice to the final garnish, the journey of each ingredient is respected and elevated.
          </p>
          <p className="intro-text italic text-white text-lg md:text-xl font-playfair mt-4">
            &quot;A dining experience that celebrates authenticity, creativity, and the timeless elegance of gastronomy.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}

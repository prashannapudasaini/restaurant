import { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function InteractiveTransformation() {
  const containerRef = useRef(null);
  const imageContainerRef = useRef(null);
  const rawImageRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    // Parallax effect on the entire container
    gsap.to(imageContainerRef.current, {
      yPercent: 15,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });

    // Crossfade controlled by scroll
    gsap.to(rawImageRef.current, {
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: imageContainerRef.current,
        start: 'top 60%',
        end: 'center 40%',
        scrub: true,
      }
    });

    // Text reveal
    gsap.from(textRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full bg-transparent flex flex-col items-center justify-center overflow-hidden py-12 xl:py-20 border-t border-white/5">
      
      {/* Background Particles / Ambient Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-premiumGold/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-richBlack/50 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 flex flex-col lg:flex-row items-center justify-between gap-12 xl:gap-20 relative z-10">
        
        {/* Text Section */}
        <div ref={textRef} className="w-full lg:w-1/2 text-center lg:text-left flex flex-col justify-center">
          <p className="font-inter text-premiumGold font-semibold text-sm md:text-base uppercase tracking-[0.3em] mb-4">
            The Process
          </p>
          <h1 className="text-4xl md:text-5xl xl:text-6xl text-softIvory font-playfair font-bold mb-6 drop-shadow-lg leading-tight">
            THE PERFECT SEKUWA
          </h1>
          <p className="text-softCream/80 text-sm md:text-base xl:text-lg leading-relaxed font-inter mb-8">
            Experience the transformation of our signature dish. It begins with ethically sourced meat, marinated in authentic Nepalese spices. Through precise charcoal grilling, it evolves into a smoky, tender masterpiece that defines our culinary heritage.
          </p>
          
          <div className="flex items-center justify-center lg:justify-start gap-8 opacity-70">
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-premiumGold font-playfair text-2xl font-bold">24h</span>
              <span className="text-xs uppercase tracking-widest font-inter">Marination</span>
            </div>
            <div className="w-[1px] h-10 bg-white/20"></div>
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-premiumGold font-playfair text-2xl font-bold">100%</span>
              <span className="text-xs uppercase tracking-widest font-inter">Charcoal</span>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div 
            ref={imageContainerRef}
            className="relative w-full max-w-[400px] aspect-[4/5] group cursor-pointer"
          >
            {/* Glow behind images */}
            <div className="absolute inset-0 bg-premiumGold/20 blur-[60px] scale-90 group-hover:bg-premiumGold/40 transition-colors duration-1000 z-0"></div>

            {/* Final Image (Plated Dish) */}
            <div className="absolute inset-0 z-10 flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="/images/sekuwa.png" 
                alt="Refined Dish" 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                loading="lazy"
              />
            </div>
            
            {/* Floating text about Sekuwa */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] bg-black/50 backdrop-blur-md border border-premiumGold/20 rounded-xl p-6 z-30 flex flex-col items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
              <span className="font-playfair text-xl text-premiumGold mb-3 font-bold tracking-widest text-center">Smoky & Authentic</span>
              <p className="text-softCream/90 text-sm text-center font-inter leading-relaxed">
                Slow-roasted over a live charcoal flame to seal in the juices and impart that unmistakable smoky flavor.
              </p>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}

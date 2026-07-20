import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function KitchenHero() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
      }
    });

    tl.to(imageRef.current, {
      scale: 1,
      yPercent: -15,
      ease: 'none',
    }, 0);

    tl.to(textRef.current, {
      yPercent: 30,
      opacity: 0,
      ease: 'power1.inOut',
    }, 0);
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full h-[120dvh] bg-[#0a0f1c]">
      <div className="sticky top-0 w-full h-dvh flex items-center justify-center overflow-hidden">
        <img 
          ref={imageRef}
          src="https://prestige.webxnepal.com/images/grill/grilled-meat-1.webp" 
          alt="Chef plating food"
          className="w-[130%] h-[130%] object-cover object-center relative z-10 scale-[1.2] origin-top"
        />
        <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none"></div>
      <div 
        ref={textRef}
        className="absolute inset-0 flex flex-col justify-center items-center z-20 pointer-events-none select-none px-4"
      >
        <h1 className="font-playfair text-5xl md:text-7xl xl:text-[6vw] tracking-wider text-center text-softIvory font-bold drop-shadow-2xl">
          Culinary Craft. <br />
          <span className="text-premiumGold italic font-light">Pure Artistry.</span>
        </h1>
      </div>
      </div>
    </div>
  );
}

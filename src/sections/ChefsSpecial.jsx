import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export default function ChefsSpecial() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for image
      gsap.to(imageRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });

      // Text reveal animation
      const texts = gsap.utils.toArray('.reveal-text');
      texts.forEach(text => {
        gsap.fromTo(text, 
          { y: 50, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: text,
              start: 'top 85%',
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="about" className="py-32 bg-richBlack relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative h-[600px] lg:h-[800px] overflow-hidden rounded-sm">
            <div 
              ref={imageRef}
              className="absolute inset-0 -top-[20%] h-[140%] w-full"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1200&auto=format&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="absolute inset-0 bg-charcoal/20 mix-blend-multiply"></div>
            <div className="absolute inset-0 border border-white/10 m-6"></div>
            
            {/* Badge overlay */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 lg:-right-12 bg-charcoal p-8 rounded-full border border-premiumGold/30 shadow-2xl w-48 h-48 flex flex-col items-center justify-center text-center z-10"
            >
              <span className="font-playfair text-4xl text-premiumGold block">15+</span>
              <span className="font-inter text-xs text-warmIvory uppercase tracking-widest mt-2">Years of<br/>Excellence</span>
            </motion.div>
          </div>

          {/* Text Side */}
          <div ref={textRef} className="w-full lg:w-1/2">
            <p className="reveal-text font-inter text-copperBronze uppercase tracking-[0.3em] mb-6 text-sm">
              The Mastermind
            </p>
            <h2 className="reveal-text font-playfair text-4xl md:text-5xl lg:text-6xl text-warmIvory mb-8 leading-tight">
              A Symphony of <br/>
              <span className="italic font-light text-premiumGold">Flavors & Passion</span>
            </h2>
            
            <div className="space-y-6">
              <p className="reveal-text font-inter text-softCream/80 leading-relaxed text-lg font-light">
                "Cooking is not merely about combining ingredients; it is an intimate expression of culture, history, and raw passion. Every dish we serve at Five Beans Cafe is a piece of my soul on a plate."
              </p>
              
              <p className="reveal-text font-inter text-softCream/60 leading-relaxed">
                Our philosophy centers around sourcing the most exceptional seasonal ingredients from local artisans and global purveyors. We employ both ancient techniques and modern culinary innovations to elevate familiar flavors into extraordinary experiences.
              </p>
            </div>
            
            <div className="reveal-text mt-12 pt-12 border-t border-white/10 flex items-center gap-6">
              <div className="w-16 h-1 bg-premiumGold"></div>
              <div>
                <h4 className="font-playfair text-2xl text-warmIvory">Alexander Vance</h4>
                <p className="font-inter text-xs text-copperBronze uppercase tracking-widest mt-1">Executive Chef</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-premiumGold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
    </section>
  );
}

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const frameCount = 122;
  const currentFrame = index => `/frames/ezgif-frame-${(index * 2 + 1).toString().padStart(5, '0')}.jpg`;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };

    // Set initial size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const images = [];
    const airpods = {
      frame: 0
    };

    // Preload images
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    images[0].onload = render;

    function render() {
      if (images[airpods.frame]) {
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Calculate aspect ratio to cover the canvas on desktop, but contain on mobile to show full bowl
        const hRatio = canvas.width / images[airpods.frame].width;
        const vRatio = canvas.height / images[airpods.frame].height;
        const isMobile = window.innerWidth < 768;
        const ratio = isMobile ? Math.min(hRatio, vRatio) * 1.2 : Math.max(hRatio, vRatio); // Multiply by 1.2 on mobile to fill a bit more space while still showing most of the bowl

        // Calculate center shifts
        const centerShift_x = (canvas.width - images[airpods.frame].width * ratio) / 2;
        const centerShift_y = (canvas.height - images[airpods.frame].height * ratio) / 2;

        context.drawImage(
          images[airpods.frame],
          0, 0, images[airpods.frame].width, images[airpods.frame].height,
          centerShift_x, centerShift_y, images[airpods.frame].width * ratio, images[airpods.frame].height * ratio
        );
      }
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=600%", // Increased from 400% to slow down the transition
        scrub: 1, // Increased scrub for smoother interpolation
        pin: true,
      }
    });

    tl.to(airpods, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      onUpdate: render
    });

    // Handle resize
    const handleResize = () => {
      updateCanvasSize();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full bg-richBlack overflow-hidden" id="home">
      {/* Canvas for the sequence */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Minimal Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="pointer-events-auto"
        >
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-6xl font-light text-warmIvory tracking-widest uppercase mb-8 md:mb-12 drop-shadow-lg leading-tight">
            Five Beans <br className="md:hidden" /> Cafe
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#reservations"
              className="px-6 py-3 bg-premiumGold/90 text-richBlack font-poppins text-sm uppercase tracking-widest hover:bg-white transition-colors duration-300"
            >
              Reserve
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="font-inter text-[10px] text-warmIvory tracking-[0.3em] uppercase mb-4 drop-shadow-md">Scroll</span>
        <div className="w-[1px] h-12 bg-white/40 relative overflow-hidden">
          <motion.div
            className="w-full h-1/2 bg-premiumGold absolute top-0"
            animate={{ top: ['-50%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>

      {/* Bottom Right Floating Element to cover Gemini Icon */}
      <a href="#reservations" className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-36 h-12 md:w-56 md:h-20 bg-charcoal border border-premiumGold/30 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.6)] cursor-pointer group hover:bg-richBlack transition-colors">
        <span className="font-poppins text-premiumGold text-[10px] md:text-sm tracking-widest uppercase group-hover:scale-105 transition-transform">Book A Table</span>
        <div className="absolute inset-0 rounded-full border border-premiumGold/20 animate-pulse"></div>
      </a>
    </section>
  );
}

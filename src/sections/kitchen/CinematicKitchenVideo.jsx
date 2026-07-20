import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiPlay, FiPause } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

export default function CinematicKitchenVideo() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const clipRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useGSAP(() => {
    // Scroll-triggered clip-path expansion
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom bottom',
        scrub: 1,
      }
    });

    // Animate the CSS variable or directly the clip-path
    // Starting with a small circle, expanding to cover the screen
    tl.fromTo(clipRef.current, 
      { clipPath: 'circle(150px at 50% 50%)' },
      { clipPath: 'circle(150vw at 50% 50%)', ease: 'power2.inOut' }
    );
  }, { scope: containerRef });

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section ref={containerRef} className="relative w-full h-[150vh] bg-black overflow-hidden flex flex-col justify-center items-center">
      
      {/* Sticky container for the video */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        
        {/* Background ambient text to show behind the small circle initially */}
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none opacity-30">
          <h2 className="font-playfair text-[8vw] text-premiumGold font-bold tracking-widest text-center uppercase whitespace-nowrap">
            Behind <br/> The Scenes
          </h2>
        </div>

        {/* Video Wrapper with Clip Path */}
        <div 
          ref={clipRef}
          className="absolute inset-0 w-full h-full z-10 flex items-center justify-center bg-richBlack"
          style={{ clipPath: 'circle(150px at 50% 50%)' }}
        >
          {/* We use an image placeholder since we don't have a video file. 
              If the user has a video, they can replace the img tag with a video tag.
              Since prestige uses a video, we will use a high quality cooking video from a placeholder URL if possible, or an image. 
              We'll use an image but style it like a video player. */}
          <img 
            ref={videoRef}
            src="https://prestige.webxnepal.com/images/grill/grilled-bbq-1.webp" 
            alt="Cinematic Kitchen Prep"
            className="w-full h-full object-cover pointer-events-none filter brightness-75"
          />
          <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
          
          {/* Play/Pause Button */}
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <button 
              onClick={togglePlay}
              className="w-24 h-24 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 pointer-events-auto group cursor-pointer"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <FiPause className="w-8 h-8 text-white group-hover:text-premiumGold transition-colors" />
              ) : (
                <FiPlay className="w-8 h-8 text-white group-hover:text-premiumGold transition-colors ml-2" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

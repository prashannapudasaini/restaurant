import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: "Eleanor Vance",
    country: "FR",
    review: "An absolute revelation. The tasting menu took us on a journey through France that I haven't experienced since my childhood in Lyon. The wine pairings were impeccable.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Marcus Sterling",
    country: "UK",
    review: "Five Beans Cafe redefines fine dining in the city. The Wagyu tenderloin was cooked to absolute perfection, melting like butter. The ambiance strikes the perfect balance between luxury and intimacy.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Sophia Rossi",
    country: "IT",
    review: "From the moment we walked in, the service was flawless. The truffle risotto is a masterpiece. It's rare to find a restaurant that excels in both culinary innovation and classic hospitality.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-charcoal border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-inter text-copperBronze uppercase tracking-[0.2em] mb-4 text-sm"
        >
          Guest Experiences
        </motion.p>
        
        <div className="mb-16">
          <svg className="w-12 h-12 mx-auto text-premiumGold/30" fill="currentColor" viewBox="0 0 32 32">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            modules={[Autoplay, EffectFade, Pagination]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ 
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-premiumGold',
              bulletClass: 'swiper-pagination-bullet !bg-white/20 !w-2 !h-2'
            }}
            className="pb-16"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="flex flex-col items-center">
                  <p className="font-playfair text-2xl md:text-3xl lg:text-4xl text-warmIvory leading-relaxed mb-10 italic">
                    "{testimonial.review}"
                  </p>
                  
                  <div className="flex text-premiumGold mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} size={16} className="mx-0.5" />
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border border-premiumGold/30"
                    />
                    <div className="text-left">
                      <h4 className="font-poppins text-warmIvory uppercase tracking-widest text-sm">
                        {testimonial.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-inter text-softCream/50 text-xs">Guest</span>
                        <span className="w-1 h-1 rounded-full bg-white/20"></span>
                        <img 
                          src={`https://flagcdn.com/20x15/${testimonial.country.toLowerCase()}.png`} 
                          alt={testimonial.country}
                          className="w-4 h-3 opacity-70"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}

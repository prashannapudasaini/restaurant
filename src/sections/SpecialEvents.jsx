import { motion } from 'framer-motion';

const events = [
  {
    id: 1,
    title: 'Wine Tasting Masterclass',
    date: 'Every Thursday, 7:00 PM',
    desc: 'Join our head sommelier for an exclusive journey through the vineyards of Bordeaux, paired with artisanal cheeses.',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Live Jazz Nights',
    date: 'Friday & Saturday, 8:00 PM',
    desc: 'Immerse yourself in the soulful sounds of local jazz quartets while enjoying our signature cocktails and late-night menu.',
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Chef\'s Table Experience',
    date: 'By Reservation Only',
    desc: 'An intimate 12-course tasting menu prepared and presented by Chef Vance right before your eyes.',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1000&auto=format&fit=crop'
  }
];

export default function SpecialEvents() {
  return (
    <section className="py-24 bg-richBlack relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-inter text-copperBronze uppercase tracking-[0.2em] mb-4 text-sm"
            >
              Curated Moments
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-playfair text-4xl md:text-5xl text-warmIvory"
            >
              Special <span className="text-gradient">Events</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <a href="#reservations" className="font-poppins text-xs uppercase tracking-widest text-premiumGold border-b border-premiumGold pb-1 hover:text-warmIvory hover:border-warmIvory transition-all">
              Private Event Inquiry
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div 
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden relative mb-6 rounded-sm">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block bg-white/10 backdrop-blur-md px-3 py-1 mb-4 border border-white/20 font-poppins text-xs text-warmIvory uppercase tracking-widest">
                    {event.date}
                  </span>
                </div>
              </div>
              
              <h3 className="font-playfair text-2xl text-warmIvory mb-3 group-hover:text-premiumGold transition-colors">
                {event.title}
              </h3>
              <p className="font-inter text-softCream/70 text-sm leading-relaxed mb-4">
                {event.desc}
              </p>
              
              <div className="flex items-center gap-2 font-poppins text-xs uppercase tracking-widest text-copperBronze group-hover:text-premiumGold transition-colors">
                <span>Discover More</span>
                <span className="transform group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

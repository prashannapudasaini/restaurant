import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';

const feed = [
  { id: 1, image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600&auto=format&fit=crop' },
  { id: 2, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600&auto=format&fit=crop' },
  { id: 3, image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=600&auto=format&fit=crop' },
  { id: 4, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop' },
  { id: 5, image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=600&auto=format&fit=crop' },
];

export default function InstagramFeed() {
  return (
    <section className="py-24 bg-richBlack overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-playfair text-3xl md:text-4xl text-warmIvory"
            >
              Follow <span className="italic font-light text-premiumGold">@FiveBeansCafe</span>
            </motion.h2>
          </div>
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#"
            className="flex items-center gap-2 text-softCream hover:text-premiumGold transition-colors"
          >
            <FaInstagram size={20} />
            <span className="font-poppins text-xs uppercase tracking-widest">Join our community</span>
          </motion.a>
        </div>
      </div>

      <div className="flex w-[150vw] md:w-full overflow-x-auto pb-8 hide-scrollbar md:grid md:grid-cols-5 gap-4 px-4 md:px-0">
        {feed.map((post, index) => (
          <motion.div 
            key={post.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="w-64 md:w-full flex-shrink-0 aspect-square relative group overflow-hidden cursor-pointer"
          >
            <img 
              src={post.image} 
              alt="Instagram post" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-richBlack/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <FaInstagram className="text-white text-3xl transform scale-50 group-hover:scale-100 transition-transform duration-300" />
            </div>
          </motion.div>
        ))}
      </div>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '2',
    date: '',
    time: '',
    requests: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    alert("Reservation requested! (This is a demo)");
  };

  return (
    <section id="reservations" className="py-24 bg-richBlack relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Info Side */}
          <div className="w-full lg:w-5/12 pt-8">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-inter text-copperBronze uppercase tracking-[0.2em] mb-4 text-sm"
            >
              Join Us
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-playfair text-4xl md:text-5xl lg:text-6xl text-warmIvory mb-8 leading-tight"
            >
              Reserve Your <span className="italic font-light text-premiumGold">Perfect Evening</span>
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8 mt-12"
            >
              <div>
                <h4 className="font-poppins text-premiumGold text-sm tracking-widest uppercase mb-2">Location</h4>
                <p className="font-inter text-softCream/70 font-light">
                  123 Culinary Boulevard,<br/>
                  Metropolis, NY 10001
                </p>
              </div>
              
              <div>
                <h4 className="font-poppins text-premiumGold text-sm tracking-widest uppercase mb-2">Hours</h4>
                <p className="font-inter text-softCream/70 font-light">
                  Tuesday - Sunday: 5:00 PM - 11:00 PM<br/>
                  Monday: Closed
                </p>
              </div>

              <div>
                <h4 className="font-poppins text-premiumGold text-sm tracking-widest uppercase mb-2">Contact</h4>
                <p className="font-inter text-softCream/70 font-light">
                  +1 (555) 123-4567<br/>
                  reservations@fivebeanscafe.com
                </p>
              </div>
            </motion.div>
          </div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-7/12 bg-charcoal p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden rounded-sm"
          >
            {/* Form Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-premiumGold/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="font-poppins text-xs uppercase tracking-widest text-softCream/50">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 pb-3 font-inter text-warmIvory focus:outline-none focus:border-premiumGold transition-colors placeholder:text-white/10"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="font-poppins text-xs uppercase tracking-widest text-softCream/50">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 pb-3 font-inter text-warmIvory focus:outline-none focus:border-premiumGold transition-colors placeholder:text-white/10"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="font-poppins text-xs uppercase tracking-widest text-softCream/50">Phone</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 pb-3 font-inter text-warmIvory focus:outline-none focus:border-premiumGold transition-colors placeholder:text-white/10"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                {/* Guests */}
                <div className="space-y-2">
                  <label htmlFor="guests" className="font-poppins text-xs uppercase tracking-widest text-softCream/50">Guests</label>
                  <select 
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 pb-3 font-inter text-warmIvory focus:outline-none focus:border-premiumGold transition-colors appearance-none cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <option key={num} value={num} className="bg-charcoal text-warmIvory">{num} Person{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div className="space-y-2">
                  <label htmlFor="date" className="font-poppins text-xs uppercase tracking-widest text-softCream/50">Date</label>
                  <input 
                    type="date" 
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 pb-3 font-inter text-warmIvory focus:outline-none focus:border-premiumGold transition-colors custom-date-input"
                  />
                </div>

                {/* Time */}
                <div className="space-y-2">
                  <label htmlFor="time" className="font-poppins text-xs uppercase tracking-widest text-softCream/50">Time</label>
                  <select 
                    id="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 pb-3 font-inter text-warmIvory focus:outline-none focus:border-premiumGold transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-charcoal text-white/50">Select Time</option>
                    <option value="17:00" className="bg-charcoal text-warmIvory">5:00 PM</option>
                    <option value="17:30" className="bg-charcoal text-warmIvory">5:30 PM</option>
                    <option value="18:00" className="bg-charcoal text-warmIvory">6:00 PM</option>
                    <option value="18:30" className="bg-charcoal text-warmIvory">6:30 PM</option>
                    <option value="19:00" className="bg-charcoal text-warmIvory">7:00 PM</option>
                    <option value="19:30" className="bg-charcoal text-warmIvory">7:30 PM</option>
                    <option value="20:00" className="bg-charcoal text-warmIvory">8:00 PM</option>
                    <option value="20:30" className="bg-charcoal text-warmIvory">8:30 PM</option>
                    <option value="21:00" className="bg-charcoal text-warmIvory">9:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div className="space-y-2 pt-4">
                <label htmlFor="requests" className="font-poppins text-xs uppercase tracking-widest text-softCream/50">Special Requests</label>
                <textarea 
                  id="requests"
                  name="requests"
                  rows="3"
                  value={formData.requests}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 pb-3 font-inter text-warmIvory focus:outline-none focus:border-premiumGold transition-colors placeholder:text-white/10 resize-none"
                  placeholder="Allergies, anniversaries, or special accommodations..."
                ></textarea>
              </div>

              {/* Submit */}
              <div className="pt-6">
                <button 
                  type="submit" 
                  className="w-full py-4 bg-premiumGold text-richBlack font-poppins font-semibold tracking-widest uppercase hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                >
                  Confirm Reservation
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
      
      <style>{`
        .custom-date-input::-webkit-calendar-picker-indicator {
          filter: invert(1) opacity(0.5);
          cursor: pointer;
        }
        .custom-date-input::-webkit-calendar-picker-indicator:hover {
          filter: invert(1) sepia(1) saturate(5) hue-rotate(10deg) opacity(1);
        }
      `}</style>
    </section>
  );
}

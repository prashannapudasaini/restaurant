import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1c] pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Brand */}
          <div className="lg:pr-8">
            <Link to="/" className="flex items-start group mb-6">
              <img src="/logo.png" alt="Five Beans Cafe Logo" className="h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105 brightness-125" />
            </Link>
            <p className="font-inter text-softCream/60 text-sm leading-relaxed mb-8">
              Where culinary art meets exceptional experience. Discover the true taste of luxury dining in the heart of the city.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-warmIvory hover:border-premiumGold hover:text-premiumGold transition-colors">
                <FiInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-warmIvory hover:border-premiumGold hover:text-premiumGold transition-colors">
                <FiFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-warmIvory hover:border-premiumGold hover:text-premiumGold transition-colors">
                <FiTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-warmIvory hover:border-premiumGold hover:text-premiumGold transition-colors">
                <FiYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-xl text-warmIvory mb-6">Quick Links</h4>
            <ul className="space-y-4 font-inter text-softCream/70 text-sm">
              <li><Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-premiumGold transition-colors">About Us</Link></li>
              <li><Link to="/kitchen" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-premiumGold transition-colors">The Kitchen</Link></li>
              <li><Link to="/reservations" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-premiumGold transition-colors">Reservations</Link></li>
              <li><Link to="/bar" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-premiumGold transition-colors">Bar</Link></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-premiumGold transition-colors">Private Dining</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-premiumGold transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair text-xl text-warmIvory mb-6">Contact</h4>
            <ul className="space-y-4 font-inter text-softCream/70 text-sm">
              <li>123 Culinary Boulevard</li>
              <li>Metropolis, NY 10001</li>
              <li className="pt-2">
                <a href="tel:+15551234567" className="hover:text-premiumGold transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li>
                <a href="mailto:info@fivebeanscafe.com" className="hover:text-premiumGold transition-colors">
                  info@fivebeanscafe.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-playfair text-xl text-warmIvory mb-6">Newsletter</h4>
            <p className="font-inter text-softCream/60 text-sm mb-6">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-transparent border-b border-white/20 pb-3 font-inter text-sm text-warmIvory focus:outline-none focus:border-premiumGold transition-colors placeholder:text-white/30"
              />
              <button 
                type="submit" 
                className="font-poppins text-xs uppercase tracking-widest text-premiumGold hover:text-warmIvory transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-inter text-softCream/40 text-xs">
            &copy; {new Date().getFullYear()} Five Beans Cafe. All rights reserved.
          </p>
          <div className="flex gap-6 font-inter text-softCream/40 text-xs">
            <a href="#" className="hover:text-warmIvory transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-warmIvory transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

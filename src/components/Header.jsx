import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiGlobe, FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Reservations', href: '#reservations' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 glass shadow-lg' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex flex-col items-center group">
          <span className="font-playfair text-2xl md:text-3xl font-bold tracking-widest text-warmIvory group-hover:text-premiumGold transition-colors">
            AURORA
          </span>
          <span className="text-xs tracking-[0.3em] text-copperBronze uppercase">
            Dining
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-softCream hover:text-premiumGold transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-premiumGold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="text-softCream hover:text-premiumGold transition-colors">
            <FiSearch size={20} />
          </button>
          <button className="text-softCream hover:text-premiumGold transition-colors">
            <FiGlobe size={20} />
          </button>
          <a
            href="#reservations"
            className="px-6 py-2 border border-premiumGold text-premiumGold font-poppins text-sm uppercase tracking-wider hover:bg-premiumGold hover:text-richBlack transition-colors duration-300"
          >
            Reserve
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-softCream hover:text-premiumGold transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass flex flex-col items-center py-8 space-y-6 md:hidden border-t border-white/10"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-softCream hover:text-premiumGold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#reservations"
              onClick={() => setMobileMenuOpen(false)}
              className="px-8 py-3 border border-premiumGold text-premiumGold font-poppins text-sm uppercase tracking-wider hover:bg-premiumGold hover:text-richBlack transition-colors duration-300"
            >
              Reserve A Table
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

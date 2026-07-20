import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiGlobe, FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Menu', href: '/menu' },
  { name: 'Bar', href: '/bar' },
  { name: 'Reservations', href: '/reservations' },
  { name: 'Special', href: '/special' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      
      lastScrollY.current = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 glass shadow-lg' : 'py-4 bg-transparent'
      } ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link className="flex justify-between items-center group" to="/">
          <img src="/logo.png" alt="Five Beans Cafe Logo" className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105 brightness-125" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-sm font-medium text-softCream hover:text-premiumGold transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-premiumGold transition-all duration-300 group-hover:w-full"></span>
            </Link>
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
          <Link
            to="/reservations"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-6 py-2 border border-premiumGold text-premiumGold font-poppins text-sm uppercase tracking-wider hover:bg-premiumGold hover:text-richBlack transition-colors duration-300"
          >
            Reserve
          </Link>
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
              <Link
                key={link.name}
                to={link.href}
                className="text-lg font-medium text-softCream hover:text-premiumGold transition-colors"
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/reservations"
              onClick={() => {
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-3 border border-premiumGold text-premiumGold font-poppins text-sm uppercase tracking-wider hover:bg-premiumGold hover:text-richBlack transition-colors duration-300"
            >
              Reserve A Table
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

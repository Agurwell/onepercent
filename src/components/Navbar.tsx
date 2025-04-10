import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight,  } from 'lucide-react';
import GradientIcon from './GradientIcon';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    // Prevent scrolling when mobile menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <header 
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isOpen
        ? 'bg-gradient-to-r from-slate-800 via-purple-700 to-pink-500'
        : scrolled
          ? 'bg-gradient-to-r from-slate-800 via-purple-700 to-pink-500 backdrop-blur-md shadow-sm py-3'
          : 'bg-gradient-to-r from-slate-800 via-purple-700 to-pink-500 py-5'
    }`}
  >
<div className="container-custom flex justify-between items-center py-1 md:py-2">
  <Link
    to="/"
    className="flex items-center gap-1.5 transform transition-all duration-300"
  >
    <img
      src="/images/1.png"
      alt="ONE Logo"
      className={`h-12 md:h-14 object-contain transition-transform duration-300 ${
        scrolled ? 'scale-90' : 'scale-100'
      } neon-glow`}
    />
   <span className="font-black text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animated-gradient">
  ONE
</span>
  </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link 
            to="/" 
            className={`font-medium transition-colors hover:text-one-blue ${location.pathname === '/' ? 'text-one-blue' : 'text-white'}`}
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className={`font-medium transition-colors hover:text-one-blue ${location.pathname === '/services' ? 'text-one-blue' : 'text-white'}`}
          >
            Services
          </Link>
          <Link 
            to="/about" 
            className={`font-medium transition-colors hover:text-one-blue ${location.pathname === '/about' ? 'text-one-blue' : 'text-white'}`}
          >
            About
          </Link>
          <Link 
            to="/testimonials" 
            className={`font-medium transition-colors hover:text-one-blue ${location.pathname === '/testimonials' ? 'text-one-blue' : 'text-white'}`}
          >
            Testimonials
          </Link>
          <Link 
            to="/faq" 
            className={`font-medium transition-colors hover:text-one-blue ${location.pathname === '/faq' ? 'text-one-blue' : 'text-white'}`}
          >
            FAQ + Stats
          </Link>
          <Link 
            to="/contact" 
            className="btn-primary flex items-center gap-1 py-2"
          >
            Let's Talk <ArrowUpRight size={16} />
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
  className="md:hidden focus:outline-none"
  onClick={toggleMenu}
  aria-label="Toggle navigation menu"
  aria-expanded={isOpen}
>
  {isOpen ? (
    <GradientIcon icon="x" size={28} />
  ) : (
    <GradientIcon icon="menu" size={28} />
  )}
</button>
      </div>

      {/* Mobile Navigation */}
      <div 
  className={`fixed left-0 right-0 top-[60px] bottom-0 bg-gradient-to-br from-one-dark via-black to-one-dark/90 z-40 transition-transform duration-300 transform ${
    isOpen ? 'translate-x-0' : 'translate-x-full'
  } md:hidden`}
  aria-hidden={!isOpen}
>
        <nav className="flex flex-col p-6 space-y-6">
          <Link 
            to="/" 
            className={`text-xl font-bold ${location.pathname === '/' ? 'text-one-blue' : 'text-white'}`}
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className={`text-xl font-bold ${location.pathname === '/services' ? 'text-one-blue' : 'text-white'}`}
          >
            Services
          </Link>
          <Link 
            to="/about" 
            className={`text-xl font-bold ${location.pathname === '/about' ? 'text-one-blue' : 'text-white'}`}
          >
            About
          </Link>
          <Link 
            to="/testimonials" 
            className={`text-xl font-bold ${location.pathname === '/testimonials' ? 'text-one-blue' : 'text-white'}`}
          >
            Testimonials
          </Link>
          <Link 
            to="/faq" 
            className={`text-xl font-bold ${location.pathname === '/faq' ? 'text-one-blue' : 'text-white'}`}
          >
            FAQ + Stats
          </Link>
          <Link 
            to="/contact" 
            className="btn-accent w-full text-center mt-4"
          >
            Let's Talk
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Zap } from 'lucide-react';

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
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Zap size={28} className="text-one-blue" />
          <span className="font-black text-xl md:text-2xl">ONE</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link 
            to="/" 
            className={`font-medium transition-colors hover:text-one-blue ${location.pathname === '/' ? 'text-one-blue' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className={`font-medium transition-colors hover:text-one-blue ${location.pathname === '/services' ? 'text-one-blue' : ''}`}
          >
            Services
          </Link>
          <Link 
            to="/about" 
            className={`font-medium transition-colors hover:text-one-blue ${location.pathname === '/about' ? 'text-one-blue' : ''}`}
          >
            About
          </Link>
          <Link 
            to="/testimonials" 
            className={`font-medium transition-colors hover:text-one-blue ${location.pathname === '/testimonials' ? 'text-one-blue' : ''}`}
          >
            Testimonials
          </Link>
          <Link 
            to="/faq" 
            className={`font-medium transition-colors hover:text-one-blue ${location.pathname === '/faq' ? 'text-one-blue' : ''}`}
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
          className="md:hidden text-one-dark focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
        style={{ top: '60px' }}
        aria-hidden={!isOpen}
      >
        <nav className="flex flex-col p-6 space-y-6">
          <Link 
            to="/" 
            className={`text-xl font-bold ${location.pathname === '/' ? 'text-one-blue' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className={`text-xl font-bold ${location.pathname === '/services' ? 'text-one-blue' : ''}`}
          >
            Services
          </Link>
          <Link 
            to="/about" 
            className={`text-xl font-bold ${location.pathname === '/about' ? 'text-one-blue' : ''}`}
          >
            About
          </Link>
          <Link 
            to="/testimonials" 
            className={`text-xl font-bold ${location.pathname === '/testimonials' ? 'text-one-blue' : ''}`}
          >
            Testimonials
          </Link>
          <Link 
            to="/faq" 
            className={`text-xl font-bold ${location.pathname === '/faq' ? 'text-one-blue' : ''}`}
          >
            FAQ + Stats
          </Link>
          <Link 
            to="/contact" 
            className="btn-primary w-full text-center mt-4"
          >
            Let's Talk
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
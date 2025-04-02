import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Zap, Mail, Phone, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-one-dark text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <Zap size={28} className="text-one-blue" />
              <span className="font-black text-2xl">ONE</span>
            </Link>
            <p className="text-white/80">
              Website. Marketing. Systems.<br/>
              Strategy. Results. No fluff.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://instagram.com" className="text-white/80 hover:text-one-blue transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" className="text-white/80 hover:text-one-blue transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/80 hover:text-one-blue transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-one-blue transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-one-blue transition-colors">About</Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-white/80 hover:text-one-blue transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link to="/faq" className="text-white/80 hover:text-one-blue transition-colors">FAQ + Stats</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={20} className="shrink-0 text-one-blue mt-1" />
                <a href="mailto:adam@youronepercent.com" className="text-white/80 hover:text-one-blue transition-colors">
                  adam@youronepercent.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={20} className="shrink-0 text-one-blue mt-1" />
                <a href="tel:4402511177" className="text-white/80 hover:text-one-blue transition-colors">
                  (440) 251-1177
                </a>
              </li>
            </ul>
          </div>
          
          {/* CTA */}
          <div>
            <h3 className="text-lg font-bold mb-6">Ready to grow?</h3>
            <Link 
              to="/contact" 
              className="btn-accent flex items-center gap-1 w-full justify-center"
            >
              Let's Talk <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} One. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 text-white/60 text-sm">
            <span>youronepercent.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
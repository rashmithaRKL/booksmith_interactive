
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-author-navy text-white pt-16 pb-8">
      <div className="container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and description */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <h2 className="font-serif text-3xl font-bold text-white">Scriptoria</h2>
            </Link>
            <p className="text-white/80 mt-4 max-w-xs">
              Crafting stories that resonate, books that inspire, and words that last a lifetime.
            </p>
            <div className="flex space-x-4 pt-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-author-gold transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-author-gold transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-author-gold transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-author-gold transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-0.5 after:bg-author-gold after:bottom-0 after:left-0 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/80 hover:text-author-gold transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-author-gold transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-author-gold transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-white/80 hover:text-author-gold transition-colors duration-200">
                  Packages
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-author-gold transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-0.5 after:bg-author-gold after:bottom-0 after:left-0 pb-2">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-white/80 hover:text-author-gold transition-colors duration-200">
                  Ghostwriting
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-author-gold transition-colors duration-200">
                  Book Editing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-author-gold transition-colors duration-200">
                  Cover Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-author-gold transition-colors duration-200">
                  Publishing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-author-gold transition-colors duration-200">
                  Storytelling Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-0.5 after:bg-author-gold after:bottom-0 after:left-0 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-author-gold mt-1 flex-shrink-0" />
                <span className="text-white/80">
                  123 Storyteller Avenue, Literary District, NY 10001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-author-gold flex-shrink-0" />
                <a href="tel:+12345678900" className="text-white/80 hover:text-author-gold transition-colors duration-200">
                  +1 (234) 567-8900
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-author-gold flex-shrink-0" />
                <a href="mailto:contact@scriptoria.com" className="text-white/80 hover:text-author-gold transition-colors duration-200">
                  contact@scriptoria.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Scriptoria. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-white/60 text-sm hover:text-author-gold transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/60 text-sm hover:text-author-gold transition-colors duration-200">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll detection for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle route change - close mobile menu and scroll to top
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Packages', path: '/packages' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'py-3 bg-white/90 backdrop-blur-md shadow-md'
        : 'py-5 bg-white/95 '
        }`}
    >
      <div className="container-padding flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center"
        >
          <span className="font-serif text-2xl font-bold text-author-burgundy">
            Scriptoria
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative font-medium transition-colors ${location.pathname === link.path
                ? 'text-author-burgundy after:scale-x-100'
                : 'text-author-navy hover:text-author-burgundy'
                } after:content-[''] after:absolute after:w-full after:h-0.5 
              after:bottom-0 after:left-0 after:bg-author-burgundy 
              ${location.pathname === link.path ? 'after:scale-x-100' : 'after:scale-x-0'} 
              after:origin-bottom-right after:transition-transform after:duration-300
              hover:after:scale-x-100 hover:after:origin-bottom-left`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Contact button */}
        <div className="hidden md:block">
          <Link to="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-author-navy p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-bounce-soft ${isOpen
          ? 'max-h-[400px] opacity-100 visible'
          : 'max-h-0 opacity-0 invisible'
          }`}
      >
        <div className="container-padding py-4 bg-white/95 backdrop-blur-md shadow-md flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`py-2 px-4 rounded-md transition-colors ${location.pathname === link.path
                ? 'bg-author-burgundy/10 text-author-burgundy font-medium'
                : 'text-author-navy hover:bg-author-burgundy/5'
                }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn-primary text-center"
            onClick={() => setIsOpen(false)}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

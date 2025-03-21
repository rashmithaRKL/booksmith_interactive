
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Parallax scroll effect
    const handleScroll = () => {
      if (!heroRef.current || !textRef.current) return;
      
      const scrolled = window.scrollY;
      const translateY = scrolled * 0.3;
      
      // Apply transformations using translate3d for better performance
      textRef.current.style.transform = `translate3d(0, ${translateY}px, 0)`;
      heroRef.current.style.backgroundPositionY = `${-scrolled * 0.05}px`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={heroRef}
      className="h-screen relative flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1516383607781-913a19294fd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div 
        className="absolute inset-0 bg-gradient-to-t from-author-navy/70 to-transparent"
        aria-hidden="true"
      />
      
      <div ref={textRef} className="container-padding text-center relative z-10">
        <span className="inline-block py-1 px-3 rounded-full bg-author-gold/20 text-author-gold font-medium text-sm mb-4 animate-fade-in">
          AWARD-WINNING BOOK WRITING SERVICES
        </span>
        
        <h1 className="title-xl text-white mb-6 max-w-4xl mx-auto leading-tight animate-fade-in [animation-delay:200ms]">
          Transforming Ideas Into <span className="italic text-author-gold">Literary Masterpieces</span>
        </h1>
        
        <p className="body-lead text-white/90 max-w-2xl mx-auto mb-8 animate-fade-in [animation-delay:400ms]">
          From concept to published work, we bring your story to life with expert writing, 
          editing, and publishing services tailored to your unique voice.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in [animation-delay:600ms]">
          <Link 
            to="/services" 
            className="btn-primary group flex items-center"
          >
            Explore Services
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
          <Link 
            to="/contact" 
            className="btn-secondary"
          >
            Get a Quote
          </Link>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-white rounded-full animate-[pulse_1.5s_infinite]"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

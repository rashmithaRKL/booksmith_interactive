
import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Published Author",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    quote: "Working with Scriptoria transformed my rough manuscript into a polished novel that I'm truly proud of. Their attention to detail and understanding of my vision exceeded my expectations."
  },
  {
    id: 2,
    name: "Michael Zhang",
    position: "Business Executive",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    quote: "The team at Scriptoria helped me articulate my business philosophy into a compelling book that has opened doors to speaking engagements and consulting opportunities."
  },
  {
    id: 3,
    name: "Sarah Williams",
    position: "First-time Author",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    quote: "As someone with a story to tell but lacking writing experience, I found their ghostwriting services to be the perfect solution. They captured my voice perfectly while adding professional polish."
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    // Set up Intersection Observer for the section animation
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          entries[0].target.classList.add('is-visible');
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 8000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-author-navy text-white overflow-hidden animate-on-scroll"
      style={{
        background: 'linear-gradient(rgba(31, 41, 55, 0.9), rgba(31, 41, 55, 0.9)), url("https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container-padding">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-author-gold/20 text-author-gold font-medium text-sm mb-4">
            CLIENT TESTIMONIALS
          </span>
          <h2 className="title-lg mb-4 text-white">What Our Clients Say</h2>
          <p className="body-lead text-white/80 max-w-2xl mx-auto">
            Hear from authors and businesses who have transformed their ideas into reality with our writing services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div 
            ref={testimonialsRef}
            className="overflow-hidden rounded-xl glass-card bg-white/10 p-8 md:p-12"
          >
            <Quote className="text-author-gold w-14 h-14 mb-6 opacity-50" />
            
            <div className="min-h-[200px]">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`transition-all duration-500 ${
                    index === current 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 absolute translate-y-8'
                  }`}
                  style={{ display: index === current ? 'block' : 'none' }}
                >
                  <p className="text-xl md:text-2xl font-serif italic text-white/90 mb-8 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-14 h-14 object-cover rounded-full border-2 border-author-gold" 
                      loading="lazy"
                    />
                    <div className="ml-4">
                      <h4 className="font-bold text-white">{testimonial.name}</h4>
                      <p className="text-white/70">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prev}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === current ? 'bg-author-gold scale-125' : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={next}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

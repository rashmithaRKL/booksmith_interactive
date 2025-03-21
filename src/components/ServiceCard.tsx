
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  index: number;
}

const ServiceCard = ({ icon, title, description, link, index }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set up Intersection Observer for animation
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          entries[0].target.classList.add('is-visible');
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`animate-on-scroll stagger-delay-${index + 1} group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white h-full rounded-lg shadow-md hover:shadow-xl transition-all duration-500 p-8 flex flex-col border border-gray-100 hover:border-author-burgundy/20 relative overflow-hidden">
        {/* Background decoration element */}
        <div 
          className={`absolute top-0 right-0 w-24 h-24 bg-author-burgundy/5 rounded-bl-full transition-all duration-500 ${
            isHovered ? 'scale-150' : 'scale-100'
          }`}
        ></div>
        
        {/* Icon container */}
        <div className="p-3 bg-author-burgundy/10 text-author-burgundy rounded-lg w-14 h-14 flex items-center justify-center mb-5 relative z-10 transition-all duration-300 group-hover:bg-author-burgundy group-hover:text-white">
          {icon}
        </div>
        
        {/* Content */}
        <h3 className="font-serif text-xl font-bold mb-3 relative z-10">{title}</h3>
        <p className="text-author-darkgray text-base leading-relaxed mb-6 flex-grow relative z-10">
          {description}
        </p>
        
        {/* Link */}
        <Link 
          to={link} 
          className="flex items-center text-author-burgundy font-medium group-hover:text-author-navy transition-colors relative z-10 mt-auto"
        >
          Learn more
          <ArrowRight 
            size={16} 
            className={`ml-2 transition-transform duration-300 ${
              isHovered ? 'translate-x-1' : ''
            }`} 
          />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;

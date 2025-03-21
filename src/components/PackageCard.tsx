
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

interface PackageFeature {
  id: number;
  text: string;
}

interface PackageCardProps {
  title: string;
  price: string;
  period?: string;
  description: string;
  features: PackageFeature[];
  isPopular?: boolean;
  link: string;
  index: number;
}

const PackageCard = ({
  title,
  price,
  period,
  description,
  features,
  isPopular = false,
  link,
  index
}: PackageCardProps) => {
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
      className={`animate-on-scroll stagger-delay-${index + 1}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`rounded-xl shadow-lg transition-all duration-500 h-full flex flex-col ${
          isPopular 
            ? 'border-2 border-author-burgundy relative scale-105 z-10 bg-white' 
            : 'border border-gray-200 bg-white hover:border-author-burgundy/30'
        } ${isHovered && isPopular ? 'shadow-xl' : ''} ${isHovered && !isPopular ? 'shadow-lg' : ''}`}
      >
        {/* Popular badge */}
        {isPopular && (
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-author-burgundy text-white text-sm font-medium py-1 px-4 rounded-full shadow-md">
              Most Popular
            </div>
          </div>
        )}
        
        {/* Package header */}
        <div className={`p-6 ${isPopular ? 'bg-author-burgundy/5' : 'bg-gray-50'} rounded-t-xl border-b border-gray-200`}>
          <h3 className="font-serif text-xl font-bold mb-1 text-center">{title}</h3>
          <p className="text-author-darkgray text-center mb-3">{description}</p>
          <div className="text-center">
            <span className="text-3xl font-bold">{price}</span>
            {period && <span className="text-gray-500 text-sm ml-1">{period}</span>}
          </div>
        </div>
        
        {/* Features list */}
        <div className="p-6 flex-grow">
          <ul className="space-y-3">
            {features.map((feature) => (
              <li key={feature.id} className="flex items-start">
                <Check size={18} className="text-author-burgundy mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-author-darkgray text-sm">{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* CTA button */}
        <div className="p-6 pt-0 mt-auto">
          <Link 
            to={link}
            className={`block w-full py-3 px-6 rounded-md text-center transition-all duration-300 font-medium ${
              isPopular
                ? 'bg-author-burgundy text-white hover:bg-author-burgundy/90 shadow-md hover:shadow-lg'
                : 'bg-white border border-author-burgundy text-author-burgundy hover:bg-author-burgundy/5'
            }`}
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;


import { useEffect } from 'react';
import Hero from '../components/Hero';
import FeaturedBooks from '../components/FeaturedBooks';
import Testimonials from '../components/Testimonials';
import ServiceCard from '../components/ServiceCard';
import { Link } from 'react-router-dom';
import { Book, Edit, Pen, BookOpen, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: <Book size={24} />,
    title: "Book Writing",
    description: "From memoirs to novels, we bring your ideas to life with our expert ghostwriting services.",
    link: "/services",
  },
  {
    id: 2,
    icon: <Edit size={24} />,
    title: "Editing & Proofreading",
    description: "Polish your manuscript with professional editing to ensure clarity, consistency, and perfection.",
    link: "/services",
  },
  {
    id: 3,
    icon: <Pen size={24} />,
    title: "Cover Design",
    description: "Make a lasting first impression with a professionally designed book cover that captures your story.",
    link: "/services",
  },
  {
    id: 4,
    icon: <BookOpen size={24} />,
    title: "Publishing Support",
    description: "Navigate the complex publishing landscape with our comprehensive guidance and support.",
    link: "/services",
  }
];

const Index = () => {
  // Set up observers for animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container-padding">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block py-1 px-3 rounded-full bg-author-burgundy/10 text-author-burgundy font-medium text-sm mb-4">
              OUR EXPERTISE
            </span>
            <h2 className="title-lg mb-4">Professional Writing Services</h2>
            <p className="body-lead text-author-darkgray max-w-2xl mx-auto">
              We offer comprehensive services to help you bring your literary vision to life, from concept to publication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
                index={index}
              />
            ))}
          </div>

          <div className="text-center mt-12 animate-on-scroll">
            <Link 
              to="/services" 
              className="inline-flex items-center btn-secondary group"
            >
              View All Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <FeaturedBooks />

      {/* Process Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container-padding">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block py-1 px-3 rounded-full bg-author-burgundy/10 text-author-burgundy font-medium text-sm mb-4">
              OUR PROCESS
            </span>
            <h2 className="title-lg mb-4">How We Craft Your Story</h2>
            <p className="body-lead text-author-darkgray max-w-2xl mx-auto">
              A streamlined approach to transform your ideas into polished, published works.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-1/3 left-0 right-0 h-0.5 bg-author-burgundy/20 z-0"></div>
            
            {/* Step 1 */}
            <div className="relative z-10 animate-on-scroll stagger-delay-1">
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 h-full">
                <div className="w-12 h-12 bg-author-burgundy text-white rounded-full flex items-center justify-center font-serif text-xl font-bold mb-5 mx-auto">
                  1
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-center">Initial Consultation</h3>
                <p className="text-author-darkgray text-center">
                  We begin with a detailed discussion to understand your vision, goals, and audience for the book.
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative z-10 animate-on-scroll stagger-delay-2">
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 h-full">
                <div className="w-12 h-12 bg-author-burgundy text-white rounded-full flex items-center justify-center font-serif text-xl font-bold mb-5 mx-auto">
                  2
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-center">Outline & Research</h3>
                <p className="text-author-darkgray text-center">
                  We develop a comprehensive outline and conduct necessary research to build a solid foundation.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative z-10 animate-on-scroll stagger-delay-3">
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 h-full">
                <div className="w-12 h-12 bg-author-burgundy text-white rounded-full flex items-center justify-center font-serif text-xl font-bold mb-5 mx-auto">
                  3
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-center">Writing & Editing</h3>
                <p className="text-author-darkgray text-center">
                  Our experts write and refine your manuscript through multiple rounds of editing and feedback.
                </p>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="relative z-10 animate-on-scroll stagger-delay-4">
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 h-full">
                <div className="w-12 h-12 bg-author-burgundy text-white rounded-full flex items-center justify-center font-serif text-xl font-bold mb-5 mx-auto">
                  4
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-center">Publication</h3>
                <p className="text-author-darkgray text-center">
                  We guide you through design, formatting, and publishing options to bring your book to market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Call-to-Action Section */}
      <section className="py-24 bg-author-cream">
        <div className="container-padding">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <span className="inline-block py-1 px-3 rounded-full bg-author-burgundy/10 text-author-burgundy font-medium text-sm mb-4">
              START YOUR JOURNEY
            </span>
            <h2 className="title-lg mb-6">Ready to Share Your Story with the World?</h2>
            <p className="body-lead text-author-darkgray mb-8">
              Let's transform your ideas into a professionally written and published book that captivates readers and leaves a lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/packages" 
                className="btn-primary"
              >
                Explore Packages
              </Link>
              <Link 
                to="/contact" 
                className="btn-secondary"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;

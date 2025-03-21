
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, BookOpen, Globe } from 'lucide-react';

const About = () => {
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
    <main className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section 
        className="py-20 relative overflow-hidden bg-author-navy text-white"
        style={{
          background: 'linear-gradient(rgba(31, 41, 55, 0.8), rgba(31, 41, 55, 0.9)), url("https://images.unsplash.com/photo-1510172951991-856a62a9cde1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-author-navy/50 to-author-navy/90"></div>
        
        <div className="container-padding relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-author-gold/20 text-author-gold font-medium text-sm mb-4 animate-fade-in">
              OUR STORY
            </span>
            <h1 className="title-xl text-white mb-6 animate-fade-in [animation-delay:200ms]">
              Crafting Words That <span className="text-author-gold italic">Resonate</span>
            </h1>
            <p className="body-lead text-white/90 mb-8 animate-fade-in [animation-delay:400ms]">
              For over a decade, we've been helping authors and businesses tell their stories with clarity, 
              precision, and heart. Our passion for storytelling drives everything we do.
            </p>
          </div>
        </div>
        
        {/* Floating book pages animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, index) => (
            <div 
              key={index}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
                opacity: 0.1 + Math.random() * 0.2
              }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                <path d="M3,3V21H21V3H3M7,7H17V9H7V7M7,11H17V13H7V11M7,15H13V17H7V15Z" />
              </svg>
            </div>
          ))}
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-white">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <span className="inline-block py-1 px-3 rounded-full bg-author-burgundy/10 text-author-burgundy font-medium text-sm mb-4">
                OUR MISSION
              </span>
              <h2 className="title-lg mb-6">
                Bringing Stories to Life with Precision and Passion
              </h2>
              <p className="body-lead text-author-darkgray mb-6">
                At Scriptoria, we believe that everyone has a story worth telling. Our mission is to help you tell that story in the most compelling way possible, whether you're an aspiring author with a brilliant idea, an expert with knowledge to share, or a business with a vision to communicate.
              </p>
              <p className="body-text text-author-darkgray mb-8">
                We combine the art of storytelling with the craft of writing to create books that educate, entertain, and inspire. Our team of skilled writers, editors, and publishing experts are dedicated to maintaining the authenticity of your voice while elevating your narrative to its highest potential.
              </p>
              <div className="mt-8">
                <Link to="/contact" className="btn-primary group inline-flex items-center">
                  Start Your Journey <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </div>
            </div>
            
            <div className="relative animate-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1519682577862-22b62b24e493?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                alt="Stack of books" 
                className="rounded-lg shadow-lg w-full h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-xl max-w-[300px]">
                <p className="font-serif text-lg italic text-author-burgundy">
                  "Words have the power to change minds, touch hearts, and transform lives."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-author-cream">
        <div className="container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Books Written */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center animate-on-scroll stagger-delay-1">
              <BookOpen size={40} className="mx-auto mb-4 text-author-burgundy" />
              <h3 className="text-4xl font-bold font-serif mb-2">250+</h3>
              <p className="text-author-darkgray">Books Written</p>
            </div>
            
            {/* Happy Clients */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center animate-on-scroll stagger-delay-2">
              <Users size={40} className="mx-auto mb-4 text-author-burgundy" />
              <h3 className="text-4xl font-bold font-serif mb-2">180+</h3>
              <p className="text-author-darkgray">Happy Clients</p>
            </div>
            
            {/* Awards Won */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center animate-on-scroll stagger-delay-3">
              <Award size={40} className="mx-auto mb-4 text-author-burgundy" />
              <h3 className="text-4xl font-bold font-serif mb-2">35+</h3>
              <p className="text-author-darkgray">Awards Won</p>
            </div>
            
            {/* Countries Served */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center animate-on-scroll stagger-delay-4">
              <Globe size={40} className="mx-auto mb-4 text-author-burgundy" />
              <h3 className="text-4xl font-bold font-serif mb-2">20+</h3>
              <p className="text-author-darkgray">Countries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="container-padding">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block py-1 px-3 rounded-full bg-author-burgundy/10 text-author-burgundy font-medium text-sm mb-4">
              OUR EXPERTS
            </span>
            <h2 className="title-lg mb-4">Meet Our Literary Team</h2>
            <p className="body-lead text-author-darkgray max-w-2xl mx-auto">
              Our team of experienced writers, editors, and publishing professionals are dedicated to bringing your literary vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="animate-on-scroll stagger-delay-1 group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-xl border border-gray-100 group-hover:border-author-burgundy/20">
                <div className="relative overflow-hidden h-[300px]">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                    alt="Emily Watson" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-1">Emily Watson</h3>
                  <p className="text-author-burgundy italic mb-3">Lead Writer & Editor</p>
                  <p className="text-author-darkgray text-sm mb-4">
                    With over 15 years of experience in publishing, Emily specializes in fiction and memoir writing with a keen eye for compelling narratives.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="animate-on-scroll stagger-delay-2 group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-xl border border-gray-100 group-hover:border-author-burgundy/20">
                <div className="relative overflow-hidden h-[300px]">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                    alt="Michael Chen" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-1">Michael Chen</h3>
                  <p className="text-author-burgundy italic mb-3">Senior Ghostwriter</p>
                  <p className="text-author-darkgray text-sm mb-4">
                    Michael has ghostwritten over 50 books across various genres, with particular expertise in business, self-help, and non-fiction.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="animate-on-scroll stagger-delay-3 group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-xl border border-gray-100 group-hover:border-author-burgundy/20">
                <div className="relative overflow-hidden h-[300px]">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                    alt="Sarah Martinez" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-1">Sarah Martinez</h3>
                  <p className="text-author-burgundy italic mb-3">Publishing Consultant</p>
                  <p className="text-author-darkgray text-sm mb-4">
                    Sarah's background in traditional and self-publishing provides clients with valuable insights into the best publishing strategies for their books.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section 
        className="py-24 relative overflow-hidden"
        style={{
          background: 'linear-gradient(rgba(123, 45, 45, 0.9), rgba(123, 45, 45, 0.9)), url("https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container-padding relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="title-lg text-white mb-6 animate-on-scroll">Ready to Tell Your Story?</h2>
            <p className="body-lead text-white/90 mb-8 animate-on-scroll [animation-delay:200ms]">
              Let our team of expert writers and editors help you transform your ideas into a captivating book that resonates with readers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-on-scroll [animation-delay:400ms]">
              <Link to="/contact" className="btn-accent">
                Contact Us Today
              </Link>
              <Link to="/packages" className="px-6 py-3 bg-transparent border border-white text-white rounded-md hover:bg-white/10 transition-all duration-300">
                View Our Packages
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;

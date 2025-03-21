
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Book, Edit, BookOpen, Pen, ArrowRight, CheckCircle, BookMarked, Users } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: <Book size={30} />,
    title: "Ghostwriting",
    description: "Our professional ghostwriters craft compelling manuscripts that capture your voice, style, and message, whether you're creating fiction, non-fiction, memoir, or business content.",
    features: [
      "Comprehensive research and planning",
      "Multiple drafts and revisions",
      "Full confidentiality and discretion",
      "Regular progress updates and feedback sessions",
      "Delivery in your preferred format"
    ]
  },
  {
    id: 2,
    icon: <Edit size={30} />,
    title: "Editing & Proofreading",
    description: "Elevate your manuscript with our meticulous editing services, designed to refine your work while preserving your unique voice and style.",
    features: [
      "Developmental editing for structure and content",
      "Line editing for clarity and flow",
      "Copy editing for grammar and consistency",
      "Proofreading for final polish",
      "Formatting according to industry standards"
    ]
  },
  {
    id: 3,
    icon: <Pen size={30} />,
    title: "Cover Design",
    description: "Make a powerful first impression with a professionally designed book cover that captures the essence of your story and appeals to your target audience.",
    features: [
      "Multiple concept designs",
      "Professional typography",
      "High-resolution images",
      "Print and digital-ready formats",
      "Unlimited revisions until satisfaction"
    ]
  },
  {
    id: 4,
    icon: <BookOpen size={30} />,
    title: "Publishing Support",
    description: "Navigate the complex publishing landscape with our comprehensive support services, whether you're pursuing traditional publishing or self-publishing.",
    features: [
      "Manuscript preparation and formatting",
      "Query letter and proposal writing",
      "Agent and publisher research",
      "Self-publishing platform setup",
      "ISBN and copyright registration"
    ]
  },
  {
    id: 5,
    icon: <BookMarked size={30} />,
    title: "Content Creation",
    description: "Beyond books, we create engaging content in various formats to help you connect with your audience and establish your authority.",
    features: [
      "Blog posts and articles",
      "Website copy",
      "Newsletters and email sequences",
      "Social media content",
      "Press releases and media kits"
    ]
  },
  {
    id: 6,
    icon: <Users size={30} />,
    title: "Consultation & Coaching",
    description: "Get expert guidance on your writing journey through one-on-one consultations and coaching sessions tailored to your specific needs.",
    features: [
      "Story development and plotting",
      "Character creation and arcs",
      "Writing technique improvement",
      "Publishing strategy planning",
      "Marketing and platform building"
    ]
  }
];

const Services = () => {
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
        className="py-20 relative overflow-hidden"
        style={{
          background: 'linear-gradient(rgba(31, 41, 55, 0.8), rgba(31, 41, 55, 0.9)), url("https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container-padding relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-author-gold/20 text-author-gold font-medium text-sm mb-4 animate-fade-in">
              COMPREHENSIVE SOLUTIONS
            </span>
            <h1 className="title-xl text-white mb-6 animate-fade-in [animation-delay:200ms]">
              Our Writing <span className="text-author-gold italic">Services</span>
            </h1>
            <p className="body-lead text-white/90 mb-8 animate-fade-in [animation-delay:400ms]">
              From concept to publication, we provide all the expert services you need to bring your literary vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 gap-y-16">
            {services.map((service, index) => (
              <div key={service.id} className="animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-start">
                  <div className="p-4 bg-author-burgundy/10 text-author-burgundy rounded-lg mr-5 flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-author-darkgray mb-5">{service.description}</p>
                    
                    <h4 className="font-medium text-author-navy mb-3">What's Included:</h4>
                    <ul className="space-y-2 mb-5">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle size={18} className="text-author-burgundy mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-author-darkgray">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center text-author-burgundy font-medium group hover:text-author-navy transition-colors"
                    >
                      Inquire About This Service
                      <ArrowRight 
                        size={16} 
                        className="ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-author-cream">
        <div className="container-padding">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block py-1 px-3 rounded-full bg-author-burgundy/10 text-author-burgundy font-medium text-sm mb-4">
              OUR APPROACH
            </span>
            <h2 className="title-lg mb-4">How We Work With You</h2>
            <p className="body-lead text-author-darkgray max-w-2xl mx-auto">
              Our collaborative process ensures that your vision is realized while leveraging our expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="animate-on-scroll stagger-delay-1">
              <div className="bg-white rounded-lg shadow-md p-8 h-full border border-gray-100 relative overflow-hidden">
                {/* Step number */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-author-burgundy/10 rounded-full flex items-center justify-center">
                  <span className="font-serif text-3xl font-bold text-author-burgundy relative -top-2 -right-2">1</span>
                </div>
                
                <h3 className="font-serif text-xl font-bold mb-4">Discovery</h3>
                <p className="text-author-darkgray mb-4">
                  We begin with a thorough consultation to understand your vision, goals, target audience, and timeline. 
                  This foundational step ensures we create a strategy that aligns perfectly with your objectives.
                </p>
                <p className="text-author-darkgray font-medium">
                  Deliverables:
                </p>
                <ul className="list-disc list-inside text-author-darkgray ml-2 space-y-1">
                  <li>Detailed project brief</li>
                  <li>Timeline and milestones</li>
                  <li>Communication plan</li>
                </ul>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="animate-on-scroll stagger-delay-2">
              <div className="bg-white rounded-lg shadow-md p-8 h-full border border-gray-100 relative overflow-hidden">
                {/* Step number */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-author-burgundy/10 rounded-full flex items-center justify-center">
                  <span className="font-serif text-3xl font-bold text-author-burgundy relative -top-2 -right-2">2</span>
                </div>
                
                <h3 className="font-serif text-xl font-bold mb-4">Creation</h3>
                <p className="text-author-darkgray mb-4">
                  Our team begins the creative process, developing content that captures your voice and message. 
                  We maintain regular communication throughout, providing updates and incorporating your feedback.
                </p>
                <p className="text-author-darkgray font-medium">
                  Deliverables:
                </p>
                <ul className="list-disc list-inside text-author-darkgray ml-2 space-y-1">
                  <li>Initial draft development</li>
                  <li>Revision cycles</li>
                  <li>Progress reviews</li>
                </ul>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="animate-on-scroll stagger-delay-3">
              <div className="bg-white rounded-lg shadow-md p-8 h-full border border-gray-100 relative overflow-hidden">
                {/* Step number */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-author-burgundy/10 rounded-full flex items-center justify-center">
                  <span className="font-serif text-3xl font-bold text-author-burgundy relative -top-2 -right-2">3</span>
                </div>
                
                <h3 className="font-serif text-xl font-bold mb-4">Refinement</h3>
                <p className="text-author-darkgray mb-4">
                  After completing the initial creation phase, we enter a detailed refinement process to polish and perfect your content. 
                  This ensures the final product meets our high standards and exceeds your expectations.
                </p>
                <p className="text-author-darkgray font-medium">
                  Deliverables:
                </p>
                <ul className="list-disc list-inside text-author-darkgray ml-2 space-y-1">
                  <li>Comprehensive editing</li>
                  <li>Final approval process</li>
                  <li>Delivery in requested format</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-padding">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block py-1 px-3 rounded-full bg-author-burgundy/10 text-author-burgundy font-medium text-sm mb-4">
              QUESTIONS & ANSWERS
            </span>
            <h2 className="title-lg mb-4">Frequently Asked Questions</h2>
            <p className="body-lead text-author-darkgray max-w-2xl mx-auto">
              Find answers to common questions about our writing and publishing services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-gray-200">
            {/* FAQ Item 1 */}
            <div className="py-6 animate-on-scroll">
              <h3 className="font-serif text-xl font-bold mb-3">How does ghostwriting work?</h3>
              <p className="text-author-darkgray">
                Ghostwriting is a collaborative process where we write your book on your behalf, maintaining your voice and vision. We start with detailed interviews and research, create an outline for your approval, then write the manuscript with regular check-ins and feedback sessions. The final product is published under your name, with all rights belonging to you.
              </p>
            </div>
            
            {/* FAQ Item 2 */}
            <div className="py-6 animate-on-scroll">
              <h3 className="font-serif text-xl font-bold mb-3">How long does it take to write a book?</h3>
              <p className="text-author-darkgray">
                The timeline varies depending on the book's length, complexity, and your availability for feedback. Most standard books (50,000-70,000 words) take approximately 4-6 months from initial consultation to final manuscript. Shorter works may take 2-3 months, while more complex or research-heavy projects might require 6-12 months.
              </p>
            </div>
            
            {/* FAQ Item 3 */}
            <div className="py-6 animate-on-scroll">
              <h3 className="font-serif text-xl font-bold mb-3">What's the difference between editing services?</h3>
              <p className="text-author-darkgray">
                Developmental editing addresses big-picture elements like structure, plot, character development, and overall flow. Copy editing focuses on sentence-level improvements, grammar, consistency, and clarity. Proofreading is the final polish that catches remaining typos, punctuation errors, and formatting issues before publication.
              </p>
            </div>
            
            {/* FAQ Item 4 */}
            <div className="py-6 animate-on-scroll">
              <h3 className="font-serif text-xl font-bold mb-3">Do you help with both traditional and self-publishing?</h3>
              <p className="text-author-darkgray">
                Yes, we provide comprehensive support for both paths. For traditional publishing, we help prepare query letters, book proposals, and submission packages. For self-publishing, we guide you through platform selection, formatting, cover design, distribution, and marketing strategies to maximize your book's success.
              </p>
            </div>
            
            {/* FAQ Item 5 */}
            <div className="py-6 animate-on-scroll">
              <h3 className="font-serif text-xl font-bold mb-3">What genres do you specialize in?</h3>
              <p className="text-author-darkgray">
                Our team of writers covers a broad range of genres including fiction (literary, commercial, thriller, romance, science fiction, fantasy), non-fiction (memoir, biography, self-help, business, history), and specialized content like academic works and technical writing. We carefully match each project with a writer experienced in that specific genre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-20 bg-author-navy text-white">
        <div className="container-padding">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h2 className="title-lg text-white mb-6">Ready to Begin Your Literary Journey?</h2>
            <p className="body-lead text-white/90 mb-8">
              Contact us today to discuss your project and discover how our services can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-accent">
                Get in Touch
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

export default Services;

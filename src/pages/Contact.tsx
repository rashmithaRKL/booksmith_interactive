
import { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
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
          background: 'linear-gradient(rgba(31, 41, 55, 0.8), rgba(31, 41, 55, 0.9)), url("https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container-padding relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-author-gold/20 text-author-gold font-medium text-sm mb-4 animate-fade-in">
              GET IN TOUCH
            </span>
            <h1 className="title-xl text-white mb-6 animate-fade-in [animation-delay:200ms]">
              Contact <span className="text-author-gold italic">Us</span>
            </h1>
            <p className="body-lead text-white/90 mb-8 animate-fade-in [animation-delay:400ms]">
              Have questions about our services or ready to start your writing journey? 
              We're here to help you bring your literary vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-20 bg-white">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-on-scroll">
              <h2 className="title-md mb-8">How to Reach Us</h2>
              
              <div className="space-y-8">
                {/* Office Address */}
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-author-burgundy/10 text-author-burgundy mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold mb-1">Office Address</h3>
                    <p className="text-author-darkgray">
                      123 Storyteller Avenue, <br />
                      Literary District, NY 10001
                    </p>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-author-burgundy/10 text-author-burgundy mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold mb-1">Email Us</h3>
                    <p className="text-author-darkgray">
                      <a href="mailto:contact@scriptoria.com" className="hover:text-author-burgundy transition-colors">
                        contact@scriptoria.com
                      </a>
                      <br />
                      <a href="mailto:info@scriptoria.com" className="hover:text-author-burgundy transition-colors">
                        info@scriptoria.com
                      </a>
                    </p>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-author-burgundy/10 text-author-burgundy mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold mb-1">Call Us</h3>
                    <p className="text-author-darkgray">
                      <a href="tel:+12345678900" className="hover:text-author-burgundy transition-colors">
                        +1 (234) 567-8900
                      </a>
                      <br />
                      <a href="tel:+12345678901" className="hover:text-author-burgundy transition-colors">
                        +1 (234) 567-8901
                      </a>
                    </p>
                  </div>
                </div>
                
                {/* Working Hours */}
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-author-burgundy/10 text-author-burgundy mr-4">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold mb-1">Working Hours</h3>
                    <p className="text-author-darkgray">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="animate-on-scroll [animation-delay:300ms]">
              <h2 className="title-md mb-6">Send Us a Message</h2>
              <p className="text-author-darkgray mb-8">
                Fill out the form below and we'll get back to you as soon as possible. We look forward to hearing from you and discussing how we can help with your writing project.
              </p>
              
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-author-cream">
        <div className="container-padding">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block py-1 px-3 rounded-full bg-author-burgundy/10 text-author-burgundy font-medium text-sm mb-4">
              QUESTIONS
            </span>
            <h2 className="title-lg mb-4">Frequently Asked Questions</h2>
            <p className="body-lead text-author-darkgray max-w-2xl mx-auto">
              Find quick answers to common questions about contacting us.
            </p>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-gray-200">
            {/* FAQ Item 1 */}
            <div className="py-6 animate-on-scroll">
              <h3 className="font-serif text-xl font-bold mb-3">What information should I provide in my initial inquiry?</h3>
              <p className="text-author-darkgray">
                To help us respond most effectively, please include details about your project such as the type of writing service you're interested in, your approximate word count or project scope, your timeline, and any specific requirements or questions you have.
              </p>
            </div>
            
            {/* FAQ Item 2 */}
            <div className="py-6 animate-on-scroll">
              <h3 className="font-serif text-xl font-bold mb-3">How quickly will I receive a response?</h3>
              <p className="text-author-darkgray">
                We typically respond to all inquiries within 24-48 business hours. If your project is urgent, please mention this in your message or consider calling our office directly for immediate assistance.
              </p>
            </div>
            
            {/* FAQ Item 3 */}
            <div className="py-6 animate-on-scroll">
              <h3 className="font-serif text-xl font-bold mb-3">Can I schedule a consultation before committing to a package?</h3>
              <p className="text-author-darkgray">
                Absolutely! We offer complimentary 15-minute discovery calls to discuss your project and answer any questions. You can request this through our contact form or by calling our office directly.
              </p>
            </div>
            
            {/* FAQ Item 4 */}
            <div className="py-6 animate-on-scroll">
              <h3 className="font-serif text-xl font-bold mb-3">Do you work with international clients?</h3>
              <p className="text-author-darkgray">
                Yes, we work with clients worldwide. All consultations can be conducted via phone or video conference, and our collaborative process is designed to work seamlessly across different time zones and locations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;

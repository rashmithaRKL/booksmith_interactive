
import { useState, useRef, useEffect, FormEvent } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { toast } from 'sonner';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Success message
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    
    // Reset form
    setFormState({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    setIsSubmitting(false);
  };

  return (
    <div ref={sectionRef} className="animate-on-scroll">
      <form ref={formRef} onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 animate-on-scroll">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name input */}
          <div className="animate-on-scroll stagger-delay-1">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name <span className="text-author-burgundy">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-author-burgundy/50 focus:border-author-burgundy/50 transition-all duration-200"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email input */}
          <div className="animate-on-scroll stagger-delay-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address <span className="text-author-burgundy">*</span>
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-author-burgundy/50 focus:border-author-burgundy/50 transition-all duration-200 pl-10"
                placeholder="Enter your email"
              />
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>

          {/* Phone input */}
          <div className="animate-on-scroll stagger-delay-3">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <div className="relative">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-author-burgundy/50 focus:border-author-burgundy/50 transition-all duration-200 pl-10"
                placeholder="Enter your phone number"
              />
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>

          {/* Subject input */}
          <div className="animate-on-scroll stagger-delay-4">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Subject <span className="text-author-burgundy">*</span>
            </label>
            <select
              id="subject"
              name="subject"
              value={formState.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-author-burgundy/50 focus:border-author-burgundy/50 transition-all duration-200"
            >
              <option value="" disabled>Select a subject</option>
              <option value="Book Writing">Book Writing</option>
              <option value="Editing Services">Editing Services</option>
              <option value="Publishing Help">Publishing Help</option>
              <option value="Cover Design">Cover Design</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Message textarea */}
          <div className="md:col-span-2 animate-on-scroll stagger-delay-5">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Your Message <span className="text-author-burgundy">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-author-burgundy/50 focus:border-author-burgundy/50 transition-all duration-200 min-h-[150px]"
              placeholder="Tell us about your project"
            ></textarea>
          </div>
        </div>

        {/* Submit button */}
        <div className="mt-6 animate-on-scroll">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-author-burgundy text-white py-3 px-6 rounded-md font-medium flex items-center justify-center transition-all duration-300 ${
              isSubmitting 
                ? 'opacity-70 cursor-not-allowed' 
                : 'hover:bg-author-burgundy/90 transform hover:-translate-y-1 hover:shadow-lg'
            }`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                Send Message <Send size={18} className="ml-2" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

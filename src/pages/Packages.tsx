
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PackageCard from '../components/PackageCard';
import { ArrowRight } from 'lucide-react';

const basicFeatures = [
  { id: 1, text: "Up to 10,000 words of professional writing" },
  { id: 2, text: "2 rounds of revisions" },
  { id: 3, text: "Basic proofreading and editing" },
  { id: 4, text: "30-minute consultation call" },
  { id: 5, text: "Delivered in standard manuscript format" },
  { id: 6, text: "14-day delivery timeframe" }
];

const standardFeatures = [
  { id: 1, text: "Up to 50,000 words of professional writing" },
  { id: 2, text: "3 rounds of comprehensive revisions" },
  { id: 3, text: "Thorough editing and proofreading" },
  { id: 4, text: "Custom book outline and structure" },
  { id: 5, text: "Basic formatting for digital publishing" },
  { id: 6, text: "60-minute consultation call" },
  { id: 7, text: "Simple cover design" },
  { id: 8, text: "30-day delivery timeframe" }
];

const premiumFeatures = [
  { id: 1, text: "Up to 80,000 words of premium writing" },
  { id: 2, text: "Unlimited revisions until satisfaction" },
  { id: 3, text: "Developmental, copy editing, and proofreading" },
  { id: 4, text: "Advanced research and interviews" },
  { id: 5, text: "Custom book outline with chapter planning" },
  { id: 6, text: "Professional formatting for print and digital" },
  { id: 7, text: "Custom cover design with multiple concepts" },
  { id: 8, text: "Publishing consultation and guidance" },
  { id: 9, text: "90-minute strategy session" },
  { id: 10, text: "60-day delivery timeframe" }
];

const customFeatures = [
  { id: 1, text: "Tailored word count to your specific needs" },
  { id: 2, text: "Customized revision schedule" },
  { id: 3, text: "Personalized editing and publishing plan" },
  { id: 4, text: "Advanced market research and positioning" },
  { id: 5, text: "Dedicated project manager" },
  { id: 6, text: "Priority support and responses" },
  { id: 7, text: "Flexible timeline based on your requirements" }
];

const Packages = () => {
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
          background: 'linear-gradient(rgba(31, 41, 55, 0.8), rgba(31, 41, 55, 0.9)), url("https://images.unsplash.com/photo-1476081718509-d5d0b661a376?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container-padding relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-author-gold/20 text-author-gold font-medium text-sm mb-4 animate-fade-in">
              TAILORED SOLUTIONS
            </span>
            <h1 className="title-xl text-white mb-6 animate-fade-in [animation-delay:200ms]">
              Writing <span className="text-author-gold italic">Packages</span>
            </h1>
            <p className="body-lead text-white/90 mb-8 animate-fade-in [animation-delay:400ms]">
              Choose from our carefully crafted packages designed to meet your specific writing and publishing needs.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-author-cream">
        <div className="container-padding">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block py-1 px-3 rounded-full bg-author-burgundy/10 text-author-burgundy font-medium text-sm mb-4">
              OUR OFFERINGS
            </span>
            <h2 className="title-lg mb-4">Packages for Every Need</h2>
            <p className="body-lead text-author-darkgray max-w-2xl mx-auto">
              From short-form content to comprehensive book writing and publishing services, we have a package that's right for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Basic Package */}
            <PackageCard
              title="Basic Package"
              price="$1,500"
              description="Perfect for short stories, articles, and blog posts"
              features={basicFeatures}
              link="/contact"
              index={0}
            />
            
            {/* Standard Package */}
            <PackageCard
              title="Standard Package"
              price="$5,000"
              description="Ideal for first-time authors and medium-length books"
              features={standardFeatures}
              link="/contact"
              index={1}
              isPopular={true}
            />
            
            {/* Premium Package */}
            <PackageCard
              title="Premium Package"
              price="$9,500"
              description="Comprehensive solution for professional authors and businesses"
              features={premiumFeatures}
              link="/contact"
              index={2}
            />
            
            {/* Custom Package */}
            <PackageCard
              title="Custom Package"
              price="Contact Us"
              description="Tailored solution based on your specific requirements"
              features={customFeatures}
              link="/contact"
              index={3}
            />
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-white">
        <div className="container-padding">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block py-1 px-3 rounded-full bg-author-burgundy/10 text-author-burgundy font-medium text-sm mb-4">
              DETAILED COMPARISON
            </span>
            <h2 className="title-lg mb-4">Package Features</h2>
            <p className="body-lead text-author-darkgray max-w-2xl mx-auto">
              Compare our packages to find the perfect fit for your writing project.
            </p>
          </div>

          <div className="overflow-x-auto animate-on-scroll">
            <table className="w-full min-w-[800px] border-collapse">
              <thead>
                <tr className="bg-author-navy text-white">
                  <th className="p-4 text-left font-serif">Features</th>
                  <th className="p-4 text-center font-serif">Basic</th>
                  <th className="p-4 text-center font-serif">Standard</th>
                  <th className="p-4 text-center font-serif">Premium</th>
                  <th className="p-4 text-center font-serif">Custom</th>
                </tr>
              </thead>
              <tbody>
                {/* Word Count */}
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-medium">Word Count</td>
                  <td className="p-4 text-center">Up to 10,000</td>
                  <td className="p-4 text-center">Up to 50,000</td>
                  <td className="p-4 text-center">Up to 80,000</td>
                  <td className="p-4 text-center">Custom</td>
                </tr>
                
                {/* Revision Rounds */}
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-medium">Revision Rounds</td>
                  <td className="p-4 text-center">2</td>
                  <td className="p-4 text-center">3</td>
                  <td className="p-4 text-center">Unlimited</td>
                  <td className="p-4 text-center">Custom</td>
                </tr>
                
                {/* Research */}
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-medium">Research</td>
                  <td className="p-4 text-center">Basic</td>
                  <td className="p-4 text-center">Intermediate</td>
                  <td className="p-4 text-center">Advanced</td>
                  <td className="p-4 text-center">Custom</td>
                </tr>
                
                {/* Editing */}
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-medium">Editing</td>
                  <td className="p-4 text-center">Basic Proofreading</td>
                  <td className="p-4 text-center">Comprehensive</td>
                  <td className="p-4 text-center">Multi-stage Professional</td>
                  <td className="p-4 text-center">Customized Plan</td>
                </tr>
                
                {/* Cover Design */}
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-medium">Cover Design</td>
                  <td className="p-4 text-center">❌</td>
                  <td className="p-4 text-center">Basic</td>
                  <td className="p-4 text-center">Premium</td>
                  <td className="p-4 text-center">Optional</td>
                </tr>
                
                {/* Formatting */}
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-medium">Formatting</td>
                  <td className="p-4 text-center">Standard Manuscript</td>
                  <td className="p-4 text-center">Digital Publishing</td>
                  <td className="p-4 text-center">Print & Digital</td>
                  <td className="p-4 text-center">Custom</td>
                </tr>
                
                {/* Publishing Support */}
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-medium">Publishing Support</td>
                  <td className="p-4 text-center">❌</td>
                  <td className="p-4 text-center">Basic Guidance</td>
                  <td className="p-4 text-center">Comprehensive</td>
                  <td className="p-4 text-center">Optional</td>
                </tr>
                
                {/* Consultation */}
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-medium">Consultation</td>
                  <td className="p-4 text-center">30 Minutes</td>
                  <td className="p-4 text-center">60 Minutes</td>
                  <td className="p-4 text-center">90 Minutes</td>
                  <td className="p-4 text-center">Custom</td>
                </tr>
                
                {/* Delivery Time */}
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-medium">Delivery Time</td>
                  <td className="p-4 text-center">14 Days</td>
                  <td className="p-4 text-center">30 Days</td>
                  <td className="p-4 text-center">60 Days</td>
                  <td className="p-4 text-center">Custom</td>
                </tr>
                
                {/* Price */}
                <tr className="bg-gray-50">
                  <td className="p-4 font-medium">Price</td>
                  <td className="p-4 text-center font-bold">$1,500</td>
                  <td className="p-4 text-center font-bold">$5,000</td>
                  <td className="p-4 text-center font-bold">$9,500</td>
                  <td className="p-4 text-center font-bold">Contact Us</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-author-cream">
        <div className="container-padding">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block py-1 px-3 rounded-full bg-author-burgundy/10 text-author-burgundy font-medium text-sm mb-4">
              ADD-ONS
            </span>
            <h2 className="title-lg mb-4">Additional Services</h2>
            <p className="body-lead text-author-darkgray max-w-2xl mx-auto">
              Enhance your package with these specialized services tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Add-on 1 */}
            <div className="animate-on-scroll stagger-delay-1">
              <div className="bg-white rounded-lg shadow-md p-8 h-full border border-gray-100 hover:border-author-burgundy/20 transition-all duration-300 hover:shadow-lg">
                <h3 className="font-serif text-xl font-bold mb-3">Advanced Marketing Plan</h3>
                <p className="text-author-darkgray mb-4">
                  Comprehensive marketing strategy including social media plan, press outreach, launch strategy, and promotional materials.
                </p>
                <p className="font-bold text-author-burgundy">Starting at $1,200</p>
              </div>
            </div>
            
            {/* Add-on 2 */}
            <div className="animate-on-scroll stagger-delay-2">
              <div className="bg-white rounded-lg shadow-md p-8 h-full border border-gray-100 hover:border-author-burgundy/20 transition-all duration-300 hover:shadow-lg">
                <h3 className="font-serif text-xl font-bold mb-3">Audiobook Production</h3>
                <p className="text-author-darkgray mb-4">
                  Professional narration, recording, editing, and preparation for distribution on platforms like Audible and iTunes.
                </p>
                <p className="font-bold text-author-burgundy">Starting at $2,500</p>
              </div>
            </div>
            
            {/* Add-on 3 */}
            <div className="animate-on-scroll stagger-delay-3">
              <div className="bg-white rounded-lg shadow-md p-8 h-full border border-gray-100 hover:border-author-burgundy/20 transition-all duration-300 hover:shadow-lg">
                <h3 className="font-serif text-xl font-bold mb-3">Book Trailer</h3>
                <p className="text-author-darkgray mb-4">
                  Engaging video trailer to promote your book on social media, websites, and other digital platforms.
                </p>
                <p className="font-bold text-author-burgundy">Starting at $800</p>
              </div>
            </div>
            
            {/* Add-on 4 */}
            <div className="animate-on-scroll stagger-delay-4">
              <div className="bg-white rounded-lg shadow-md p-8 h-full border border-gray-100 hover:border-author-burgundy/20 transition-all duration-300 hover:shadow-lg">
                <h3 className="font-serif text-xl font-bold mb-3">Author Website</h3>
                <p className="text-author-darkgray mb-4">
                  Custom-designed website to showcase your book, author profile, and engage with readers.
                </p>
                <p className="font-bold text-author-burgundy">Starting at $1,500</p>
              </div>
            </div>
            
            {/* Add-on 5 */}
            <div className="animate-on-scroll stagger-delay-5">
              <div className="bg-white rounded-lg shadow-md p-8 h-full border border-gray-100 hover:border-author-burgundy/20 transition-all duration-300 hover:shadow-lg">
                <h3 className="font-serif text-xl font-bold mb-3">Speaking Kit</h3>
                <p className="text-author-darkgray mb-4">
                  Professionally designed materials to promote you as a speaker, including bio, topics, and presentation outline.
                </p>
                <p className="font-bold text-author-burgundy">Starting at $900</p>
              </div>
            </div>
            
            {/* Add-on 6 */}
            <div className="animate-on-scroll stagger-delay-6">
              <div className="bg-white rounded-lg shadow-md p-8 h-full border border-gray-100 hover:border-author-burgundy/20 transition-all duration-300 hover:shadow-lg">
                <h3 className="font-serif text-xl font-bold mb-3">Expedited Delivery</h3>
                <p className="text-author-darkgray mb-4">
                  Priority handling and faster delivery of your project while maintaining quality standards.
                </p>
                <p className="font-bold text-author-burgundy">+30% of package price</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section 
        className="py-24 relative overflow-hidden"
        style={{
          background: 'linear-gradient(rgba(123, 45, 45, 0.9), rgba(123, 45, 45, 0.9)), url("https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container-padding relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="title-lg text-white mb-6 animate-on-scroll">Ready to Get Started?</h2>
            <p className="body-lead text-white/90 mb-8 animate-on-scroll [animation-delay:200ms]">
              Contact us today to discuss your project and find the perfect package for your needs.
            </p>
            <div className="animate-on-scroll [animation-delay:400ms]">
              <Link 
                to="/contact" 
                className="btn-accent group inline-flex items-center"
              >
                Start Your Journey <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Packages;

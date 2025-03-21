
import { useEffect, useRef } from 'react';

const books = [
  {
    id: 1,
    title: "The Whispering Pines",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    genre: "Fiction",
    year: 2022
  },
  {
    id: 2,
    title: "Entrepreneurial Mindset",
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    genre: "Business",
    year: 2021
  },
  {
    id: 3,
    title: "Journey to the Stars",
    cover: "https://images.unsplash.com/photo-1518744386442-2d48ac47a7eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    genre: "Sci-Fi",
    year: 2023
  },
  {
    id: 4,
    title: "Culinary Heritage",
    cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    genre: "Cookbook",
    year: 2021
  }
];

const FeaturedBooks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bookRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Set up Intersection Observer for fade-in animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    // Observe the section itself
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Observe each book card
    bookRefs.current.forEach((book) => {
      if (book) observer.observe(book);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-20 bg-author-cream overflow-hidden animate-on-scroll"
    >
      <div className="container-padding">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-author-burgundy/10 text-author-burgundy font-medium text-sm mb-4">
            FEATURED WORKS
          </span>
          <h2 className="title-lg mb-4">Our Literary Portfolio</h2>
          <p className="body-lead text-author-darkgray max-w-2xl mx-auto">
            Discover the diverse range of books we've helped bring to life, from captivating 
            fiction to insightful non-fiction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book, index) => (
            <div
              key={book.id}
              ref={(el) => (bookRefs.current[index] = el)}
              className={`animate-on-scroll stagger-delay-${index + 1} group`}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl h-[400px] md:h-[450px]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"></div>
                <img
                  src={book.cover}
                  alt={book.title}
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                  <span className="text-xs font-medium text-author-gold uppercase tracking-wider">
                    {book.genre} • {book.year}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white mt-2">{book.title}</h3>
                  <div className="w-10 h-1 bg-author-gold mt-3 transform origin-left transition-all duration-500 group-hover:w-16"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;

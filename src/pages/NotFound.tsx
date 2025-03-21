
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <main className="pt-20 min-h-screen flex items-center justify-center bg-author-cream">
      <div className="container-padding">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="title-xl mb-4 animate-fade-in">404</h1>
          <p className="subtitle mb-8 animate-fade-in [animation-delay:200ms]">Page Not Found</p>
          <p className="body-lead text-author-darkgray mb-8 animate-fade-in [animation-delay:400ms]">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link 
            to="/" 
            className="btn-primary inline-flex items-center animate-fade-in [animation-delay:600ms]"
          >
            <ArrowLeft size={18} className="mr-2" />
            Return to Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;

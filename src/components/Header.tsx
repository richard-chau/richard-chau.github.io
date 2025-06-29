import { Link } from 'react-router-dom';
import { trackNavigation } from '../utils/analytics';

export default function Header() {
  const handleNavigationClick = (linkText: string) => {
    trackNavigation(linkText);
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-bold text-gray-900 hover:text-gray-700"
            onClick={() => handleNavigationClick('Blog Title')}
          >
            Richard's Blog
          </Link>
          <div className="space-x-6">
            <Link 
              to="/" 
              className="text-gray-600 hover:text-gray-900"
              onClick={() => handleNavigationClick('Home')}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-gray-600 hover:text-gray-900"
              onClick={() => handleNavigationClick('About')}
            >
              About
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
} 
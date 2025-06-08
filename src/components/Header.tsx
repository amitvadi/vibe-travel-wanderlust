
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-sunset rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">V</span>
          </div>
          <span className="text-xl font-display font-bold text-gray-900">VibeTravel</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/discover" className="text-gray-600 hover:text-gray-900 transition-colors">
            Discover
          </Link>
          <Link to="/how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
            How it works
          </Link>
          <Link to="/become-creator" className="text-gray-600 hover:text-gray-900 transition-colors">
            Become a creator
          </Link>
        </nav>

        {/* Auth buttons */}
        <div className="flex items-center space-x-3">
          <Link to="/login">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
              Sign in
            </Button>
          </Link>
          <Link to="/login">
            <Button className="bg-gradient-sunset text-white hover:opacity-90">
              Get started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

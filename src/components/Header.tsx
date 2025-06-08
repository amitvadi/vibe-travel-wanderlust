
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { User, Search, Menu, X, MapPin, Heart, User as UserIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-10 h-10 bg-gradient-sunset rounded-lg">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-display font-bold text-gray-900">VibeTravel</span>
            <span className="text-xs text-gray-500 -mt-1">.guide</span>
          </div>
        </Link>

        {/* Search Bar - Hidden on mobile */}
        <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search destinations, itineraries..."
              className="pl-10 pr-4 py-2 w-full bg-gray-50 border-gray-200 focus:bg-white"
            />
          </div>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/discover" className="text-gray-700 hover:text-sunset-600 font-medium transition-colors">
            Discover
          </Link>
          <Link to="/creators" className="text-gray-700 hover:text-sunset-600 font-medium transition-colors">
            Creators
          </Link>
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="p-2">
                <Heart className="w-5 h-5 text-gray-600" />
              </Button>
              <Link to="/dashboard">
                <Button variant="ghost" size="sm" className="p-2">
                  <UserIcon className="w-5 h-5 text-gray-600" />
                </Button>
              </Link>
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <Link to="/login">
                <Button variant="ghost" className="text-gray-700">
                  Log in
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-gradient-sunset hover:opacity-90 text-white border-0">
                  Get Started
                </Button>
              </Link>
            </div>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="container py-4 space-y-4">
            {/* Mobile Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search destinations..."
                className="pl-10 pr-4 py-2 w-full bg-gray-50"
              />
            </div>
            
            {/* Mobile Navigation */}
            <nav className="flex flex-col space-y-3">
              <Link to="/discover" className="text-gray-700 font-medium py-2">
                Discover
              </Link>
              <Link to="/creators" className="text-gray-700 font-medium py-2">
                Creators
              </Link>
              {!isLoggedIn && (
                <>
                  <Link to="/login" className="text-gray-700 font-medium py-2">
                    Log in
                  </Link>
                  <Link to="/signup">
                    <Button className="w-full bg-gradient-sunset text-white">
                      Get Started
                    </Button>
                  </Link>
                </>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

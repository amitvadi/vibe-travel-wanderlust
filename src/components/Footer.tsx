
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin, Mail, Star, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-display font-bold mb-4">
              Never miss an adventure
            </h3>
            <p className="text-gray-400 mb-6">
              Get the latest itineraries, travel tips, and exclusive creator content delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              />
              <Button className="bg-gradient-sunset hover:opacity-90 text-white border-0 px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-sunset rounded-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-display font-bold">VibeTravel</span>
                <span className="text-sm text-gray-400 -mt-1">.guide</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-4">
              Open-source, community-driven travel planning platform connecting travelers with authentic local experiences.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>Made with love for travelers</span>
            </div>
          </div>

          {/* Explore Column */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Explore</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/discover" className="text-gray-400 hover:text-white transition-colors">
                  Discover Itineraries
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-gray-400 hover:text-white transition-colors">
                  Popular Destinations
                </Link>
              </li>
              <li>
                <Link to="/creators" className="text-gray-400 hover:text-white transition-colors">
                  Meet Creators
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-400 hover:text-white transition-colors">
                  Travel Categories
                </Link>
              </li>
              <li>
                <Link to="/ai-planner" className="text-gray-400 hover:text-white transition-colors">
                  AI Travel Planner
                </Link>
              </li>
            </ul>
          </div>

          {/* Creators Column */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">For Creators</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/become-creator" className="text-gray-400 hover:text-white transition-colors">
                  Become a Creator
                </Link>
              </li>
              <li>
                <Link to="/creator-dashboard" className="text-gray-400 hover:text-white transition-colors">
                  Creator Dashboard
                </Link>
              </li>
              <li>
                <Link to="/creator-resources" className="text-gray-400 hover:text-white transition-colors">
                  Resources & Tips
                </Link>
              </li>
              <li>
                <Link to="/creator-support" className="text-gray-400 hover:text-white transition-colors">
                  Creator Support
                </Link>
              </li>
              <li>
                <Link to="/earnings" className="text-gray-400 hover:text-white transition-colors">
                  Earnings Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/help" className="text-gray-400 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-400 hover:text-white transition-colors">
                  Community Guidelines
                </Link>
              </li>
              <li>
                <Link to="/trust-safety" className="text-gray-400 hover:text-white transition-colors">
                  Trust & Safety
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="text-gray-400 hover:text-white transition-colors">
                  Give Feedback
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} VibeTravel.guide. Open-source travel platform.
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <div className="flex items-center gap-1 text-gray-500">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>Open Source</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

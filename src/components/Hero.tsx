
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-gray-900">
          Find your next{' '}
          <span className="bg-gradient-to-r from-sunset-500 to-ocean-500 bg-clip-text text-transparent">
            adventure
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-12 font-light">
          Authentic travel experiences created by locals and travelers
        </p>

        {/* Search bar */}
        <div className="relative mb-8">
          <div className="flex items-center bg-gray-50 rounded-full p-3 shadow-sm border border-gray-200 focus-within:border-sunset-400 focus-within:shadow-md transition-all">
            <Search className="w-5 h-5 text-gray-400 ml-3" />
            <input
              type="text"
              placeholder="Where do you want to go?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent px-4 py-2 text-lg focus:outline-none placeholder-gray-500"
            />
            <Button 
              className="bg-gradient-sunset text-white rounded-full px-6 hover:opacity-90"
            >
              Search
            </Button>
          </div>
        </div>

        {/* Quick action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link to="/discover">
            <Button 
              size="lg" 
              className="bg-gradient-sunset hover:opacity-90 text-white border-0 px-8 py-4 text-lg font-semibold group w-full sm:w-auto"
            >
              Browse Itineraries
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/become-creator">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold w-full sm:w-auto"
            >
              Share Your Experience
            </Button>
          </Link>
        </div>

        {/* Simple stats */}
        <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>10,000+ destinations</span>
          </div>
          <div>•</div>
          <div>50,000+ travelers</div>
          <div>•</div>
          <div>4.9★ average rating</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

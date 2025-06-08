
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, ArrowRight, Star, Users, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const destinations = [
  {
    name: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=1200&h=800&fit=crop",
    description: "Tropical paradise with ancient temples"
  },
  {
    name: "Santorini, Greece", 
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&h=800&fit=crop",
    description: "Iconic blue domes and sunset views"
  },
  {
    name: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&h=800&fit=crop",
    description: "Modern metropolis meets ancient tradition"
  },
  {
    name: "Patagonia, Chile",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=800&fit=crop",
    description: "Dramatic landscapes and pristine wilderness"
  }
];

const Hero = () => {
  const [currentDestination, setCurrentDestination] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDestination((prev) => (prev + 1) % destinations.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Images */}
      <div className="absolute inset-0">
        {destinations.map((destination, index) => (
          <div
            key={destination.name}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentDestination ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Animated tagline */}
        <div className="mb-6">
          <Badge className="mb-4 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Travel Planning
          </Badge>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            Discover authentic{' '}
            <span className="bg-gradient-to-r from-sunset-400 to-ocean-400 bg-clip-text text-transparent">
              travel experiences
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 text-gray-200">
            Vetted by locals and travelers, powered by community wisdom
          </p>
        </div>

        {/* Current destination info */}
        <div className="mb-8 animate-fade-in">
          <p className="text-lg text-gray-300 mb-2">Currently featuring</p>
          <h3 className="text-2xl font-display font-semibold">{destinations[currentDestination].name}</h3>
          <p className="text-gray-400">{destinations[currentDestination].description}</p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link to="/discover">
            <Button 
              size="lg" 
              className="bg-gradient-sunset hover:opacity-90 text-white border-0 px-8 py-4 text-lg font-semibold group"
            >
              Start Exploring
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/become-creator">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-md px-8 py-4 text-lg font-semibold"
            >
              Become a Creator
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold">10K+</div>
            <div className="text-sm text-gray-300">Itineraries</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">50K+</div>
            <div className="text-sm text-gray-300">Travelers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">4.9★</div>
            <div className="text-sm text-gray-300">Avg Rating</div>
          </div>
        </div>
      </div>

      {/* Destination indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {destinations.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentDestination(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentDestination ? 'bg-white scale-125' : 'bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

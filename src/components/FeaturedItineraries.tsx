
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, MapPin, Clock, Users, Heart, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredItineraries = [
  {
    id: 1,
    title: "Hidden Temples of Kyoto",
    location: "Kyoto, Japan",
    price: 89,
    duration: "5 days",
    rating: 4.9,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&h=400&fit=crop",
    creator: {
      name: "Yuki Tanaka",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      isLocal: true
    },
    tags: ["Cultural", "Photography", "Temples"],
    aiRecommended: true,
    category: "cultural"
  },
  {
    id: 2,
    title: "Patagonia Adventure Trek",
    location: "Torres del Paine, Chile",
    price: 299,
    duration: "10 days",
    rating: 4.8,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop",
    creator: {
      name: "Carlos Martinez",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      isLocal: true
    },
    tags: ["Adventure", "Hiking", "Nature"],
    aiRecommended: false,
    category: "adventure"
  },
  {
    id: 3,
    title: "Santorini Sunset Romance",
    location: "Santorini, Greece",
    price: 179,
    duration: "4 days",
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&h=400&fit=crop",
    creator: {
      name: "Elena Costas",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=100&h=100&fit=crop",
      isLocal: true
    },
    tags: ["Romance", "Sunset", "Wine"],
    aiRecommended: true,
    category: "romance"
  },
  {
    id: 4,
    title: "Bali Spiritual Journey",
    location: "Ubud, Bali",
    price: 149,
    duration: "7 days",
    rating: 4.7,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=600&h=400&fit=crop",
    creator: {
      name: "Made Wijaya",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      isLocal: true
    },
    tags: ["Spiritual", "Wellness", "Nature"],
    aiRecommended: false,
    category: "wellness"
  }
];

const categories = [
  { id: 'all', name: 'All', count: 150 },
  { id: 'cultural', name: 'Cultural', count: 45 },
  { id: 'adventure', name: 'Adventure', count: 38 },
  { id: 'romance', name: 'Romance', count: 28 },
  { id: 'wellness', name: 'Wellness', count: 39 }
];

const FeaturedItineraries = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [likedItems, setLikedItems] = useState<number[]>([]);

  const filteredItineraries = activeCategory === 'all' 
    ? featuredItineraries 
    : featuredItineraries.filter(item => item.category === activeCategory);

  const toggleLike = (id: number) => {
    setLikedItems(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Featured{' '}
            <span className="bg-gradient-to-r from-sunset-500 to-ocean-500 bg-clip-text text-transparent">
              Itineraries
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Handpicked adventures from our community of local experts and verified travelers
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full px-6 py-2 ${
                  activeCategory === category.id 
                    ? 'bg-gradient-sunset text-white border-0' 
                    : 'border-gray-300 text-gray-700 hover:border-sunset-400'
                }`}
              >
                {category.name}
                <Badge variant="secondary" className="ml-2 bg-gray-100 text-gray-600">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Itineraries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredItineraries.map((itinerary) => (
            <Card key={itinerary.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
              <div className="relative">
                <img
                  src={itinerary.image}
                  alt={itinerary.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlays */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {itinerary.aiRecommended && (
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                      <Sparkles className="w-3 h-3 mr-1" />
                      AI Recommended
                    </Badge>
                  )}
                  {itinerary.creator.isLocal && (
                    <Badge className="bg-forest-500 text-white border-0">
                      Local Expert
                    </Badge>
                  )}
                </div>

                <button
                  onClick={() => toggleLike(itinerary.id)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors"
                >
                  <Heart className={`w-4 h-4 ${likedItems.includes(itinerary.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                </button>

                <div className="absolute bottom-3 right-3">
                  <Badge className="bg-gradient-sunset text-white border-0">
                    ${itinerary.price}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">{itinerary.location}</span>
                </div>

                <h3 className="text-lg font-display font-semibold mb-3 group-hover:text-sunset-600 transition-colors">
                  {itinerary.title}
                </h3>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {itinerary.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      {itinerary.rating}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src={itinerary.creator.avatar} />
                      <AvatarFallback>{itinerary.creator.name[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-gray-600">{itinerary.creator.name}</span>
                  </div>
                  <span className="text-sm text-gray-500">
                    {itinerary.reviews} reviews
                  </span>
                </div>

                <div className="flex flex-wrap gap-1 mt-3">
                  {itinerary.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                      {tag}
                    </Badge>
                  ))}
                  {itinerary.tags.length > 2 && (
                    <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                      +{itinerary.tags.length - 2}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link to="/discover">
            <Button 
              size="lg" 
              className="bg-gradient-sunset hover:opacity-90 text-white border-0 px-8 py-4 text-lg font-semibold group"
            >
              View All Itineraries
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItineraries;

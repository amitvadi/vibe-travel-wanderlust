
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, MapPin, Users, Award, ArrowRight, Verified } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredCreators = [
  {
    id: 1,
    name: "Sofia Rodriguez",
    location: "Barcelona, Spain",
    specialties: ["Architecture", "Food", "Art"],
    rating: 4.9,
    totalItineraries: 23,
    totalEarnings: 15240,
    followers: 1240,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=150&h=150&fit=crop",
    cover: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&h=300&fit=crop",
    verified: true,
    badges: ["Local Expert", "Top Rated", "Architecture Guide"],
    bio: "Barcelona native passionate about showing travelers the authentic side of my city beyond the tourist traps.",
    recentItinerary: {
      title: "Barcelona's Hidden Modernist Gems",
      price: 45,
      image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=300&h=200&fit=crop"
    }
  },
  {
    id: 2,
    name: "Hiroshi Nakamura",
    location: "Tokyo, Japan",
    specialties: ["Culture", "Technology", "Food"],
    rating: 4.8,
    totalItineraries: 31,
    totalEarnings: 22100,
    followers: 2150,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    cover: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=300&fit=crop",
    verified: true,
    badges: ["Tech Insider", "Foodie Guide", "Cultural Expert"],
    bio: "Tech professional by day, cultural ambassador by passion. I love sharing Tokyo's perfect blend of tradition and innovation.",
    recentItinerary: {
      title: "Tokyo Tech District Deep Dive",
      price: 78,
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=300&h=200&fit=crop"
    }
  },
  {
    id: 3,
    name: "Luna Ramirez",
    location: "Cusco, Peru",
    specialties: ["Adventure", "History", "Nature"],
    rating: 4.9,
    totalItineraries: 18,
    totalEarnings: 9800,
    followers: 890,
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop",
    cover: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&h=300&fit=crop",
    verified: true,
    badges: ["Adventure Expert", "History Buff", "Mountain Guide"],
    bio: "Born and raised in the Sacred Valley. I specialize in authentic Andean experiences away from crowded tourist paths.",
    recentItinerary: {
      title: "Sacred Valley Off-the-Beaten-Path",
      price: 120,
      image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=300&h=200&fit=crop"
    }
  }
];

const CreatorSpotlight = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Meet our{' '}
            <span className="bg-gradient-to-r from-sunset-500 to-ocean-500 bg-clip-text text-transparent">
              Creator Community
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate locals and experienced travelers creating unforgettable journeys
          </p>
        </div>

        {/* Featured Creator Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {featuredCreators.map((creator) => (
            <Card key={creator.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0">
              {/* Cover Image */}
              <div className="relative h-32 overflow-hidden">
                <img
                  src={creator.cover}
                  alt={`${creator.name} cover`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Verified Badge */}
                {creator.verified && (
                  <Badge className="absolute top-3 right-3 bg-blue-500 text-white border-0">
                    <Verified className="w-3 h-3 mr-1" />
                    Verified
                  </Badge>
                )}
              </div>

              <CardContent className="p-6 relative">
                {/* Avatar */}
                <div className="absolute -top-8 left-6">
                  <Avatar className="w-16 h-16 border-4 border-white shadow-lg">
                    <AvatarImage src={creator.avatar} />
                    <AvatarFallback>{creator.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                </div>

                <div className="pt-10">
                  {/* Creator Info */}
                  <div className="mb-4">
                    <h3 className="text-xl font-display font-semibold mb-1 group-hover:text-sunset-600 transition-colors">
                      {creator.name}
                    </h3>
                    <div className="flex items-center gap-1 text-gray-600 mb-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{creator.location}</span>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {creator.bio}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-gray-900">{creator.totalItineraries}</div>
                      <div className="text-xs text-gray-500">Itineraries</div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-lg font-bold text-gray-900">{creator.rating}</span>
                      </div>
                      <div className="text-xs text-gray-500">Rating</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">{creator.followers}</div>
                      <div className="text-xs text-gray-500">Followers</div>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {creator.specialties.map((specialty) => (
                        <Badge key={specialty} variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Recent Itinerary */}
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    <div className="flex gap-3">
                      <img
                        src={creator.recentItinerary.image}
                        alt={creator.recentItinerary.title}
                        className="w-16 h-12 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-gray-900 line-clamp-1">
                          {creator.recentItinerary.title}
                        </h4>
                        <div className="text-sm text-sunset-600 font-semibold">
                          ${creator.recentItinerary.price}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Link to={`/creator/${creator.id}`} className="flex-1">
                      <Button variant="outline" className="w-full text-sm">
                        View Profile
                      </Button>
                    </Link>
                    <Button className="flex-1 bg-gradient-sunset text-white border-0 text-sm">
                      Follow
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Creator Stats & CTA */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-display font-bold mb-6">
                Join our creator community
              </h3>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-2xl font-bold text-sunset-600">$125K+</div>
                  <div className="text-gray-600">Total creator earnings</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-ocean-600">500+</div>
                  <div className="text-gray-600">Active creators</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-forest-600">4.8★</div>
                  <div className="text-gray-600">Avg creator rating</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-sand-600">95%</div>
                  <div className="text-gray-600">Creator satisfaction</div>
                </div>
              </div>
              <Link to="/become-creator">
                <Button 
                  size="lg" 
                  className="bg-gradient-sunset hover:opacity-90 text-white border-0 px-8 py-4 text-lg font-semibold group"
                >
                  Start Creating
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-sunset-100 to-ocean-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <Award className="w-16 h-16 text-sunset-600 mx-auto mb-4" />
                  <h4 className="text-xl font-display font-semibold mb-2">Earn with your passion</h4>
                  <p className="text-gray-600">
                    Turn your travel expertise into income
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorSpotlight;

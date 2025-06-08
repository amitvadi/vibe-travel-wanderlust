
import { Badge } from '@/components/ui/badge';
import { DollarSign, Sparkles, Users, Shield, Heart, Globe } from 'lucide-react';

const ValueProps = () => {
  const props = [
    {
      icon: DollarSign,
      title: "100% Creator Profits",
      description: "Creators keep every penny they earn. No hidden fees, no commission cuts.",
      badge: "Zero Fees",
      color: "text-forest-600"
    },
    {
      icon: Sparkles,
      title: "AI-Powered Recommendations",
      description: "Get personalized travel suggestions based on your preferences and past adventures.",
      badge: "Powered by Gemini",
      color: "text-sky-600"
    },
    {
      icon: Shield,
      title: "Community Verified",
      description: "Every itinerary is reviewed and verified by real travelers and local experts.",
      badge: "Trusted",
      color: "text-sunset-600"
    }
  ];

  const features = [
    {
      icon: Users,
      title: "Local Experts",
      description: "Connect with verified locals who know hidden gems"
    },
    {
      icon: Heart,
      title: "Authentic Experiences", 
      description: "Discover places beyond typical tourist attractions"
    },
    {
      icon: Globe,
      title: "Global Community",
      description: "Join travelers from 150+ countries sharing experiences"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Main Value Props */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Why choose{' '}
            <span className="bg-gradient-to-r from-sunset-500 to-ocean-500 bg-clip-text text-transparent">
              VibeTravel?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing travel planning with community-driven insights and cutting-edge AI
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {props.map((prop, index) => (
            <div
              key={prop.title}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 ${prop.color}`}>
                  <prop.icon className="w-8 h-8" />
                </div>
                <Badge variant="secondary" className="bg-gradient-sunset text-white">
                  {prop.badge}
                </Badge>
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4 group-hover:text-sunset-600 transition-colors">
                {prop.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-bold mb-4">
              Built for the modern traveler
            </h3>
            <p className="text-gray-600 text-lg">
              Every feature designed to make your journey unforgettable
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="text-center group"
              >
                <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-sunset-50 to-ocean-50 mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-sunset-600" />
                </div>
                <h4 className="text-xl font-display font-semibold mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProps;

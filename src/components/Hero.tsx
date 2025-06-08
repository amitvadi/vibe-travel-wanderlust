
import TravelOnboarding from '@/components/TravelOnboarding';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4 pt-16">
      <div className="text-center max-w-6xl mx-auto">
        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-gray-900">
          Find your next{' '}
          <span className="bg-gradient-to-r from-sunset-500 to-ocean-500 bg-clip-text text-transparent">
            adventure
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 mb-12 font-light max-w-2xl mx-auto">
          Authentic travel experiences created by locals and travelers
        </p>

        {/* Travel Onboarding Flow */}
        <TravelOnboarding />
      </div>
    </section>
  );
};

export default Hero;

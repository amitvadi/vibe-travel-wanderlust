
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ValueProps from '@/components/ValueProps';
import FeaturedItineraries from '@/components/FeaturedItineraries';
import CreatorSpotlight from '@/components/CreatorSpotlight';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ValueProps />
      <FeaturedItineraries />
      <CreatorSpotlight />
      <Footer />
    </div>
  );
};

export default Index;

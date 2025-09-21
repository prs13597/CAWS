import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import SuccessStoriesSection from '@/components/SuccessStoriesSection';
import CallToActionSection from '@/components/CallToActionSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <SuccessStoriesSection />
      <CallToActionSection />
      <Footer />
    </main>
  );
}

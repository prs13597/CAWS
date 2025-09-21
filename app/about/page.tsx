import Navigation from '@/components/Navigation';
import AboutHeroSection from '@/components/AboutHeroSection';
import JourneyNumbersSection from '@/components/JourneyNumbersSection';
import OurStorySection from '@/components/OurStorySection';
import CoreValuesSection from '@/components/CoreValuesSection';
import AboutCTASection from '@/components/AboutCTASection';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main>
      <Navigation />
      <AboutHeroSection />
      <JourneyNumbersSection />
      <OurStorySection />
      <CoreValuesSection />
      <AboutCTASection />
      <Footer />
    </main>
  );
}
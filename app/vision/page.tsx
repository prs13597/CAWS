import Navigation from '@/components/Navigation';
import VisionHeroSection from '@/components/VisionHeroSection';
import VisionFoundationSection from '@/components/VisionFoundationSection';
import AmbitiousGoalsSection from '@/components/AmbitiousGoalsSection';
import CurrentInitiativesSection from '@/components/CurrentInitiativesSection';
import InnovationSection from '@/components/InnovationSection';
import VisionCTASection from '@/components/VisionCTASection';
import Footer from '@/components/Footer';

export default function VisionPage() {
  return (
    <main>
      <Navigation />
      <VisionHeroSection />
      <VisionFoundationSection />
      <AmbitiousGoalsSection />
      <CurrentInitiativesSection />
      <InnovationSection />
      <VisionCTASection />
      <Footer />
    </main>
  );
}
import Navigation from '@/components/Navigation';
import FunEventsHeroSection from '@/components/FunEventsHeroSection';
import FunEventsGallery from '@/components/FunEventsGallery';
import Footer from '@/components/Footer';

export default function FunEventsPage() {
  return (
    <main>
      <Navigation />
      <FunEventsHeroSection />
      <FunEventsGallery />
      <Footer />
    </main>
  );
}
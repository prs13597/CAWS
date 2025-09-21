import Navigation from '@/components/Navigation';
import CoursesHeroSection from '@/components/CoursesHeroSection';
import CourseFeaturesSection from '@/components/CourseFeaturesSection';
import CourseCardsSection from '@/components/CourseCardsSection';
import CoursesCTASection from '@/components/CoursesCTASection';
import Footer from '@/components/Footer';

export default function CoursesPage() {
  return (
    <main>
      <Navigation />
      <CoursesHeroSection />
      <CourseFeaturesSection />
      <CourseCardsSection />
      <CoursesCTASection />
      <Footer />
    </main>
  );
}
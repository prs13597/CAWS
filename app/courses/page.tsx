import Navigation from '@/components/Navigation';
import CoursesHeroSection from '@/components/CoursesHeroSection';
import CourseFeaturesSection from '@/components/CourseFeaturesSection';
import NewCourseCardsSection from '@/components/NewCourseCardsSection';
import CoursesCTASection from '@/components/CoursesCTASection';
import Footer from '@/components/Footer';

export default function CoursesPage() {
  return (
    <main>
      <Navigation />
      <CoursesHeroSection />
      <CourseFeaturesSection />
      <NewCourseCardsSection />
      <CoursesCTASection />
      <Footer />
    </main>
  );
}
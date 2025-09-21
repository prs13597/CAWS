import Navigation from '@/components/Navigation';
import ContactHeroSection from '@/components/ContactHeroSection';
import ContactInfoSection from '@/components/ContactInfoSection';
import ContactFormSection from '@/components/ContactFormSection';
import ContactFAQSection from '@/components/ContactFAQSection';
import ContactLocationSection from '@/components/ContactLocationSection';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <main>
      <Navigation />
      <ContactHeroSection />
      <ContactInfoSection />
      <ContactFormSection />
      <ContactFAQSection />
      <ContactLocationSection />
      <Footer />
    </main>
  );
}
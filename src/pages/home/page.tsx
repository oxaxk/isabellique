import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TeamSection from './components/TeamSection';
import ServicesSection from './components/ServicesSection';
import SpecialsSection from './components/SpecialsSection';
import ProcessSection from './components/ProcessSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SpecialsSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}

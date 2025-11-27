import { useState, useEffect } from 'react';
import Button from '../../../components/base/Button';

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // Scrolling down & past 100px
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="bg-[#F7F1EC]/85 backdrop-blur-xl border-b border-[#E3D3C5] shadow-sm">
          <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="cursor-pointer">
              <span
                className="text-2xl md:text-3xl font-bold tracking-tight"
                style={{ fontFamily: 'Playfair Display, serif', color: '#2A1F1F' }}
              >
                Isabelliquee
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                className="text-base md:text-lg font-medium tracking-wide hover:opacity-70 transition"
                style={{ color: '#2A1F1F' }}
              >
                Behandlungen
              </a>
              <a
                href="#about"
                className="text-base md:text-lg font-medium tracking-wide hover:opacity-70 transition"
                style={{ color: '#2A1F1F' }}
              >
                Studio
              </a>
              <a
                href="#prices"
                className="text-base md:text-lg font-medium tracking-wide hover:opacity-70 transition"
                style={{ color: '#2A1F1F' }}
              >
                Preise & Pakete
              </a>
              <a
                href="#contact"
                className="text-base md:text-lg font-medium tracking-wide hover:opacity-70 transition"
                style={{ color: '#2A1F1F' }}
              >
                Anfrage
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden w-8 h-8 flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i
                className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl`}
                style={{ color: '#2A1F1F' }}
              ></i>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-[#E5D8CC] px-6 pb-4 pt-3 bg-[#F5EDE7]/95">
              <div className="flex flex-col space-y-4">
                <a
                  href="#services"
                  className="text-lg font-medium tracking-wide"
                  style={{ color: '#2E2A27' }}
                >
                  Behandlungen
                </a>
                <a
                  href="#about"
                  className="text-lg font-medium tracking-wide"
                  style={{ color: '#2E2A27' }}
                >
                  Studio
                </a>
                <a
                  href="#prices"
                  className="text-lg font-medium tracking-wide"
                  style={{ color: '#2E2A27' }}
                >
                  Preise & Pakete
                </a>
                <a
                  href="#contact"
                  className="text-lg font-medium tracking-wide"
                  style={{ color: '#2E2A27' }}
                >
                  Anfrage
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Mobile video (shown < md) */}
        <video
          className="block md:hidden absolute inset-0 w-full h-full object-cover"
          src="/videos/hero-mobile.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        {/* Desktop video (shown >= md) */}
        <video
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
          src="/videos/hero-mobile.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative z-10 flex-1 flex items-center px-6 max-w-5xl mx-auto pb-24 md:pb-16 pt-32">
        <div className="w-full text-center md:text-left">
          <div className="bg-black/35 md:bg-black/30 rounded-3xl px-6 py-10 md:px-10 md:py-12 shadow-[0_24px_60px_rgba(0,0,0,0.5)] border border-white/10">
            <p className="text-sm md:text-xs tracking-[0.35em] uppercase mb-4 text-[#F9EAE0]">
              Facials · Lashes · Liftings · Lips
            </p>
            <h1
              className="text-4xl md:text-6xl font-semibold mb-6 text-white md:leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Natürliche Skin- & Lash-Behandlungen
              <span className="block text-[1.05rem] md:text-2xl font-normal mt-2 text-white/85" style={{ fontFamily: 'Inter, sans-serif' }}>
                bei Isabelliquee in Hanau bei Frankfurt
              </span>
            </h1>
            
            <p
              className="text-lg md:text-xl mb-10 text-white/90 max-w-2xl mx-auto md:mx-0"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Minimal-invasive Treatments für Haut, Lashes, Brows & Lips – mit Fokus auf ein ruhiges Hautbild,
              sanfte Volumenlooks und Ergebnisse, die zu deinem Gesicht passen.
            </p>
            
            <div className="flex flex-row flex-wrap gap-6 justify-center md:justify-start items-center">
              <Button 
                href="https://buchung.treatwell.de/ort/beautybell/"
                size="lg"
                className="text-lg px-8 py-3.5"
              >
                <i className="ri-calendar-line mr-3 text-2xl"></i>
                Termin über Treatwell buchen
              </Button>
              
              <Button 
                href="#prices" 
                variant="outline"
                size="lg"
                className="text-lg px-8 py-3.5 bg-white/30 backdrop-blur-sm border-white/70 text-white hover:bg-white/40 hover:border-white"
              >
                <i className="ri-eye-line mr-3 text-2xl"></i>
                Leistungen & Preise ansehen
              </Button>

              <Button 
                href="#contact" 
                variant="outline"
                size="lg"
                className="text-lg px-8 py-3.5 md:w-[360px] border border-white/70 text-white bg-white/30 hover:bg-white/40 hover:border-white"
              >
                <i className="ri-edit-line mr-3 text-2xl"></i>
                Anfrage über Kontaktformular
              </Button>
            </div>
            
            <div className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-white/90 border-t border-white/15 pt-10 md:pt-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <i className="ri-award-line text-2xl"></i>
                </div>
                <h3 className="font-semibold text-2xl md:text-xl mb-2">Facials & Skin</h3>
                <p className="text-white/80 text-sm leading-relaxed">BB Glow, Microneedling & Glow-Facials für ein ebenmäßiges Hautbild.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <i className="ri-user-heart-line text-2xl"></i>
                </div>
                <h3 className="font-semibold text-2xl md:text-xl mb-2">Lashes & Liftings</h3>
                <p className="text-white/80 text-sm leading-relaxed">Individuelle Lash Designs, Wispy Styles & Lashlifting.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <i className="ri-map-pin-line text-2xl"></i>
                </div>
                <h3 className="font-semibold text-2xl md:text-xl mb-2">Einfache Buchung</h3>
                <p className="text-white/80 text-sm leading-relaxed">Termine unkompliziert über Treatwell oder das Kontaktformular.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

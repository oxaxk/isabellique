import { MouseEvent, useEffect, useState } from 'react';
import Button from '../../../components/base/Button';

const heroImages = [
  {
    src: '/images/hero/1.png',
    alt: 'Studio-Portrait von Isabelliquee – Look 1'
  },
  {
    src: '/images/hero/2.png',
    alt: 'Studio-Portrait von Isabelliquee – Look 2'
  },
  {
    src: '/images/hero/3.png',
    alt: 'Studio-Portrait von Isabelliquee – Look 3'
  },
  {
    src: '/images/hero/4.png',
    alt: 'Studio-Portrait von Isabelliquee – Look 4'
  }
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  };

  const handleContactClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (typeof document === 'undefined') return;

    const target = document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          {/* Text */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <p
              className="text-xs tracking-[0.22em] uppercase mb-4 text-[#8D6E5D]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Lashes · Lips · Facials · Brows
            </p>
            <h1
              className="text-3xl sm:text-4xl lg:text-[2.5rem] font-semibold leading-tight mb-5"
              style={{ fontFamily: 'Playfair Display, serif', color: '#2A1F1F' }}
            >
              Lashes &amp; Lips Studio
              <span className="block">Hanau - Frankfurt am Main.</span>
            </h1>
            <p
              className="text-base sm:text-lg leading-relaxed text-[#3A2A29]/85 max-w-xl mx-auto md:mx-0"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Spezialisierte Behandlungen für Lips, Lashes, Brows &amp; Facials – mit Fokus auf
              natürlichen Proportionen, Detailarbeit und hygienischer Arbeit im Studio.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 space-y-4 w-full">
              <div className="flex justify-center md:justify-start">
                <Button
                  href="https://beautinda.de/artist/IjyHWzqJ3NMhCGvsmzDyf1Nd1U32"
                  size="lg"
                  className="text-[0.75rem] sm:text-sm md:text-base px-8 sm:px-9 py-3.5 rounded-full bg-black/75 backdrop-blur-xl text-[#FDF7F2] border border-white/40 shadow-[0_16px_40px_rgba(0,0,0,0.45)] tracking-[0.22em] uppercase hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:bg-black/80"
                >
                  <i className="ri-calendar-line mr-3 text-xl sm:text-2xl" />
                  Beautinda Buchung
                </Button>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-3">
                <Button
                  href="#contact"
                  onClick={handleContactClick}
                  size="lg"
                  className="text-[0.75rem] sm:text-sm md:text-base px-6 sm:px-7 py-3 rounded-full bg-black/75 backdrop-blur-xl text-[#FDF7F2] border border-white/40 shadow-[0_16px_40px_rgba(0,0,0,0.45)] tracking-[0.22em] uppercase hover:bg-black/80 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
                >
                  <i className="ri-edit-line mr-2 text-lg" />
                  Kontakt
                </Button>

                <a
                  href="https://www.instagram.com/isabelliquee"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/70 backdrop-blur-xl border border-white/40 shadow-[0_12px_32px_rgba(0,0,0,0.5)] hover:bg-black/80 hover:shadow-[0_16px_40px_rgba(0,0,0,0.7)]"
                >
                  <i className="ri-instagram-line text-xl text-[#FDF7F2]" />
                </a>

                <a
                  href="https://www.tiktok.com/@isabelliquee"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="TikTok"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/70 backdrop-blur-xl border border-white/40 shadow-[0_12px_32px_rgba(0,0,0,0.5)] hover:bg-black/80 hover:shadow-[0_16px_40px_rgba(0,0,0,0.7)]"
                >
                  <i className="ri-tiktok-fill text-xl text-[#FDF7F2]" />
                </a>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#F3D9D0]/60 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-4 w-36 h-36 bg-[#EAD9C7]/70 rounded-full blur-3xl pointer-events-none" />
            <div className="relative mx-auto max-w-xs sm:max-w-sm aspect-[5/6] rounded-[32px] overflow-hidden shadow-[0_22px_60px_rgba(72,54,38,0.20)] border border-white/40 bg-[#FDF7F2]">
              {heroImages.map((image, index) => (
                <img
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="lazy"
                />
              ))}

              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="h-9 w-9 rounded-full bg-black/55 text-white flex items-center justify-center text-lg backdrop-blur-sm"
                >
                  ‹
                </button>

                <div className="flex items-center gap-2">
                  {heroImages.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2.5 w-2.5 rounded-full border border-white/70 ${
                        idx === currentIndex ? 'bg-white' : 'bg-white/20'
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  className="h-9 w-9 rounded-full bg-black/55 text-white flex items-center justify-center text-lg backdrop-blur-sm"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

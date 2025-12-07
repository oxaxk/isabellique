import React, { useState, useRef, useEffect } from 'react';
import Button from '../../../components/base/Button';

export default function SpecialsSection() {
  const prices = [
    {
      title: 'Lippenvergrößerung',
      badge: 'LIPS',
      badgeColor: 'bg-[#E8C4B8]',
      groups: [
        { label: '0,5 ml', price: '99€' },
        { label: '1,0 ml', price: '149€' },
        { label: '1,5 ml', price: '199€' },
        { label: '2,0 ml', price: '249€' },
        { label: '2,5 ml', price: '299€' },
      ]
    },

    {
      title: 'Wimpernverlängerung',
      badge: 'LASHES',
      badgeColor: 'bg-[#E8C4B8]',
      groups: [
        { label: 'Entfernen', price: '35€' },
        { label: 'Neuanlage 1:1 Technik', price: '65€' },
        { label: 'Neuanlage Light Volume', price: '75€' },
        { label: 'Neuanlage Mega Volume', price: 'ab 85€' },
      ],
      subTitle: 'Auffüllen',
      subGroups: [
        { label: 'Auffüllen 1:1 Technik', price: 'ab 20€' },
        { label: 'Light Volume Auffüllen', price: 'ab 35€' },
        { label: 'Mega Volume Auffüllen', price: 'ab 45€' },
      ]
    },

    {
      title: 'Lip Treatments',
      badge: 'TREATMENTS',
      badgeColor: 'bg-[#E8C4B8]',
      groups: [
        { label: 'BB-Glow Lips', price: '65€' },
        { label: 'Hydra-Lips', price: '55€' },
        { label: 'Hydralips & BB-Glow Lips', price: '105€' },
      ]
    },

    {
      title: 'Gesichtsbehandlungen',
      badge: 'FACIALS',
      badgeColor: 'bg-[#E8C4B8]',
      groups: [
        { label: 'Gesichtsbehandlung – BB Glow', price: '90€' },
        { label: 'Gesichtsbehandlung – Microneedling', price: 'ab 100€' },
        { label: 'Microneedling & Hydralips', price: '125€' },
      ]
    },

    {
      title: 'Wimpernlifting',
      badge: 'LIFTING',
      badgeColor: 'bg-[#E8C4B8]',
      groups: [
        { label: 'Wimpernlifting', price: 'ab 40€' },
        { label: 'Korean Lashlifting', price: 'ab 65€' },
      ]
    },

    {
      title: 'Augenbrauen',
      badge: 'BROWS',
      badgeColor: 'bg-[#E8C4B8]',
      groups: [
        { label: 'Augenbrauen färben', price: '15€' },
        { label: 'Augenbrauenwaxing', price: '20€' },
        { label: 'Augenbrauenlifting', price: '40€' },
        { label: 'Augenbrauenlifting mit Färben', price: '50€' },
        { label: 'Henna Brows mit Mapping', price: '55€' },
        { label: 'Henna Brows & Browlifting', price: '80€' },
      ]
    },

    {
      title: 'Permanent Make-up',
      badge: 'PMU',
      badgeColor: 'bg-[#E8C4B8]',
      groups: [
        { label: 'PMU – Lippenschattierung', price: '250€' },
        { label: 'PMU – Augenbrauen', price: '250€' },
      ]
    },

    {
      title: 'Beratung',
      badge: 'BERATUNG',
      badgeColor: 'bg-[#E8C4B8]',
      groups: [
        { label: 'Beratungsgespräch', price: '20€' },
      ]
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const lastScrollYRef = useRef<number | null>(null);
  const lastScrollAtRef = useRef<number>(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + prices.length) % prices.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % prices.length);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const diffX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diffX) > 50) {
      if (diffX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const absDeltaX = Math.abs(e.deltaX);
    const absDeltaY = Math.abs(e.deltaY);

    if (absDeltaX > absDeltaY && absDeltaX > 10) {
      e.preventDefault();
      if (e.deltaX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % prices.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [prices.length]);

  useEffect(() => {
    const handleScroll = () => {
      const sectionEl = sectionRef.current;
      if (!sectionEl) return;

      const rect = sectionEl.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

      // Nur reagieren, wenn Section im Viewport ist
      if (rect.bottom <= 0 || rect.top >= viewportHeight) return;

      const currentY = window.scrollY || window.pageYOffset;
      const now = Date.now();

      // Cooldown: max. ein Kartenwechsel alle 400ms
      const COOLDOWN = 400;
      if (now - lastScrollAtRef.current < COOLDOWN) {
        lastScrollYRef.current = currentY;
        return;
      }

      if (lastScrollYRef.current === null) {
        lastScrollYRef.current = currentY;
        return;
      }

      const diff = currentY - lastScrollYRef.current;

      // Distanz-Schwelle: erst ab ~120px Scrollbewegung eine Karte weiter
      const THRESHOLD = 120;

      if (Math.abs(diff) < THRESHOLD) {
        return;
      }

      if (diff > 0) {
        // nach unten gescrollt → nächste Karte
        setActiveIndex((prev) => (prev + 1) % prices.length);
      } else {
        // nach oben gescrollt → vorige Karte
        setActiveIndex((prev) => (prev - 1 + prices.length) % prices.length);
      }

      lastScrollYRef.current = currentY;
      lastScrollAtRef.current = now;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prices.length]);

  return (
    <section
      id="prices"
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className="py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif', color: '#2A1F1F' }}
          >
            Preisübersicht
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif', color: '#3A2A29' }}
          >
            Alle Preise für Lashes, Brows & Facials – transparent & übersichtlich.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onWheel={handleWheel}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {prices.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2 sm:px-4">
                  <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-none hover:shadow-none hover:-translate-y-1 transition-all duration-300 flex flex-col">
                    <div className="px-6 py-5 flex flex-col flex-1">

                      <h3
                        className="text-xs md:text-sm font-medium tracking-[0.22em] uppercase mb-3 leading-snug break-words"
                        style={{ fontFamily: 'Inter, sans-serif', color: '#FDF7F2' }}
                      >
                        {item.title}
                      </h3>

                      <div className="mb-4">
                        {item.groups.map((g, i) => (
                          <div
                            key={i}
                            className={`py-1.5 ${i > 0 ? 'border-t border-white/10' : ''}`}
                          >
                            {g.price ? (
                              <div
                                className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-4 text-base md:text-lg"
                                style={{ fontFamily: 'Inter, sans-serif', color: '#E9DFD8' }}
                              >
                                <span>{g.label}</span>
                                <span className="whitespace-nowrap text-right">{g.price}</span>
                              </div>
                            ) : (
                              <p
                                className="text-sm leading-snug md:text-base md:leading-snug pr-4"
                                style={{ fontFamily: 'Inter, sans-serif', color: '#D7CDC5' }}
                              >
                                {g.label}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>

                      {item.subGroups && (
                        <div className="pt-4 mt-2 border-t border-white/15">
                          <p
                            className="uppercase text-sm font-bold opacity-70 mb-2"
                            style={{ fontFamily: 'Inter, sans-serif', color: '#FDF7F2' }}
                          >
                            {item.subTitle}
                          </p>

                          {item.subGroups.map((s, i) => (
                            <div
                              key={i}
                              className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-4 text-base md:text-lg mb-1"
                              style={{ fontFamily: 'Inter, sans-serif', color: '#E9DFD8' }}
                            >
                              <span>{s.label}</span>
                              <span className="whitespace-nowrap text-right">{s.price}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={handlePrev}
              className="h-9 w-9 rounded-full border border-gray-300 flex items-center justify-center text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
            >
              ‹
            </button>

            <div className="flex items-center gap-2">
              {prices.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    idx === activeIndex ? 'bg-[#2A1F1F]' : 'bg-gray-300'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="h-9 w-9 rounded-full border border-gray-300 flex items-center justify-center text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
            >
              ›
            </button>
          </div>

          <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-4">
            <Button
              href="https://beautinda.de/artist/IjyHWzqJ3NMhCGvsmzDyf1Nd1U32"
              size="lg"
              className="text-[0.75rem] sm:text-sm md:text-base px-8 py-3.5 rounded-full bg-black/60 backdrop-blur-xl text-[#FDF7F2] border border-white/40 shadow-[0_16px_40px_rgba(0,0,0,0.45)] tracking-[0.22em] uppercase hover:bg-black/70 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
            >
              <i className="ri-calendar-line mr-3 text-2xl"></i>
              Termin über Beautinda buchen
            </Button>
            <Button
              href="#contact"
              size="lg"
              className="text-[0.75rem] sm:text-sm md:text-base px-8 py-3.5 rounded-full bg-black/60 backdrop-blur-xl text-[#FDF7F2] border border-white/40 shadow-[0_16px_40px_rgba(0,0,0,0.45)] tracking-[0.22em] uppercase hover:bg-black/70 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
            >
              <i className="ri-edit-line mr-3 text-2xl"></i>
              Anfrage über Kontaktformular
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

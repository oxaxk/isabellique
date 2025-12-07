import React, { useEffect, useRef, useState } from 'react';

type Testimonial = {
  name: string;
  rating: number;
  text: string;
  image: string | null;
};

const testimonials: Testimonial[] = [
  {
    name: 'Laura G.',
    rating: 5,
    text: 'Ich komme seit einigen Monaten regelmäßig für Facials. Die Haut ist nach den Behandlungen nicht gereizt und wirkt in den Tagen danach etwas glatter. Mir gefällt vor allem, dass alles in Ruhe erklärt wird.',
    image: null
  },
  {
    name: 'Sofia M.',
    rating: 5,
    text: 'Microneedling & Hydralips wurden mir vorher genau erklärt, inklusive Pflege danach. Direkt nach der Behandlung war ich etwas gerötet, nach ein paar Tagen haben sich kleine Unebenheiten sichtbar beruhigt.',
    image: null
  },
  {
    name: 'Nadine R.',
    rating: 5,
    text: 'Das Lashlifting hält bei mir ungefähr sechs Wochen. Morgens brauche ich dadurch deutlich weniger Zeit im Bad und muss kaum noch Mascara benutzen.',
    image: null
  },
  {
    name: 'Elif K.',
    rating: 5,
    text: 'Bei den Lash Extensions wurde sehr sauber gearbeitet. Die ersten Nächte musste ich mich etwas an die Wimpern gewöhnen, inzwischen fühlen sie sich aber völlig normal an und sehen nicht übertrieben aus.',
    image: null
  },
  {
    name: 'Jessica T.',
    rating: 5,
    text: 'Nach dem Lip Treatment war die Schwellung an Tag zwei noch gut sichtbar, danach hat es sich schnell gelegt. Die Lippen wirken jetzt etwas voller, ohne dass es direkt „gemacht“ aussieht.',
    image: null
  },
  {
    name: 'Mariam S.',
    rating: 5,
    text: 'Ich kombiniere oft Facial und Browlifting in einem Termin. Die Abläufe sind strukturiert, das Studio ist sauber und die Behandlungen passen gut zu meinem eher natürlichen Look.',
    image: null
  }
];

function TestimonialCard({
  testimonial,
  className = ''
}: {
  testimonial: Testimonial;
  className?: string;
}) {
  return (
    <article
      className={`flex flex-col h-full rounded-3xl bg-black/65 backdrop-blur-lg border border-white/15 shadow-[0_18px_45px_rgba(0,0,0,0.45)] px-6 py-6 md:px-7 md:py-7 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.6)] transition-all duration-300 ${className}`}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-11 h-11 rounded-full overflow-hidden bg-white/10 border border-white/25 flex items-center justify-center text-sm font-semibold text-[#FDF7F2]">
          {testimonial.image ? (
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span>{testimonial.name.charAt(0)}</span>
          )}
        </div>

        <div className="flex-1">
          <h4
            className="text-lg md:text-xl font-semibold leading-snug"
            style={{ fontFamily: 'Playfair Display, serif', color: '#FDF7F2' }}
          >
            {testimonial.name}
          </h4>
        </div>
      </div>

      <p
        className="text-sm md:text-[0.95rem] leading-relaxed italic"
        style={{ fontFamily: 'Inter, sans-serif', color: '#E9DFD8' }}
      >
        “{testimonial.text}”
      </p>
    </article>
  );
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const lastScrollYRef = useRef<number | null>(null);
  const lastScrollAtRef = useRef<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (typeof window === 'undefined') return;
      if (window.innerWidth >= 768) return;
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === 'undefined') return;
      if (window.innerWidth >= 768) return;

      const sectionEl = sectionRef.current;
      if (!sectionEl) return;

      const rect = sectionEl.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

      if (rect.bottom <= 0 || rect.top >= viewportHeight) return;

      const currentY = window.scrollY || window.pageYOffset;
      const now = Date.now();

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
      const THRESHOLD = 120;

      if (Math.abs(diff) < THRESHOLD) {
        return;
      }

      if (diff > 0) {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      } else {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      }

      lastScrollYRef.current = currentY;
      lastScrollAtRef.current = now;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-xs tracking-[0.22em] uppercase mb-4 text-[#8D6E5D]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Stimmen
          </p>
          <h2
            className="text-4xl md:text-5xl font-semibold mb-4 leading-tight"
            style={{ fontFamily: 'Playfair Display, serif', color: '#2A1F1F' }}
          >
            Erfahrungen
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-[#3A2A29]/85"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Facials, Lashes, Liftings, Lips &amp; Brows – echte Rückmeldungen von Kundinnen zu
            natürlichen, sauberen und hochwertigen Ergebnissen.
          </p>
        </div>

        {/* Mobile: Scroll-/Auto-Carousel */}
        <div className="mt-10 md:hidden">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-1">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, idx) => (
              <span
                key={idx}
                className={`h-2.5 w-2.5 rounded-full transition-colors border ${
                  idx === activeIndex ? 'bg-white border-white/80' : 'bg-white/40 border-white/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: statisches Grid */}
        <div className="mt-10 hidden md:grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

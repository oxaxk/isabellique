import { useState, useRef, useEffect } from 'react';

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef<number>(0);
  const currentXRef = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);

  const services = [
    {
      icon: 'ri-sparkling-line',
      title: 'Facials & BB Glow',
      description:
        'BB Glow, Glow-Facials & Hautbild-Optimierung für einen ebenmäßigen, strahlenden Teint – abgestimmt auf deine Haut.',
      image: '/images/services/facials-bb-glow.jpg'
    },
    {
      icon: 'ri-magic-line',
      title: 'Microneedling',
      description:
        'Gezielte Behandlung für feine Linien, Narben & Hautstruktur. Für sichtbar glattere, prallere Haut mit gesundem Glow.',
      image: '/images/services/microneedling.jpg'
    },
    {
      icon: 'ri-eye-line',
      title: 'Lash Extensions',
      description:
        'Individuelle Lash Designs von natürlich bis auffällig – mit Fokus auf deine Augenform, deinen Alltag und deinen Wunsch-Look.',
      image: '/images/services/lash-extensions.jpg'
    },
    {
      icon: 'ri-eye-2-line',
      title: 'Lashlifting',
      description:
        'Lashlifting & Korean Lashlifting für einen offenen Blick – ganz ohne Extensions, mit natürlichem Schwung und Pflegeeffekt.',
      image: '/images/services/lashlifting.jpg'
    },
    {
      icon: 'ri-brush-line',
      title: 'Brows',
      description:
        'Browlifting, Henna Brows & Brow-Styling für typgerechte Augenbrauen, die dein Gesicht weich und harmonisch wirken lassen.',
      image: '/images/services/brows.jpg'
    },
    {
      icon: 'ri-heart-3-line',
      title: 'Lips & Filler',
      description:
        'Lip Filler & Lip Treatments wie BB Glow Lips und Hydralips für volle, natürlich definierte Lippen ohne Overdraw-Effekt.',
      image: '/images/services/lips-filler.jpg'
    },
    {
      icon: 'ri-star-line',
      title: 'PMU & Kombibehandlungen',
      description:
        'Permanent Make-up für Brows & Lips sowie Kombis aus Facials, Microneedling, Lashes & Lips – für ein rundes Gesamtergebnis.',
      image: '/images/services/pmu-combo.jpg'
    }
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;
    setCurrentIndex(index);
    const el = mobileScrollRef.current;
    if (el) {
      el.scrollTo({ left: index * el.clientWidth, behavior: 'smooth' });
    }
  };

  // Touch/Mouse handlers for swipe functionality
  const handleStart = (clientX: number) => {
    if (isTransitioning) return;
    isDraggingRef.current = true;
    startXRef.current = clientX;
    currentXRef.current = clientX;
  };

  const handleMove = (clientX: number) => {
    if (!isDraggingRef.current || isTransitioning) return;
    currentXRef.current = clientX;
  };

  const handleEnd = () => {
    if (!isDraggingRef.current || isTransitioning) return;
    
    const deltaX = currentXRef.current - startXRef.current;
    const threshold = 50;

    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }

    isDraggingRef.current = false;
  };

  // Wheel handler for trackpad support
  const handleWheel = (e: React.WheelEvent) => {
    if (isTransitioning) return;
    
    // Check if it's a horizontal scroll (trackpad gesture)
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault();
      
      if (e.deltaX > 30) {
        nextSlide();
      } else if (e.deltaX < -30) {
        prevSlide();
      }
    }
  };

  // Mobile scroll handler for snap carousel
  const handleMobileScroll = () => {
    const el = mobileScrollRef.current;
    if (!el) return;
    const newIndex = Math.round(el.scrollLeft / el.clientWidth);
    if (newIndex !== currentIndex) setCurrentIndex(newIndex);
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  const handleMouseLeave = () => {
    handleEnd();
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDraggingRef.current) {
        handleEnd();
      }
    };

    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDraggingRef.current) {
        handleMove(e.clientX);
      }
    };

    document.addEventListener('mouseup', handleGlobalMouseUp);
    document.addEventListener('mousemove', handleGlobalMouseMove);

    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, []);


  return (
    <section id="services" className="py-14 lg:py-20" style={{ backgroundColor: '#F7EFE9' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 lg:mb-16">
          <h2
            className="text-4xl lg:text-5xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif', color: '#2A1F1F' }}
          >
            Behandlungen bei isabelliquee
          </h2>
          <p
            className="text-lg lg:text-xl opacity-80 max-w-3xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif', color: '#3A2A29' }}
          >
            Facials, Lashes, Liftings, Brows, Lips & PMU – kombinierbare Behandlungen für natürliche, individuelle Ergebnisse in Hanau bei Frankfurt.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">

          {/* Card Container with proper spacing - jetzt für alle Viewports */}
          <div className="w-full px-4 lg:px-20">
            <div
              ref={mobileScrollRef}
              className="w-full flex overflow-x-auto scroll-smooth snap-x snap-mandatory space-x-6 px-4"
              onScroll={handleMobileScroll}
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {services.map((svc) => (
                <div key={svc.title} className="shrink-0 w-[85%] md:w-[45%] lg:w-[38%] snap-center">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-[480px] md:h-[460px] lg:h-[480px] flex flex-col">
                    <div className="relative h-[55%] overflow-hidden">
                      <img
                        src={svc.image}
                        alt={svc.title}
                        className="w-full h-full object-cover object-center"
                        draggable={false}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="px-6 pt-6 pb-6 md:pb-4 flex flex-col justify-start h-[38%]">
                      <div className="mb-0 flex items-start mt-0">
                        <h3
                          className="text-2xl md:text-3xl font-bold mb-0"
                          style={{ fontFamily: 'Playfair Display, serif', color: '#2A1F1F' }}
                        >
                          {svc.title}
                        </h3>
                      </div>
                      <p
                        className="opacity-80 leading-relaxed text-base"
                        style={{ fontFamily: 'Inter, sans-serif', color: '#3A2A29' }}
                      >
                        {svc.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* Dots Navigation mit Pfeilen */}
          <div className="flex items-center justify-center mt-8 lg:mt-12 space-x-4">
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-[#C9B8B0] bg-white/80 hover:bg-white transition-all duration-200 cursor-pointer disabled:opacity-40"
            >
              <i className="ri-arrow-left-s-line text-lg" style={{ color: '#2A1F1F' }}></i>
            </button>

            <div className="flex space-x-3">
              <button
                onClick={() => goToSlide(0)}
                disabled={isTransitioning}
                className={`h-3 w-8 rounded-full transition-all duration-300 cursor-pointer disabled:opacity-50 ${
                  currentIndex === 0 ? 'opacity-100' : 'opacity-40'
                }`}
                style={{ backgroundColor: '#2A1F1F' }}
              />
              <button
                onClick={() => goToSlide(services.length - 1)}
                disabled={isTransitioning}
                className={`h-3 w-8 rounded-full transition-all duration-300 cursor-pointer disabled:opacity-50 ${
                  currentIndex === services.length - 1 ? 'opacity-100' : 'opacity-40'
                }`}
                style={{ backgroundColor: '#2A1F1F' }}
              />
            </div>

            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-[#C9B8B0] bg-white/80 hover:bg-white transition-all duration-200 cursor-pointer disabled:opacity-40"
            >
              <i className="ri-arrow-right-s-line text-lg" style={{ color: '#2A1F1F' }}></i>
            </button>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-16">
          <a
            href="#contact"
            className="text-lg lg:text-xl font-semibold px-8 lg:px-12 py-3.5 lg:py-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 whitespace-nowrap"
            style={{ backgroundColor: '#F3D9D0', color: '#281C1C', fontFamily: 'Inter, sans-serif' }}
          >
            Anfrage über Kontaktformular
          </a>
        </div>
      </div>
    </section>
  );
}

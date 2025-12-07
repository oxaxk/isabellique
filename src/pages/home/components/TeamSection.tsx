import React, { useEffect, useState } from 'react';

const socialImages = [
  {
    src: '/images/instagram/isabellique-1.jpg',
    alt: 'isabelliquee Instagram Impression 1'
  },
  {
    src: '/images/instagram/isabellique-2.jpg',
    alt: 'isabelliquee Instagram Impression 2'
  },
  {
    src: '/images/instagram/isabellique-3.jpg',
    alt: 'isabelliquee Instagram Impression 3'
  }
];

const TeamSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % socialImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="team" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-xs tracking-[0.22em] uppercase mb-4 text-[#8D6E5D]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Social
          </p>
          <h2
            className="text-4xl md:text-5xl font-semibold mb-4 leading-tight"
            style={{ fontFamily: 'Playfair Display, serif', color: '#2A1F1F' }}
          >
            Folge uns & verpasse nichts
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed text-[#3A2A29]/85 mb-2"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Einblicke ins Studio, Vorher/Nachher-Ergebnisse und Haut- &amp; Lash-Transformationen –
            noch mehr aktuelle Angebote findest du auf
            <span className="font-semibold"> @isabelliquee</span>.
          </p>
        </div>

        <div className="mt-10">
          <div className="max-w-[360px] mx-auto sm:max-w-none px-4 sm:px-0">
            {/* Mobile: Single fading card, Desktop: Collage */}
            <div className="-mx-2 sm:mx-0">
              {/* Mobile Carousel */}
              <div className="sm:hidden flex justify-center">
                <div className="relative w-full max-w-xs mx-auto aspect-[4/5] rounded-3xl overflow-hidden shadow-md shadow-black/5">
                  {socialImages.map((image, index) => (
                    <img
                      key={image.src}
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                        index === activeIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Desktop Collage */}
              <div className="hidden sm:grid sm:grid-cols-3 sm:gap-5">
                {socialImages.map((image, index) => (
                  <div key={image.src} className="min-w-[220px] sm:min-w-0">
                    <div className="rounded-3xl overflow-hidden shadow-md shadow-black/5">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-64 object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex justify-center gap-4 flex-wrap">
              <a
                href="https://instagram.com/isabelliquee"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-[0.75rem] sm:text-sm md:text-base font-semibold tracking-[0.22em] uppercase bg-black/75 backdrop-blur-xl border border-white/40 text-[#FDF7F2] shadow-[0_16px_40px_rgba(0,0,0,0.45)] hover:bg-black/80 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-200"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.8"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm8.5 3.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zM12 7.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5z"
                  />
                </svg>
                Instagram ansehen
              </a>

              <a
                href="https://www.tiktok.com/@isabelliquee?_r=1&_t=ZN-91tA4eKIMzq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-[0.75rem] sm:text-sm md:text-base font-semibold tracking-[0.22em] uppercase bg-black/75 backdrop-blur-xl border border-white/40 text-[#FDF7F2] shadow-[0_16px_40px_rgba(0,0,0,0.45)] hover:bg-black/80 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-200"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <i className="ri-tiktok-line w-6 h-6 -mt-[1px]" />
                TikTok ansehen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

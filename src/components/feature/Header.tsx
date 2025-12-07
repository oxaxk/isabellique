import { useEffect, useRef, useState } from 'react';
import Button from '../base/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === 'undefined') return;

      const currentY = window.scrollY || window.pageYOffset;
      const lastY = lastScrollYRef.current;

      const THRESHOLD = 16;

      if (Math.abs(currentY - lastY) < THRESHOLD) {
        return;
      }

      if (currentY > lastY && currentY > 80) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScrollYRef.current = currentY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.45)] transform transition-transform duration-300 ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT — LOGO */}
        <a href="/" className="cursor-pointer">
          <span
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{ fontFamily: 'Playfair Display, serif', color: '#FDF7F2' }}
          >
            Isabelliquee
          </span>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="/#hero"
            className="text-[0.7rem] lg:text-xs font-medium tracking-[0.22em] uppercase hover:opacity-80 transition"
            style={{ fontFamily: 'Inter, sans-serif', color: '#F5EAE2' }}
          >
            Start
          </a>
          <a
            href="/#services"
            className="text-[0.7rem] lg:text-xs font-medium tracking-[0.22em] uppercase hover:opacity-80 transition"
            style={{ fontFamily: 'Inter, sans-serif', color: '#F5EAE2' }}
          >
            Leistungen
          </a>
          <a
            href="/#about"
            className="text-[0.7rem] lg:text-xs font-medium tracking-[0.22em] uppercase hover:opacity-80 transition"
            style={{ fontFamily: 'Inter, sans-serif', color: '#F5EAE2' }}
          >
            Über uns
          </a>
          <a
            href="/#prices"
            className="text-[0.7rem] lg:text-xs font-medium tracking-[0.22em] uppercase hover:opacity-80 transition"
            style={{ fontFamily: 'Inter, sans-serif', color: '#F5EAE2' }}
          >
            Preise
          </a>
          <a
            href="/#contact"
            className="text-[0.7rem] lg:text-xs font-medium tracking-[0.22em] uppercase hover:opacity-80 transition"
            style={{ fontFamily: 'Inter, sans-serif', color: '#F5EAE2' }}
          >
            Kontakt
          </a>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Menü"
        >
          <span className="relative flex h-5 w-7 items-center justify-center">
            <span
              className={`absolute h-[2px] w-7 rounded-full bg-[#FDF7F2] transition-transform duration-300 ${
                isMenuOpen ? 'translate-y-0 rotate-45' : '-translate-y-1.5 rotate-0'
              }`}
            />
            <span
              className={`absolute h-[2px] w-7 rounded-full bg-[#FDF7F2] transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute h-[2px] w-7 rounded-full bg-[#FDF7F2] transition-transform duration-300 ${
                isMenuOpen ? 'translate-y-0 -rotate-45' : 'translate-y-1.5 rotate-0'
              }`}
            />
          </span>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden border-t border-white/10 px-6 overflow-hidden transform transition-all duration-300 ease-out ${
          isMenuOpen
            ? 'bg-black/40 backdrop-blur-xl py-6 opacity-100 max-h-96'
            : 'bg-transparent backdrop-blur-0 py-0 opacity-0 max-h-0'
        }`}
      >
        <div className="flex items-center justify-between gap-6">
          <div className="flex flex-col space-y-5">
            <a
              href="/#hero"
              className="text-xs font-medium tracking-[0.22em] uppercase"
              style={{ fontFamily: 'Inter, sans-serif', color: '#F5EAE2' }}
            >
              Start
            </a>
            <a
              href="/#services"
              className="text-xs font-medium tracking-[0.22em] uppercase"
              style={{ fontFamily: 'Inter, sans-serif', color: '#F5EAE2' }}
            >
              Leistungen
            </a>
            <a
              href="/#about"
              className="text-xs font-medium tracking-[0.22em] uppercase"
              style={{ fontFamily: 'Inter, sans-serif', color: '#F5EAE2' }}
            >
              Über uns
            </a>
            <a
              href="/#prices"
              className="text-xs font-medium tracking-[0.22em] uppercase"
              style={{ fontFamily: 'Inter, sans-serif', color: '#F5EAE2' }}
            >
              Preise
            </a>
            <a
              href="/#contact"
              className="text-xs font-medium tracking-[0.22em] uppercase"
              style={{ fontFamily: 'Inter, sans-serif', color: '#F5EAE2' }}
            >
              Kontakt
            </a>
          </div>

          <div className="flex flex-col items-end gap-3">
            <a
              href="https://www.instagram.com/isabelliquee"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/40 hover:bg-white/20 hover:border-white/80 transition-colors"
            >
              <i className="ri-instagram-line text-lg text-[#FDF7F2]" />
            </a>
            <a
              href="https://www.tiktok.com/@isabelliquee"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/40 hover:bg-white/20 hover:border-white/80 transition-colors"
            >
              <i className="ri-tiktok-fill text-lg text-[#FDF7F2]" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

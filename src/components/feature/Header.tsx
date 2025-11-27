import { useState } from 'react';
import Button from '../base/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#E4DAD4] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT — LOGO */}
        <a href="/" className="cursor-pointer">
          <span
            className="text-2xl md:text-3xl font-bold tracking-tight"
            style={{ fontFamily: 'Playfair Display, serif', color: '#2A1F1F' }}
          >
            isabelliquee
          </span>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center space-x-10">
          <a href="/#hero" className="text-lg font-medium tracking-wide hover:opacity-70 transition" style={{ color: '#2A1F1F' }}>Start</a>
          <a href="/#services" className="text-lg font-medium tracking-wide hover:opacity-70 transition" style={{ color: '#2A1F1F' }}>Leistungen</a>
          <a href="/#about" className="text-lg font-medium tracking-wide hover:opacity-70 transition" style={{ color: '#2A1F1F' }}>Über uns</a>
          <a href="/#prices" className="text-lg font-medium tracking-wide hover:opacity-70 transition" style={{ color: '#2A1F1F' }}>Preise</a>
          <a href="/#contact" className="text-lg font-medium tracking-wide hover:opacity-70 transition" style={{ color: '#2A1F1F' }}>Kontakt</a>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-3xl`} style={{ color: '#2A1F1F' }}></i>
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-[#E4DAD4] px-6 py-6 flex flex-col space-y-5">
          <a href="/#hero" className="text-lg font-medium tracking-wide" style={{ color: '#2A1F1F' }}>Start</a>
          <a href="/#services" className="text-lg font-medium tracking-wide" style={{ color: '#2A1F1F' }}>Leistungen</a>
          <a href="/#about" className="text-lg font-medium tracking-wide" style={{ color: '#2A1F1F' }}>Über uns</a>
          <a href="/#prices" className="text-lg font-medium tracking-wide" style={{ color: '#2A1F1F' }}>Preise</a>
          <a href="/#contact" className="text-lg font-medium tracking-wide" style={{ color: '#2A1F1F' }}>Kontakt</a>
        </div>
      )}
    </header>
  );
}

export default function Footer() {
  return (
    <footer className="py-14 text-[#2A1F1F]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Logo & Description */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start">
            <h3 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#2A1F1F' }}>
              Isabelliquee
            </h3>
            <p className="text-[#5C4A45] mb-6 max-w-md text-sm md:text-base">
              Facials, Lashes, Liftings & Lips in Hanau bei Frankfurt.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a 
                href="https://instagram.com/isabelliquee" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-black/75 backdrop-blur-xl border border-white/40 shadow-[0_12px_32px_rgba(0,0,0,0.5)] hover:bg-black/80 hover:shadow-[0_16px_40px_rgba(0,0,0,0.7)] transition-colors"
              >
                <i className="ri-instagram-line text-[#FDF7F2] text-lg"></i>
              </a>
              <a 
                href="https://www.tiktok.com/@isabelliquee?_r=1&_t=ZN-91tA4eKIMzq" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-black/75 backdrop-blur-xl border border-white/40 shadow-[0_12px_32px_rgba(0,0,0,0.5)] hover:bg-black/80 hover:shadow-[0_16px_40px_rgba(0,0,0,0.7)] transition-colors"
              >
                <i className="ri-tiktok-line text-[#FDF7F2] text-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold text-xl md:text-2xl mb-4" style={{ color: '#2A1F1F' }}>Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/#services" className="text-[#6A5750] hover:text-[#2A1F1F] transition-colors">Leistungen</a></li>
              <li><a href="/#about" className="text-[#6A5750] hover:text-[#2A1F1F] transition-colors">Über uns</a></li>
              <li><a href="/#prices" className="text-[#6A5750] hover:text-[#2A1F1F] transition-colors">Preise</a></li>
              <li><a href="/#contact" className="text-[#6A5750] hover:text-[#2A1F1F] transition-colors">Kontakt</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#E2D3C7] mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#7A655C] text-xs md:text-sm text-center md:text-left">
            © 2025 Isabelliquee. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 justify-center md:justify-end">
            <a href="/impressum" className="text-[#7A655C] hover:text-[#2A1F1F] text-xs md:text-sm transition-colors">
              Impressum
            </a>
            <a href="/datenschutz" className="text-[#7A655C] hover:text-[#2A1F1F] text-xs md:text-sm transition-colors">
              Datenschutz
            </a>
            <a href="https://slicker.agency/" className="text-[#7A655C] hover:text-[#2A1F1F] text-xs md:text-sm transition-colors">
              by Slicker
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

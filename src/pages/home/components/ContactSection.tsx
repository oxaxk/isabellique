export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-[#FDF8F5]">
      <div className="max-w-5xl mx-auto px-6">
        <h2
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
          style={{ fontFamily: 'Playfair Display, serif', color: '#2A1F1F' }}
        >
          Termin anfragen
        </h2>
        
        <p
          className="text-lg md:text-xl mb-10 text-center text-gray-700"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Buche deinen Termin direkt über Treatwell oder sende uns eine Anfrage über das Formular – für Facials, Lashes, Liftings & Lips in Hanau bei Frankfurt.
        </p>

        <div className="mt-4 grid gap-10 md:grid-cols-[1.05fr,1.15fr] items-start">
          {/* Linke Infospalte */}
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full bg-[#F3D9D0]/70 px-4 py-2 text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif', color: '#281C1C' }}>
              <i className="ri-calendar-line mr-2 text-base"></i>
              Terminvergabe über Treatwell
            </div>

            <div className="space-y-3">
              <h3
                className="text-2xl md:text-3xl font-semibold"
                style={{ fontFamily: 'Playfair Display, serif', color: '#2A1F1F' }}
              >
                So buchst du deinen Termin
              </h3>
              <p className="text-base leading-relaxed text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                Für feste Termine nutzt du am besten den Treatwell-Kalender. Über das Formular kannst du uns zusätzlich Wünsche,
                Fragen oder Kombi-Behandlungen mitteilen – wir melden uns mit passenden Vorschlägen.
              </p>
            </div>

            <ul className="space-y-2 text-sm md:text-base" style={{ fontFamily: 'Inter, sans-serif', color: '#5C4A45' }}>
              <li className="flex items-start gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#C9B8B0]" />
                <span>Facials, Lashes, Liftings, Brows, Lips & PMU kombinierbar.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#C9B8B0]" />
                <span>Angaben im Formular helfen, deine Behandlung besser zu planen.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#C9B8B0]" />
                <span>Antwort erfolgt so schnell wie möglich mit Terminvorschlägen.</span>
              </li>
            </ul>

            <div className="pt-2">
              <a 
                href="https://buchung.treatwell.de/ort/beautybell/"
                className="inline-flex items-center px-6 py-3 font-semibold text-base md:text-lg rounded-lg transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap cursor-pointer"
                style={{ backgroundColor: '#F3D9D0', color: '#281C1C', fontFamily: 'Inter, sans-serif' }}
              >
                <i className="ri-calendar-line mr-3 text-xl"></i>
                Termin direkt über Treatwell buchen
              </a>
            </div>
          </div>

          {/* Rechte Formular-Karte */}
          <div className="bg-white rounded-3xl shadow-[0_18px_60px_rgba(0,0,0,0.06)] border border-[#F0E2D9] px-6 py-7 md:px-7 md:py-8">
            <form className="grid gap-6 md:grid-cols-2 text-left">
              <div className="md:col-span-2">
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Alternativ kannst du uns über dieses Formular schreiben. Wir melden uns so schnell wie möglich mit Terminvorschlägen bei dir.
                </p>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Name*
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F3D9D0] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                  E-Mail (optional)
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F3D9D0] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Gewünschte Leistung*
                </label>
                <select
                  required
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#F3D9D0] focus:border-transparent"
                  style={{ backgroundPosition: 'right 1rem center' }}
                >
                  <option value="">Bitte auswählen</option>
                  <option value="lashes">Lash Extensions (Neuanlage / Auffüllen)</option>
                  <option value="lashlifting">Wimpernlifting / Korean Lashlifting</option>
                  <option value="brows">Augenbrauen (Browlift, Henna Brows etc.)</option>
                  <option value="lips-filler">Lippenvergrößerung (Filler)</option>
                  <option value="lip-treatments">Lip Treatments (Hydralips / BB-Glow Lips)</option>
                  <option value="facials">Facials (BB Glow / Microneedling)</option>
                  <option value="pmu">Permanent Make-up (Brows / Lips)</option>
                  <option value="beratung">Beratungsgespräch</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Wunschtermin (optional)
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F3D9D0] focus:border-transparent"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Nachricht
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F3D9D0] focus:border-transparent"
                  placeholder="z. B. Wunsch-Behandlung, Hautbild, bisherige Erfahrungen, besondere Hinweise"
                />
              </div>

              <div className="md:col-span-2 flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-3 rounded-lg font-semibold text-base md:text-lg shadow-sm hover:shadow-md transition-all duration-300"
                  style={{ backgroundColor: '#F3D9D0', color: '#281C1C', fontFamily: 'Inter, sans-serif' }}
                >
                  Anfrage senden
                </button>
              </div>
            </form>
          </div>
        </div>
        
      </div>
    </section>
  );
}

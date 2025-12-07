import { useState } from 'react';

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get('name')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      service: formData.get('service')?.toString() || '',
      date: formData.get('date')?.toString() || '',
      message: formData.get('message')?.toString() || '',
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error('Request failed');
      }

      setSubmitStatus('success');
      form.reset();
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
          style={{ fontFamily: 'Playfair Display, serif', color: '#2A1F1F' }}
        >
          Termin anfragen
        </h2>
        
        <p
          className="text-lg md:text-xl mb-6 text-center text-gray-700"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Buche deinen Termin direkt über Beautinda oder sende uns eine Anfrage über das Formular – für Facials, Lashes, Liftings & Lips in Hanau bei Frankfurt.
        </p>

        <div className="mt-2 grid gap-10 md:grid-cols-[1.05fr,1.15fr] items-start">
          {/* Linke Infospalte */}
          <div className="space-y-6 text-center">
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="https://instagram.com/isabelliquee"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-[0.75rem] sm:text-sm md:text-base font-semibold tracking-[0.22em] uppercase bg-black/60 backdrop-blur-xl border border-white/40 text-[#FDF7F2] shadow-[0_16px_40px_rgba(0,0,0,0.45)] hover:bg-black/70 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-200"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <i className="ri-instagram-line text-lg"></i>
                Instagram DM schreiben
              </a>
              <a
                href="https://www.tiktok.com/@isabelliquee?_r=1&_t=ZN-91tA4eKIMzq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-[0.75rem] sm:text-sm md:text-base font-semibold tracking-[0.22em] uppercase bg-black/60 backdrop-blur-xl border border-white/40 text-[#FDF7F2] shadow-[0_16px_40px_rgba(0,0,0,0.45)] hover:bg-black/70 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-200"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <i className="ri-tiktok-line text-lg"></i>
                TikTok DM schreiben
              </a>
            </div>

            <div className="space-y-3">
              <h3
                className="text-2xl md:text-3xl font-semibold text-center"
                style={{ fontFamily: 'Playfair Display, serif', color: '#2A1F1F' }}
              >
                So buchst du deinen Termin
              </h3>
              <p className="text-base leading-relaxed text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                Für feste Termine nutzt du am besten den Beautinda-Kalender. Über das Formular kannst du uns zusätzlich Wünsche,
                Fragen oder Kombi-Behandlungen mitteilen – wir melden uns mit passenden Vorschlägen.
              </p>
            </div>

            <ul className="space-y-2 text-sm md:text-base text-center" style={{ fontFamily: 'Inter, sans-serif', color: '#5C4A45' }}>
              <li className="flex items-start gap-2 justify-center">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#C9B8B0]" />
                <span>Facials, Lashes, Liftings, Brows, Lips & PMU kombinierbar.</span>
              </li>
              <li className="flex items-start gap-2 justify-center">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#C9B8B0]" />
                <span>Angaben im Formular helfen, deine Behandlung besser zu planen.</span>
              </li>
              <li className="flex items-start gap-2 justify-center">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#C9B8B0]" />
                <span>Antwort erfolgt so schnell wie möglich mit Terminvorschlägen.</span>
              </li>
            </ul>

            <div className="pt-2 flex justify-center">
              <a 
                href="https://beautinda.de/artist/IjyHWzqJ3NMhCGvsmzDyf1Nd1U32"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-[0.75rem] sm:text-sm md:text-base font-semibold tracking-[0.22em] uppercase bg-black/60 backdrop-blur-xl border border-white/40 text-[#FDF7F2] shadow-[0_16px_40px_rgba(0,0,0,0.45)] hover:bg-black/70 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-200 whitespace-nowrap cursor-pointer"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <i className="ri-calendar-line text-lg"></i>
                Beautinda Buchung
              </a>
            </div>
          </div>

          {/* Rechte Formular-Karte */}
          <div className="bg-black/60 backdrop-blur-xl rounded-3xl shadow-[0_18px_60px_rgba(0,0,0,0.55)] border border-white/15 px-6 py-7 md:px-7 md:py-8">
            <form className="grid gap-6 md:grid-cols-2 text-left" onSubmit={handleSubmit}>
              <div className="md:col-span-2">
                <p className="text-sm" style={{ fontFamily: 'Inter, sans-serif', color: '#E9DFD8' }}>
                  Alternativ kannst du uns über dieses Formular schreiben. Wir melden uns so schnell wie möglich mit Terminvorschlägen bei dir.
                </p>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif', color: '#FDF7F2' }}>
                  Name*
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F3D9D0] focus:border-transparent"
                  name="name"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif', color: '#FDF7F2' }}>
                  E-Mail (optional)
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F3D9D0] focus:border-transparent"
                  name="email"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif', color: '#FDF7F2' }}>
                  Gewünschte Leistung*
                </label>
                <select
                  required
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#F3D9D0] focus:border-transparent"
                  style={{ backgroundPosition: 'right 1rem center' }}
                  name="service"
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
                <label className="block mb-2 text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif', color: '#FDF7F2' }}>
                  Wunschtermin (optional)
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F3D9D0] focus:border-transparent"
                  name="date"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block mb-2 text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif', color: '#FDF7F2' }}>
                  Nachricht
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F3D9D0] focus:border-transparent"
                  placeholder="z. B. Wunsch-Behandlung, Hautbild, bisherige Erfahrungen, besondere Hinweise"
                  name="message"
                />
              </div>

              <div className="md:col-span-2 flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full font-semibold text-[0.75rem] sm:text-sm md:text-base shadow-[0_16px_40px_rgba(0,0,0,0.45)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-300 border border-white/40 bg-black/60 hover:bg-black/70 backdrop-blur-xl tracking-[0.22em] uppercase text-[#FDF7F2]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {isSubmitting ? 'Wird gesendet…' : 'Anfrage senden'}
                </button>
              </div>
              {submitStatus === 'success' && (
                <div className="md:col-span-2 text-right text-sm text-emerald-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Deine Anfrage wurde erfolgreich gesendet.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="md:col-span-2 text-right text-sm text-red-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Beim Senden ist ein Fehler aufgetreten. Bitte versuche es später erneut.
                </div>
              )}
            </form>
          </div>
        </div>
        
      </div>
    </section>
  );
}

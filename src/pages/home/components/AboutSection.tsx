export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#FDF8F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Bild & Trust-Card links (Desktop), oben (Mobile) */}
          <div className="order-1 lg:order-2 flex flex-col justify-center items-center lg:items-start lg:pl-10 mt-10 lg:mt-0">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-white mb-4 lg:mb-6 w-full">
              <img 
                src="/images/about/lashes.jpg"
                alt="Behandlung bei isabelliquee Studio in Hanau"
                className="w-full h-[420px] md:h-[540px] object-cover object-top"
              />
            </div>

            <div className="mt-6 w-full flex justify-center">
              <div className="bg-white rounded-2xl p-5 shadow-md border max-w-md w-full" style={{ borderColor: '#E2D3C7' }}>
                <div className="flex items-center">
                  <div
                    className="w-12 h-12 bg-white border-2 rounded-full flex items-center justify-center mr-4"
                    style={{ borderColor: '#C9B8B0' }}
                  >
                    <i className="ri-star-fill text-xl" style={{ color: '#2A1F1F' }}></i>
                  </div>
                  <div>
                    <div className="font-bold text-lg" style={{ color: '#2A1F1F' }}>
                      Viele Stammkundinnen
                    </div>
                    <div className="text-sm opacity-80" style={{ color: '#2A1F1F' }}>
                      Positive Treatwell-Bewertungen & persönliches Feedback
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text & Icons rechts (Desktop), unten (Mobile) */}
          <div className="order-2 lg:order-1">
            <h2
              className="text-4xl md:text-5xl font-bold mb-8"
              style={{ fontFamily: 'Playfair Display, serif', color: '#2A1F1F' }}
            >
              isabelliquee – Facials · Lashes · Liftings · Lips
            </h2>
            
            <div className="space-y-6" style={{ fontFamily: 'Inter, sans-serif', color: '#3A2A29' }}>
              <p className="text-lg leading-relaxed">
                Willkommen bei isabelliquee – dem Studio für Facials, Lashes, Liftings & Lips in Hanau bei Frankfurt. Im Fokus stehen natürliche, dezente Ergebnisse und Behandlungen, die zu deinem Alltag und deinem Hautbild passen.
              </p>
              
              <p className="text-lg leading-relaxed">
                Lashes, Brows, Lips & Skin werden bei isabelliquee individuell kombiniert – von BB-Glow und Microneedling über Lash Extensions & Lashlifting bis hin zu Browlifting und Lip Treatments.
              </p>
              
              <p className="text-lg leading-relaxed">
                Jede Session beginnt mit einer ruhigen, ehrlichen Beratung. Deine Wünsche, dein Hautbild und deine Routine stehen im Mittelpunkt – erst danach werden Behandlung und Produktkombination ausgewählt.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="text-left">
                <div className="w-14 h-14 mb-3 bg-white border-2 rounded-full flex items-center justify-center" style={{ borderColor: '#C9B8B0' }}>
                  <i className="ri-sparkling-line text-2xl" style={{ color: '#2A1F1F' }}></i>
                </div>
                <h3 className="font-semibold text-2xl md:text-3xl mb-2" style={{ color: '#2A1F1F' }}>Natürlich & typgerecht</h3>
                <p className="text-sm opacity-80" style={{ color: '#5C4A45' }}>Fokus auf weiche, dezente Ergebnisse statt überzeichneten „Overlooks“.</p>
              </div>
              
              <div className="text-left">
                <div className="w-14 h-14 mb-3 bg-white border-2 rounded-full flex items-center justify-center" style={{ borderColor: '#C9B8B0' }}>
                  <i className="ri-magic-line text-2xl" style={{ color: '#2A1F1F' }}></i>
                </div>
                <h3 className="font-semibold text-2xl md:text-3xl mb-2" style={{ color: '#2A1F1F' }}>All-in-One Artist</h3>
                <p className="text-sm opacity-80" style={{ color: '#5C4A45' }}>Facials, Lashes, Brows & Lips aus einer Hand – für ein stimmiges Gesamtbild.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

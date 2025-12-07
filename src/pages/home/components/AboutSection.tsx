import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2
          className="text-4xl md:text-5xl font-bold mb-8"
          style={{ fontFamily: 'Playfair Display, serif', color: '#2A1F1F' }}
        >
          Facials · Lashes · Liftings · Lips
        </h2>

        <div
          className="space-y-6 text-center"
          style={{ fontFamily: 'Inter, sans-serif', color: '#3A2A29' }}
        >
          <p className="text-lg leading-relaxed">
            Willkommen bei isabelliquee – dem Studio für Facials, Lashes, Liftings &amp; Lips in Hanau bei Frankfurt.
            Im Fokus stehen natürliche, dezente Ergebnisse und Behandlungen, die zu deinem Alltag und deinem Hautbild passen.
          </p>

          <p className="text-lg leading-relaxed">
            Lashes, Brows, Lips &amp; Skin werden bei isabelliquee individuell kombiniert – von BB-Glow und Microneedling
            über Lash Extensions &amp; Lashlifting bis hin zu Browlifting und Lip Treatments.
          </p>

          <p className="text-lg leading-relaxed">
            Jede Session beginnt mit einer ruhigen, ehrlichen Beratung. Deine Wünsche, dein Hautbild und deine Routine
            stehen im Mittelpunkt – erst danach werden Behandlung und Produktkombination ausgewählt.
          </p>
        </div>
      </div>
    </section>
  );
}

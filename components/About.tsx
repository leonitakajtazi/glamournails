
import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-neutral-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 border border-[#D4AF37]/20 rounded-full animate-spin-slow"></div>
            <div className="relative z-10 border-[10px] border-black p-2 bg-neutral-800">
             <img 
  src="./images/ab.png" 
  alt="Studio Atmosphäre"
  className="w-full max-h-[520px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
/>

            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 gold-bg flex items-center justify-center text-black font-serif text-3xl italic">
              Glamour
            </div>
          </div>
          
          <div>
            <span className="text-[#D4AF37] text-sm uppercase tracking-widest mb-4 block">Willkommen bei Glamour Nails</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
              Ihre Schönheit ist unsere <br />
              <span className="gold-gradient italic underline decoration-1 underline-offset-8">Leidenschaft</span>
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-6">
              Mitten im Herzen von Bad Kreuznach bieten wir Ihnen eine Oase der Ruhe und des Luxus. Seit unserer Gründung steht „Glamour Nails Beauty“ für höchste Qualität, Hygiene und individuelle Beratung.
            </p>
            <p className="text-neutral-400 text-lg leading-relaxed mb-10">
              Ob natürliche Eleganz oder auffällige Nail-Art – wir nehmen uns Zeit für Ihre Wünsche und setzen sie mit präziser Handwerkskunst und den besten Produkten der Branche um.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-3xl font-serif gold-gradient mb-2">10+</h4>
                <p className="text-xs uppercase tracking-widest text-neutral-500">Jahre Erfahrung</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif gold-gradient mb-2">5000+</h4>
                <p className="text-xs uppercase tracking-widest text-neutral-500">Zufriedene Kunden</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

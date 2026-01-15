
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-40 scale-105 animate-[pulse_8s_infinite]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block mb-6 py-1 px-4 border border-[#D4AF37] rounded-full">
          <span className="text-xs uppercase tracking-[0.4em] text-[#D4AF37]">Premium Beauty Studio</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-serif font-bold mb-6 leading-tight">
          Entdecke <br />
          <span className="gold-gradient italic">wahre Eleganz</span>
        </h1>
        
        <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          In Bad Kreuznachs exklusivstem Studio verwandeln wir Ihre Hände und Füße in Kunstwerke. Modernste Technik trifft auf zeitlosen Luxus.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="#contact" 
            className="px-10 py-4 gold-bg text-black font-bold rounded-none uppercase tracking-widest transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(191,149,63,0.4)]"
          >
            Termin vereinbaren
          </a>
          <a 
            href="#services" 
            className="px-10 py-4 border border-neutral-700 text-white font-medium rounded-none uppercase tracking-widest transition-all hover:border-[#D4AF37] hover:text-[#D4AF37]"
          >
            Leistungen
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#D4AF37] to-transparent"></div>
      </div>
    </section>
  );
};

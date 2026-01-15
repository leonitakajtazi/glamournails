
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-neutral-950 border-t border-neutral-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <span className="text-xl font-serif font-bold gold-gradient">Glamour Nails Beauty</span>
            <p className="text-xs text-neutral-500 mt-2 uppercase tracking-widest">Premium Studio in Bad Kreuznach</p>
          </div>
          
          <div className="flex space-x-8 text-[10px] uppercase tracking-widest font-medium">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Impressum</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">AGB</a>
          </div>
          
          <div className="text-neutral-500 text-xs">
            &copy; {new Date().getFullYear()} Glamour Nails. Alle Rechte vorbehalten.
          </div>
        </div>
        
        <div className="mt-10 text-center text-[10px] text-neutral-700 max-w-4xl mx-auto leading-loose">
          Glamour Nails Beauty Bad Kreuznach – Ihr Experte für Nageldesign, Pediküre, Maniküre und Kosmetik. Wir bieten professionelle Wimpernverlängerung, Gesichtsbehandlungen und hochwertige Nagelpflege im Herzen von Rheinland-Pfalz. Besuchen Sie uns in der Kreuz Str. 17 für Ihr persönliches Wellness-Erlebnis.
        </div>
      </div>
    </footer>
  );
};

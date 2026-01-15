
import React from 'react';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4">Exklusive Leistungen</h2>
          <div className="w-24 h-1 gold-bg mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group relative bg-neutral-900 border border-neutral-800 p-8 transition-all hover:border-[#D4AF37] hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 gold-bg scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              
              <div className="mb-6 overflow-hidden aspect-[4/5]">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
              </div>

              <h3 className="text-xl font-serif font-bold mb-4 group-hover:text-[#D4AF37] transition-colors">{service.title}</h3>
              <p className="text-neutral-500 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-[#D4AF37] font-semibold">{service.price}</span>
                <button className="text-[10px] uppercase tracking-widest text-white border-b border-[#D4AF37] pb-1 hover:text-[#D4AF37] transition-colors">Details</button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-neutral-500 italic mb-8">Haben Sie spezielle Wünsche oder benötigen Sie eine Beratung?</p>
          <a 
            href="tel:015156349736" 
            className="inline-block px-12 py-5 border border-[#D4AF37] text-[#D4AF37] uppercase tracking-widest font-bold hover:bg-[#D4AF37] hover:text-black transition-all"
          >
            Jetzt anrufen
          </a>
        </div>
      </div>
    </section>
  );
};

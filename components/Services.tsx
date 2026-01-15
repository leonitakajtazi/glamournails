import React from 'react';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4">
            Exklusive Leistungen
          </h2>
          <div className="w-24 h-1 gold-bg mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group bg-neutral-900 border border-neutral-800 p-10 text-center transition-all hover:border-[#D4AF37] hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center text-[#D4AF37] text-5xl group-hover:scale-110 transition-transform duration-300">
                <service.icon />
              </div>

              {/* Title */}
              <h3 className="text-xl font-serif font-bold mb-4 group-hover:text-[#D4AF37] transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-neutral-500 italic mb-8">
            Haben Sie spezielle Wünsche oder benötigen Sie eine Beratung?
          </p>
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

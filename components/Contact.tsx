
import React from 'react';
import { Phone, MapPin, Clock, Mail, Instagram, Facebook } from 'lucide-react';
import { CONTACT_DATA } from '../constants';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12">Besuchen Sie <br /><span className="gold-gradient">uns im Studio</span></h2>
            
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-12 h-12 gold-bg flex items-center justify-center shrink-0">
                  <MapPin className="text-black" />
                </div>
                <div>
                  <h4 className="text-lg font-serif mb-2">Anschrift</h4>
                  <p className="text-neutral-400 leading-relaxed">{CONTACT_DATA.address}</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 gold-bg flex items-center justify-center shrink-0">
                  <Phone className="text-black" />
                </div>
                <div>
                  <h4 className="text-lg font-serif mb-2">Telefon</h4>
                  <p className="text-neutral-400">Handy: {CONTACT_DATA.phoneMobile}</p>
                  <p className="text-neutral-400">Festnetz: {CONTACT_DATA.phoneLandline}</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 gold-bg flex items-center justify-center shrink-0">
                  <Clock className="text-black" />
                </div>
                <div>
                  <h4 className="text-lg font-serif mb-2">Öffnungszeiten</h4>
                  <p className="text-neutral-400">Mo – Fr: {CONTACT_DATA.hours.weekdays}</p>
                  <p className="text-neutral-400">Sa: {CONTACT_DATA.hours.saturday}</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-neutral-800 flex gap-6">
              <a href={CONTACT_DATA.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-4 bg-neutral-900 border border-neutral-800 hover:border-[#D4AF37] transition-all text-[#D4AF37]">
                <Instagram />
              </a>
              <a href={CONTACT_DATA.socials.facebook} target="_blank" rel="noopener noreferrer" className="p-4 bg-neutral-900 border border-neutral-800 hover:border-[#D4AF37] transition-all text-[#D4AF37]">
                <Facebook />
              </a>
            </div>
          </div>

          <div className="relative">
            {/* Map Placeholder with styling */}
            <div className="w-full h-[500px] border border-neutral-800 p-2 bg-neutral-900">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2586.357564756531!2d7.860161876880017!3d49.835706531435255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd08a65528827f%3A0xe67c945417ec6e47!2sKreuzstra%C3%9Fe%2017%2C%2055543%20Bad%20Kreuznach!5e0!3m2!1sde!2sde!4v1711234567890!5m2!1sde!2sde" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(1) invert(1) opacity(0.8)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

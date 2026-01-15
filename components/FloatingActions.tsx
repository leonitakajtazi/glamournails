
import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { CONTACT_DATA } from '../constants';

export const FloatingActions: React.FC = () => {
  const whatsappNumber = "4915156349736";
  
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-4 md:hidden">
      <a 
        href={`tel:${CONTACT_DATA.phoneMobile}`} 
        className="w-14 h-14 bg-black border border-[#D4AF37] text-[#D4AF37] rounded-full flex items-center justify-center shadow-2xl animate-pulse"
      >
        <Phone size={24} />
      </a>
      <a 
        href={`https://wa.me/${whatsappNumber}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
};

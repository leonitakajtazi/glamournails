
import React, { useState } from 'react';
import { Menu, X, Instagram, Facebook } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Start', href: '#home' },
    { name: 'Über uns', href: '#about' },
    { name: 'Leistungen', href: '#services' },
    { name: 'Galerie', href: '#gallery' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-2xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="group">
          <span className="text-2xl md:text-3xl font-serif font-bold gold-gradient tracking-tighter transition-transform group-hover:scale-105 inline-block">
            Glamour Nails
          </span>
          <p className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 group-hover:text-gold-400 transition-colors">Bad Kreuznach</p>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium uppercase tracking-widest hover:text-[#D4AF37] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex space-x-4 border-l border-neutral-800 pl-6 ml-6">
            <a href="https://instagram.com" className="text-neutral-400 hover:text-[#D4AF37] transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://facebook.com" className="text-neutral-400 hover:text-[#D4AF37] transition-colors">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-2xl font-serif uppercase tracking-widest gold-gradient"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

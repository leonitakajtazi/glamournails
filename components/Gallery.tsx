import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Nails', 'Beauty', 'Atmosphere'];

  const filteredImages =
    filter === 'All'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === filter);

  return (
    <section id="gallery" className="py-24 bg-neutral-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end
 mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-2">
              Impressionen
            </h2>
            <p className="text-neutral-500 uppercase tracking-[0.3em] text-sm">
              Glamour in Bildern
            </p>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 text-xs uppercase tracking-widest transition-all ${
                  filter === cat
                    ? 'gold-bg text-black font-bold'
                    : 'bg-neutral-800 text-neutral-400 hover:text-white'
                }`}
              >
                {cat === 'All' ? 'Alle' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              className="group relative aspect-square overflow-hidden cursor-pointer"
            >
              <img
                src={img.url}
                alt="Galerie Bild"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 grid place-items-center">
                <div className="border border-[#D4AF37]/40 w-[85%] h-[85%] flex flex-col items-center justify-center text-center px-4">
                  <span className="text-[#D4AF37] text-xs uppercase tracking-widest mb-2">
                    {img.category}
                  </span>
                  <p className="font-serif italic text-xl">
                    Perfect Look
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

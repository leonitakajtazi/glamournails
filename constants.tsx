
import { Service, GalleryImage, ContactInfo } from './types';

export const CONTACT_DATA: ContactInfo = {
  address: "Kreuz Str. 17, 55543 Bad Kreuznach",
  phoneMobile: "0151 56349736",
  phoneLandline: "0671 79489833",
  hours: {
    weekdays: "09:00 – 19:00 Uhr",
    saturday: "09:00 – 18:00 Uhr",
  },
  socials: {
    facebook: "https://facebook.com/glamournailsbadkreuznach",
    instagram: "https://instagram.com/glamournails.badkreuznach",
  }
};

import { FaHandSparkles, FaGem, FaSpa, FaPaintBrush } from 'react-icons/fa';

export const SERVICES = [
  {
    id: 1,
    title: 'Nageldesign',
    description: 'Moderne & elegante Nagelkunst.',
    icon: FaHandSparkles,
  },
  {
    id: 2,
    title: 'Maniküre',
    description: 'Perfekte Pflege für Ihre Hände.',
    icon: FaSpa,
  },
  {
    id: 3,
    title: 'Luxury Nails',
    description: 'Exklusiver Look mit Premium-Finish.',
    icon: FaGem,
  },
  {
    id: 4,
    title: 'Nail Art',
    description: 'Individuelle Designs & Trends.',
    icon: FaPaintBrush,
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 'g1', url: './images/1.PNG', category: 'Nails' },
  { id: 'g2', url: './images/2.png', category: 'Beauty' },
  { id: 'g3', url: './images/3.png', category: 'Atmosphere' },
  { id: 'g4', url: './images/4.png', category: 'Nails' },
  { id: 'g5', url: './images/5.png', category: 'Nails' },
  { id: 'g6', url: './images/6.png', category: 'Beauty' },
];

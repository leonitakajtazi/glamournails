
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

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Maniküre & Design',
    description: 'Hochwertige Nagelmodellage mit Gel oder Shellac. Von klassisch bis extravagant.',
    price: 'ab 35€',
    image: 'https://images.unsplash.com/photo-1604654894610-df4909985730?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Pediküre Wellness',
    description: 'Professionelle Fußpflege für samtweiche Haut und perfekt gepflegte Zehennägel.',
    price: 'ab 45€',
    image: 'https://images.unsplash.com/photo-1519415510236-8557b13b0221?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Wimpern & Augenbrauen',
    description: 'Lifting und Styling für einen unwiderstehlichen Blick, der lange anhält.',
    price: 'ab 25€',
    image: 'https://images.unsplash.com/photo-1583001809224-28a649397567?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    title: 'Gesichtspflege',
    description: 'Exklusive Treatments für strahlende Haut und pure Entspannung.',
    price: 'ab 60€',
    image: 'https://images.unsplash.com/photo-1570172619997-d0dfd430756a?auto=format&fit=crop&q=80&w=800'
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 'g1', url: 'https://images.unsplash.com/photo-1632345031435-81979cd75139?auto=format&fit=crop&q=80&w=800', category: 'Nails' },
  { id: 'g2', url: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&q=80&w=800', category: 'Beauty' },
  { id: 'g3', url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800', category: 'Atmosphere' },
  { id: 'g4', url: 'https://images.unsplash.com/photo-1610992015732-2449b0c2627a?auto=format&fit=crop&q=80&w=800', category: 'Nails' },
  { id: 'g5', url: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=800', category: 'Nails' },
  { id: 'g6', url: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800', category: 'Beauty' },
];


export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  category: string;
}

export interface ContactInfo {
  address: string;
  phoneMobile: string;
  phoneLandline: string;
  hours: {
    weekdays: string;
    saturday: string;
  };
  socials: {
    facebook: string;
    instagram: string;
  };
}

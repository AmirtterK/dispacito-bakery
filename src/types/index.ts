export interface MenuItem {
  id: string;
  name: string;
  category: "coffee" | "bakery" | "brunch" | "restaurant" | string;
  price: number;
  formattedPrice: string;
  description: string;
  image: string;
  featured?: boolean;
  badge?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  subtitle: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  formattedPrice: string;
  image: string;
  quantity: number;
}

export interface ShopInfo {
  name: string;
  tagline: string;
  category: string;
  established: string;
  announcement: string;
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    description: string;
    ctaMenu: string;
    ctaLocation: string;
  };
  story: {
    title: string;
    subtitle: string;
    paragraphs: string[];
    highlights: Array<{ label: string; value: string }>;
  };
  hours: {
    days: string;
    time: string;
    breakfastHours: string;
    kitchenHours: string;
  };
  location: {
    address: string;
    neighborhood: string;
    city: string;
    country: string;
    mapsUrl: string;
    embedQuery: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  contact: {
    phone: string;
    email: string;
    instagram: string;
    instagramHandle: string;
  };
  currency: {
    code: string;
    symbol: string;
    position: "after" | "before";
  };
}

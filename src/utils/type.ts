interface CartItem {
  quantity?: number;
  id: string;
  title: string;
  fabricContent: string;
  image: string;
  price: string;
  color: string[];
  size: string[];
  link: string;
}

interface HomeFeature {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  link: string;
  date: string;
  video: string;
  desc: string;
  subDesc: string;
}

export type { CartItem, HomeFeature };

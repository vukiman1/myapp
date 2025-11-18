export type ProductCardType = {
  id: number;
  title: string;
  price: number;
  tag: number[];
  href: string;
  image: string;
  gift: {
    title: string;
    isHot: boolean;
  }[];
  rating: {
    total: number;
    average: number;
    stars: {
      value: number;
      count: number;
    }[];
  };
};

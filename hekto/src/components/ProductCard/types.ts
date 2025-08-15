export type Variant =
  | "FEATURED"
  | "LATEST"
  | "TRENDING"
  | "CATEGORY"
  | "GRID"
  | "LIST";

export type Product = {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  wasPrice: number;
  isSale: boolean;
  isFeatured: boolean;
  discountPercentage: number;
  description: string;
  rating: { value: number; votedCount: number };
  createdAt: string;
  specialOffer: null;
  colors: string[];
  soldTimes: number;
  code: string;
  thumbnail: string;
  imageSet: string[];
};

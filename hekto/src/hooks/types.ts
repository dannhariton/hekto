export type ProductFilters = {
  brand: string[];
  min: string;
  max: string;
  price: string;
  category: string[];
  discountPercentage: string[];
  colors: string[];
  rating: string;
  limit: string;
  page: string;
  sort: string;
  order: string;
};

export type SetFilters = (
  newFilters: Partial<ProductFilters>,
  updateMethod: "single" | "multiple",
  isMultiple?: boolean,
  isSort?: boolean,
  isRating?: boolean
) => void;

import { Product } from "@/components/ProductCard/types";

export const testProduct: Product = {
  id: "339336d2-0b5c-490b-9014-c9f3c52e6d6f",
  name: "Smart Speaker",
  brand: "Apple",
  category: "Smart Home Devices",
  price: 199.99,
  wasPrice: 249.99,
  isSale: false,
  isFeatured: false,
  discountPercentage: 20,
  description: "aliquip excepteur non minim adipisicing fugiat qui ullamco",
  rating: {
    value: 3.38,
    votedCount: 729,
  },
  createdAt: "2023-05-22T06:23:24.082Z",
  specialOffer: null,
  colors: ["salmon", "white", "brown", "aqua"],
  soldTimes: 1984,
  code: "0B5C-490B",
  thumbnail:
    "https://placehold.co/600x400/EEE/31343C?font=playfair-display&text=Smart Speaker",
  imageSet: [
    "https://placehold.co/600x400/EEE/31343C?font=playfair-display&text=Smart Speaker 1",
    "https://placehold.co/600x400/EEE/31343C?font=playfair-display&text=Smart Speaker 2",
    "https://placehold.co/600x400/EEE/31343C?font=playfair-display&text=Smart Speaker 3",
  ],
};

"use client";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type Product = {
  id: string;
  quantity: number;
};

type CartContextType = {
  cartProducts: Product[];
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
};

export const CartContext = createContext<CartContextType>({
  cartProducts: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartProducts, setCartProducts] = useState<Product[]>([
    { id: "1", quantity: 1 },
  ]);

  const addToCart = useCallback(
    (id: string) => {
      setCartProducts((prevProducts) => {
        const isProductInCart = prevProducts.find(
          (product) => product.id === id
        );

        if (isProductInCart) {
          return prevProducts.map((product) =>
            product.id === id
              ? { ...product, quantity: product.quantity++ }
              : product
          );
        } else {
          return [...prevProducts, { id, quantity: 1 }];
        }
      });
    },
    [setCartProducts]
  );

  const removeFromCart = useCallback(
    (id: string) => {
      setCartProducts((prev) => {
        return prev.filter((item) => item.id !== id);
      });
    },
    [setCartProducts]
  );

  const clearCart = useCallback(() => {
    if (cartProducts.length) {
      setCartProducts([]);
    }
    return cartProducts;
  }, [setCartProducts, cartProducts]);

  console.log(cartProducts);

  const value = useMemo(
    () => ({ cartProducts, addToCart, removeFromCart, clearCart }),
    [cartProducts, addToCart, removeFromCart, clearCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = () => useContext(CartContext);

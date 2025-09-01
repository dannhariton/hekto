"use client";
import {
  deleteCartItemsFromLocalStorage,
  getCartItemsFromLocalStorage,
  saveCartItemsInLocalStorage,
} from "@/utils/localStorageCartItems";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Product = {
  id: string;
  quantity: number;
  price: number;
};

type CartContextType = {
  cartProducts: Product[];
  addToCart: (id: string, price: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  subtractQuantityFromProduct: (id: string) => void;
};

export const CartContext = createContext<CartContextType>({
  cartProducts: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  subtractQuantityFromProduct: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  useEffect(() => {
    const cartItems = getCartItemsFromLocalStorage();
    setCartProducts(cartItems);
  }, []);

  useEffect(() => {
    saveCartItemsInLocalStorage(cartProducts);
  }, [cartProducts]);

  const addToCart = useCallback(
    (id: string, price: number) => {
      setCartProducts((prevProducts) => {
        const isProductInCart = prevProducts.find(
          (product) => product.id === id
        );

        if (isProductInCart) {
          return prevProducts.map((product) =>
            product.id === id
              ? { ...product, quantity: product.quantity + 1, price }
              : product
          );
        } else {
          return [...prevProducts, { id, quantity: 1, price }];
        }
      });
    },
    [setCartProducts]
  );

  const subtractQuantityFromProduct = useCallback(
    (id: string) => {
      setCartProducts((prevProducts) => {
        const isProductInCart = prevProducts.find(
          (product) => product.id === id
        );

        if (isProductInCart && isProductInCart.quantity > 1) {
          return prevProducts.map((product) =>
            product.id === id
              ? { ...product, quantity: product.quantity - 1 }
              : product
          );
        } else {
          return prevProducts.filter((product) => product.id !== id);
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
    deleteCartItemsFromLocalStorage();
    setCartProducts([]);
  }, []);

  const value = useMemo(
    () => ({
      cartProducts,
      addToCart,
      removeFromCart,
      clearCart,
      subtractQuantityFromProduct,
    }),
    [
      cartProducts,
      addToCart,
      removeFromCart,
      clearCart,
      subtractQuantityFromProduct,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = () => useContext(CartContext);

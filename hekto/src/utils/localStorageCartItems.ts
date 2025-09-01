"use client";
import { Product } from "@/contexts/CartContext";

export function getCartItemsFromLocalStorage() {
  const cartItems = localStorage.getItem("products");

  if (cartItems) {
    return JSON.parse(cartItems);
  } else {
    return [] as Product[];
  }
}

export function saveCartItemsInLocalStorage(cartProducts: Product[]) {
  localStorage.setItem("products", JSON.stringify(cartProducts));
}

export function deleteCartItemsFromLocalStorage() {
  localStorage.removeItem("products");
}

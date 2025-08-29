"use client";
import { useCartContext } from "@/contexts/CartContext";

export default function Page() {
  const { cartProducts, clearCart } = useCartContext();

  return (
    <div>
      {cartProducts.map((item) => (
        <p key={item.id}>
          {item.id} {item.quantity}
        </p>
      ))}

      <button onClick={clearCart}>delete cart</button>
    </div>
  );
}

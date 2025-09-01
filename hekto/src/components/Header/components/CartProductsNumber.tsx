"use client";
import { useCartContext } from "@/contexts/CartContext";
import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";
import styled from "styled-components";
const S = {
  NumberProductsInCart: styled.span`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.WHITE};
    background-color: ${colors.PRIMARY};
    width: 100%;
    height: 100%;
    border-radius: 100%;
    left: 40%;
    top: -40%;
    ${typography.labelSmall}
  `,
};
export default function CartProductsNumber() {
  const { cartProducts } = useCartContext();
  return (
    <div>
      {cartProducts.length !== 0 && (
        <S.NumberProductsInCart>{cartProducts.length}</S.NumberProductsInCart>
      )}
    </div>
  );
}

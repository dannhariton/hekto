"use client";
import { Button } from "@/components/Buttons/Button";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { useCartContext } from "@/contexts/CartContext";
import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";
import { rem } from "@/utils/remConvert";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";
import CartItem from "./_components/CartItem";
import Checkout from "./_components/Checkout";
import emptyCart from "/public/empty-cart.svg";

const S = {
  Section: styled.section`
    margin: ${rem(80)} 0;
  `,
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${rem(32)};
    padding: ${rem(80)} 0;
  `,
  ImageContainer: styled.div`
    width: 20%;
    aspect-ratio: 1/1;
  `,
  Image: styled(Image)`
    width: 100%;
    height: 100%;
  `,
  Header: styled.h3`
    color: ${colors.BLACK};
    ${typography.H3};
  `,
  ItemsContainer: styled.div`
    display: flex;
    width: 65%;
    gap: ${rem(24)};
    flex-direction: column;
  `,
};

export default function Page() {
  const { cartProducts } = useCartContext();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = cartProducts.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);
    setTotalPrice(total);
  }, [cartProducts]);

  let content = (
    <MaxWidthWrapper>
      <S.Container>
        <S.ImageContainer>
          <S.Image src={emptyCart} alt="empty cart" />
        </S.ImageContainer>
        <S.Header>Your Cart Is Empty</S.Header>
        <Button as={Link} $variant="DEFAULT" href="/products">
          Start Shopping
        </Button>
      </S.Container>
    </MaxWidthWrapper>
  );

  if (cartProducts.length) {
    content = (
      <MaxWidthWrapper>
        <S.ItemsContainer>
          {cartProducts.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </S.ItemsContainer>
        <Checkout totalPrice={totalPrice} />
      </MaxWidthWrapper>
    );
  }

  return <S.Section>{content}</S.Section>;
}

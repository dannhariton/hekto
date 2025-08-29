import Image from "next/image";
import { ReactNode } from "react";
import { Button } from "../Buttons/Button";
import Stars from "../Stars";
import Icons from "./components/Icons";
import { S } from "./styles";
import { Product, Variant } from "./types";

const content: Record<Variant, (product: Product) => ReactNode> = {
  FEATURED: ({ name, code, price, thumbnail, id }) => (
    <>
      <S.ProductImage>
        <S.IconsContainer>
          <Icons $direction="ROW" id={id} />
          <Button $variant="SUCCESS">View Details</Button>
        </S.IconsContainer>
        <Image
          width={200}
          height={200}
          src={thumbnail}
          alt="product image"
          priority={true}
        />
      </S.ProductImage>
      <S.Title>{name}</S.Title>
      <S.Code>Code - {code}</S.Code>
      <S.Price>${price}</S.Price>
    </>
  ),
  LATEST: ({ name, wasPrice, price, thumbnail, id }) => (
    <>
      <S.ProductImage>
        <S.IconsContainer>
          <Icons $direction="COLUMN" id={id} />
        </S.IconsContainer>
        <Image
          width={200}
          height={200}
          src={thumbnail}
          alt="product image"
          priority={true}
        />
      </S.ProductImage>
      <S.FlexContainer>
        <S.Title>{name}</S.Title>
        <S.PriceContainer>
          <S.Price>${price}</S.Price>
          <S.OldPrice>{wasPrice}</S.OldPrice>
        </S.PriceContainer>
      </S.FlexContainer>
    </>
  ),
  TRENDING: ({ name, wasPrice, price, thumbnail }) => (
    <>
      <S.ProductImage>
        <Image width={200} height={200} src={thumbnail} alt="product image" />{" "}
      </S.ProductImage>
      <S.FlexContainer>
        <S.Title>{name}</S.Title>
        <S.PriceContainer>
          <S.Price>${price}</S.Price>
          <S.OldPrice>${wasPrice}</S.OldPrice>
        </S.PriceContainer>
      </S.FlexContainer>
    </>
  ),
  CATEGORY: ({ name, thumbnail }) => (
    <>
      <S.ProductImage>
        <S.IconsContainer>
          <Button $variant="SUCCESS">View Details</Button>
        </S.IconsContainer>
        <Image width={200} height={200} src={thumbnail} alt="product image" />{" "}
      </S.ProductImage>
      <S.Title>{name}</S.Title>
    </>
  ),
  LIST: ({ name, wasPrice, price, thumbnail, description, rating, id }) => (
    <>
      <S.ProductImage>
        <Image width={200} height={200} src={thumbnail} alt="product image" />{" "}
      </S.ProductImage>

      <S.FlexContainer>
        <S.ProductContent>
          <S.Title>{name}</S.Title>
          <S.PriceContainer>
            <S.Price>${price}</S.Price>
            <S.OldPrice>${wasPrice}</S.OldPrice>
          </S.PriceContainer>
          <S.Description>
            {description
              .split(" ")
              .map((word, index) =>
                index === 0 ? word[0].toUpperCase() + word.slice(1) : word
              )
              .join(" ")}
          </S.Description>
          <S.Stars>
            <Stars rating={rating.value} />
          </S.Stars>
        </S.ProductContent>

        <Icons $direction="ROW" $gap="16" id={id} />
      </S.FlexContainer>
    </>
  ),
  GRID: ({ name, wasPrice, price, thumbnail, description, rating, id }) => (
    <>
      <S.ProductImage>
        <Image width={200} height={200} src={thumbnail} alt="product image" />{" "}
      </S.ProductImage>

      <S.ProductContent>
        <S.Title>{name}</S.Title>
        <S.Stars>
          <Stars rating={rating.value} />
        </S.Stars>
        <S.PriceContainer>
          <S.Price>${price}</S.Price>
          <S.OldPrice>${wasPrice}</S.OldPrice>
        </S.PriceContainer>
        <S.Description>
          {description
            .split(" ")
            .map((word, index) =>
              index === 0 ? word[0].toUpperCase() + word.slice(1) : word
            )
            .join(" ")}
        </S.Description>
      </S.ProductContent>

      <S.IconsContainer>
        <Icons $direction="ROW" $gap="16" id={id} />
      </S.IconsContainer>
    </>
  ),
};

export const ProductCard = ({
  variant,
  product,
}: {
  variant: Variant;
  product: Product;
}) => {
  return (
    <S.Container href="/" $variant={variant}>
      {content[variant](product)}
    </S.Container>
  );
};

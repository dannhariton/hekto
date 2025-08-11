import Image from "next/image";
import laptopImg from "../../../public/images/laptop.png";
import perfumeImg from "../../../public/images/perfume.png";
import psImg from "../../../public/images/ps4.jpg";
import watchesImg from "../../../public/images/watch.jpg";

import { Button } from "../Button";
import Icons from "./components/Icons";
import Stars from "./components/Stars";
import { S } from "./styles";
import { Variant } from "./types";

const content = {
  FEATURED: (
    <>
      <S.ProductImage>
        <S.IconsContainer>
          <Icons dir="ROW" />
          <Button variant="SUCCESS">View Details</Button>
        </S.IconsContainer>
        <Image src={watchesImg} alt="product image" />
      </S.ProductImage>
      <S.Title>Watches</S.Title>
      <S.Code>Code - Y523201</S.Code>
      <S.Price>$42.00</S.Price>
    </>
  ),
  LATEST: (
    <>
      <S.ProductImage>
        <S.IconsContainer>
          <Icons dir="COLUMN" />
        </S.IconsContainer>
        <Image src={laptopImg} alt="product image" />
      </S.ProductImage>
      <S.FlexContainer>
        <S.Title>Laptop</S.Title>
        <S.PriceContainer>
          <S.Price>$42.00</S.Price>
          <S.OldPrice>$99.00</S.OldPrice>
        </S.PriceContainer>
      </S.FlexContainer>
    </>
  ),
  TRENDING: (
    <>
      <S.ProductImage>
        <Image src={psImg} alt="product image" />
      </S.ProductImage>
      <S.FlexContainer>
        <S.Title>Laptop</S.Title>
        <S.PriceContainer>
          <S.Price>$42.00</S.Price>
          <S.OldPrice>$99.00</S.OldPrice>
        </S.PriceContainer>
      </S.FlexContainer>
    </>
  ),
  CATEGORY: (
    <>
      <S.ProductImage>
        <S.IconsContainer>
          <Button variant="SUCCESS">View Details</Button>
        </S.IconsContainer>
        <Image src={perfumeImg} alt="product image" />
      </S.ProductImage>
      <S.Title>Scelerisque dignissim</S.Title>
    </>
  ),
  LIST: (
    <>
      <S.ProductImage>
        <Image src={perfumeImg} alt="product image" />
      </S.ProductImage>

      <S.FlexContainer>
        <S.ProductContent>
          <S.Title>Scelerisque dignissim</S.Title>
          <S.PriceContainer>
            <S.Price>$42.00</S.Price>
            <S.OldPrice>$99.00</S.OldPrice>
          </S.PriceContainer>
          <S.Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </S.Description>
          <S.Stars>
            <Stars rating={4} />
          </S.Stars>
        </S.ProductContent>

        <Icons dir="ROW" gap="16" />
      </S.FlexContainer>
    </>
  ),
  GRID: (
    <>
      <S.ProductImage>
        <Image src={perfumeImg} alt="product image" />
      </S.ProductImage>

      <S.ProductContent>
        <S.Title>Scelerisque dignissim</S.Title>
        <S.Stars>
          <Stars rating={4} />
        </S.Stars>
        <S.PriceContainer>
          <S.Price>$42.00</S.Price>
          <S.OldPrice>$99.00</S.OldPrice>
        </S.PriceContainer>
        <S.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </S.Description>
      </S.ProductContent>

      <S.IconsContainer>
        <Icons dir="ROW" gap="16" />
      </S.IconsContainer>
    </>
  ),
};

const FeaturedCard = ({ variant }: { variant: Variant }) => {
  return (
    <S.Container href="/" variant={variant}>
      {content[variant]}
    </S.Container>
  );
};

export default FeaturedCard;

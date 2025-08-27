import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";
import { rem } from "@/utils/remConvert";
import Image from "next/image";
import styled from "styled-components";
import { Button } from "../Buttons/Button";
import image from "/public/images/headphones.webp";

const S = {
  HeroSlide: styled.div`
    display: flex;
    align-items: center;
  `,
  Content: styled.div`
    max-width: ${rem(706)};
    margin: ${rem(114)} ${rem(32)} ${rem(114)} 0;
    display: flex;
    flex-direction: column;
    gap: ${rem(16)};
    align-items: flex-start;
  `,
  Title: styled.h1`
    ${typography.H1}
    color: ${colors.BLACK};
  `,
  Subtitle: styled.p`
    ${typography.bodyBold}
    color: ${colors.PRIMARY};
  `,
  Description: styled.p`
    ${typography.bodyDefault}
    color: ${colors.GREY_3};
    margin-bottom: ${rem(8)};
  `,
  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75%;
    position: relative;
  `,
  ImageContainer: styled.div`
    margin: ${rem(34)} 0 ${rem(54)} 0;
    position: relative;
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 100%;
    background-color: ${colors.GREY_2};

    &::before {
      position: absolute;
      content: "";
      bottom: ${rem(-20)};
      left: ${rem(-20)};
      width: 100%;
      height: 100%;
      border-radius: 100%;
      background-color: ${colors.GREY_3};
      opacity: 0.9;
      z-index: -1;
    }
  `,
  Image: styled(Image)`
    width: 100%;
    height: 100%;
  `,
};

export default function HeroSlide() {
  return (
    <S.HeroSlide>
      <S.Content>
        <S.Subtitle>Best Headphones For Your Life....</S.Subtitle>
        <S.Title>New Trendy Collection Headphones</S.Title>
        <S.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
          feugiat habitasse nec, bibendum condimentum.
        </S.Description>
        <Button $variant="DEFAULT">Shop Now</Button>
      </S.Content>
      <S.Container>
        <S.ImageContainer>
          <S.Image src={image} alt="prop" width={700} height={700} />
        </S.ImageContainer>
      </S.Container>
    </S.HeroSlide>
  );
}

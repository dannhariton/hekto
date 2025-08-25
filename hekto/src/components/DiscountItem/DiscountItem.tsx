import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";
import { rem } from "@/utils/remConvert";
import CheckIcon from "@mui/icons-material/Check";
import Image from "next/image";
import styled from "styled-components";
import { Button } from "../Buttons/Button";
import image from "/public/images/headphones.webp";

const S = {
  DiscountItem: styled.div`
    display: flex;
    align-items: center;
  `,
  Content: styled.div`
    max-width: 45%;
    margin: ${rem(114)} ${rem(32)} ${rem(114)} 0;
    display: flex;
    flex-direction: column;
    gap: ${rem(24)};
    align-items: flex-start;
  `,
  Title: styled.h3`
    ${typography.H3}
    color: ${colors.BLACK};
  `,
  Subtitle: styled.p`
    ${typography.subtitleMedium}
    color: ${colors.PRIMARY};
  `,
  Description: styled.p`
    ${typography.bodyLarge}
    color: ${colors.GREY_3};
  `,
  GridContainer: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: ${rem(24)};
    grid-column-gap: ${rem(32)};
  `,
  Specification: styled.div`
    ${typography.bodyDefault}
    color: ${colors.GREY_3};
    display: flex;
    align-items: center;
  `,
  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55%;
    position: relative;
  `,
  ImageBackground: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: ${rem(472)};
    height: ${rem(472)};
    border-radius: 100%;
    background-color: ${colors.GREY_2};

    &&::after {
      position: absolute;
      content: "";
      top: ${rem(-37)};
      right: ${rem(-57)};
      width: ${rem(316)};
      height: ${rem(316)};
      border-radius: 100%;
      background-color: ${colors.GREY_2};
      opacity: 0.5;
    }
  `,
  ImageContainer: styled.div`
    position: absolute;
    z-index: 1;
    width: 74%;
    aspect-ratio: 0.95/1;
    right: 0%;
    top: -10%;
  `,
  Image: styled(Image)`
    width: 100%;
    height: 100%;
  `,
};

export default function DiscountItem() {
  return (
    <S.DiscountItem>
      <S.Content>
        <S.Title>20% Discount Of All Products</S.Title>
        <S.Subtitle>Headphones</S.Subtitle>
        <S.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
          feugiat habitasse nec, bibendum condimentum.
        </S.Description>
        <S.GridContainer>
          <S.Specification>
            <CheckIcon sx={{ marginRight: rem(8) }} /> Material expose like
            metals
          </S.Specification>
          <S.Specification>
            <CheckIcon sx={{ marginRight: rem(8) }} /> Clear lines and geomatric
            figures
          </S.Specification>
          <S.Specification>
            <CheckIcon sx={{ marginRight: rem(8) }} /> Simple neutral colours.
          </S.Specification>
          <S.Specification>
            <CheckIcon sx={{ marginRight: rem(8) }} />
            Material expose like metals
          </S.Specification>
        </S.GridContainer>
        <Button $variant="DEFAULT">Shop Now</Button>
      </S.Content>
      <S.Container>
        <S.ImageBackground></S.ImageBackground>
        <S.ImageContainer>
          <S.Image src={image} alt="prop" width={700} height={700} />
        </S.ImageContainer>
      </S.Container>
    </S.DiscountItem>
  );
}

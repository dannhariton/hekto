import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";
import { rem } from "@/utils/remConvert";
import Link from "next/link";
import styled, { css, RuleSet } from "styled-components";
import { Variant } from "./types";

type Styles = Record<Variant, RuleSet>;

export const S = {
  Container: styled(Link)<{ $variant: Variant }>`
    text-decoration: none;

    ${({ $variant }) => styles[$variant]}
  `,
  ProductImage: styled.div``,
  IconsContainer: styled.div``,
  Title: styled.p``,
  Code: styled.p``,
  PriceContainer: styled.div``,
  FlexContainer: styled.div``,
  Price: styled.p``,
  OldPrice: styled.p``,
  Description: styled.p``,
  ProductContent: styled.div``,
  TitleStars: styled.div``,
  Stars: styled.div``,
};

const styles: Styles = {
  FEATURED: css`
    width: ${rem(304)};
    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: ${rem(8)};
    background-color: ${colors.WHITE};
    box-shadow: ${rem(8, 24, 32, -16)} rgba(${colors.BLACK_RGB}, 0.15);
    transition: all 0.2s ease-in;

    &:hover,
    &:focus,
    &:focus-within {
      box-shadow: ${rem(8, 64, 80, -16)} rgba(${colors.BLACK_RGB}, 0.15);

      ${S.IconsContainer} {
        opacity: 1;
      }
    }

    ${S.IconsContainer} {
      opacity: 0;
      position: absolute;
      width: ${rem(304)};
      height: ${rem(232)};

      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;

      div {
        align-self: flex-start;
        margin: ${rem(8, 0, 0, 8)};
      }

      button {
        margin-bottom: ${rem(8)};
      }
    }

    ${S.ProductImage} {
      width: 100%;
      height: ${rem(232)};
      position: relative;

      img {
        width: 100%;
        height: 100%;
        border-radius: ${rem(4)};
      }
    }

    ${S.Title} {
      ${typography.labelBold}
      color: ${colors.PRIMARY};
      padding: ${rem(24, 0)};
    }

    ${S.Code} {
      ${typography.labelSmall}
      color: ${colors.GREY_3};
    }

    ${S.Price} {
      ${typography.labelBold}
      color: ${colors.BLACK};
      padding-top: ${rem(8)};
      padding-bottom: ${rem(24)};
    }
  `,
  LATEST: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.3s;

    &:hover,
    &:focus,
    &:focus-within {
      ${S.IconsContainer} {
        opacity: 1;
      }
    }

    ${S.IconsContainer} {
      opacity: 0;

      position: absolute;
      left: 0;
      bottom: 0;
      margin: ${rem(0, 0, 8, 8)};
    }

    ${S.ProductImage} {
      width: 100%;
      height: ${rem(272)};
      position: relative;

      img {
        width: 100%;
        border-radius: ${rem(4)};
        height: 100%;
      }
    }

    ${S.FlexContainer} {
      width: 100%;
      margin-top: ${rem(12)};
      display: flex;
      justify-content: space-between;
    }

    ${S.Title} {
      ${typography.labelDefault}
      color: ${colors.BLACK};
    }

    ${S.PriceContainer} {
      display: flex;

      gap: ${rem(16)};
      align-items: center;
    }

    ${S.Price} {
      ${typography.labelDefault}
      color: ${colors.BLACK};
    }

    ${S.OldPrice} {
      ${typography.labelSmall}
      color: ${colors.PRIMARY};
    }
  `,
  TRENDING: css`
    width: calc(100% - (rem(32) * 3) / 4);
    background-color: ${colors.WHITE};
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: ${rem(8)};
    box-shadow: ${rem(8, 24, 32, -16)} rgba(${colors.BLACK_RGB}, 0.15);
    transition: all 0.3s;
    &:hover,
    &:focus {
      transform: translateY(${rem(-24)});

      box-shadow: ${rem(8, 64, 80, -16)} rgba(${colors.BLACK_RGB}, 0.15);
    }

    ${S.ProductImage} {
      padding: ${rem(16)};
      width: 100%;
      aspect-ratio: 1.17/1;
      position: relative;
      margin-top: ${rem(12)};

      img {
        border-radius: 0.25rem;
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }

    ${S.FlexContainer} {
      width: 100%;
      margin-top: ${rem(8)};
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    ${S.Title} {
      ${typography.labelBold}
      color: ${colors.PRIMARY};
      margin-bottom: ${rem(8)};
    }

    ${S.PriceContainer} {
      display: flex;
      gap: ${rem(16)};
      align-items: center;
      margin-bottom: ${rem(24)};
    }

    ${S.Price} {
      ${typography.labelDefault}
      color: ${colors.BLACK};
    }

    ${S.OldPrice} {
      text-decoration: line-through;
      ${typography.labelSmall}
      color: ${colors.GREY_3};
    }
  `,
  CATEGORY: css`
    margin: ${rem(32, 32)};
    width: ${rem(272)};

    display: flex;
    flex-direction: column;
    align-items: center;

    transition: all 0.3s;
    &:hover,
    &:focus,
    &:focus-within {
      transform: translateY(${rem(-24)});

      ${S.IconsContainer} {
        opacity: 1;
      }

      ${S.ProductImage} {
        &::before {
          opacity: 1;
        }

        img {
          width: 100%;
          box-shadow: ${rem(8, 64, 80, -16)} rgba(${colors.BLACK_RGB}, 0.15);
        }
      }
    }

    ${S.IconsContainer} {
      opacity: 0;
      position: absolute;
      width: 100%;
      height: 100%;

      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-direction: column;

      button {
        margin-bottom: ${rem(34)};
      }
    }

    ${S.ProductImage} {
      width: ${rem(272)};
      height: ${rem(272)};
      position: relative;

      &::before {
        opacity: 0;
        content: "";
        position: absolute;
        bottom: ${rem(-6)};
        left: ${rem(-6)};
        width: ${rem(272)};
        height: ${rem(272)};
        background: ${colors.GREY_3};
        border-radius: 50%;
        z-index: -1;
      }

      img {
        border-radius: ${rem(200)};
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }

    ${S.Title} {
      ${typography.subtitleSmall}
      color: ${colors.BLACK};
      margin-top: ${rem(32)};
    }
  `,
  LIST: css`
    background-color: ${colors.WHITE};
    display: flex;
    align-items: center;

    &:hover,
    &:focus {
      box-shadow: ${rem(8, 64, 80, -16)} rgba(${colors.BLACK_RGB}, 0.15);
    }

    ${S.ProductImage} {
      width: ${rem(288)};
      height: ${rem(200)};
      margin: ${rem(16, 32, 16, 16)};

      img {
        border-radius: ${rem(4)};
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }

    ${S.FlexContainer} {
    }

    ${S.ProductContent} {
      margin-bottom: ${rem(37)};
      position: relative;
      display: flex;
      flex-direction: column;
    }

    ${S.Stars} {
      position: absolute;
      right: 0;
      top: 0;
    }

    ${S.PriceContainer} {
      display: flex;
      flex-direction: row;
      gap: ${rem(15)};
      align-items: center;
    }

    ${S.Price} {
      ${typography.labelDefault}
      color: ${colors.BLACK};
    }

    ${S.OldPrice} {
      ${typography.labelSmall}
      text-decoration: line-through;
      color: ${colors.GREY_3};
    }

    ${S.Title} {
      ${typography.subtitleSmall}
      color: ${colors.BLACK};
      margin-bottom: ${rem(8)};
    }

    ${S.Description} {
      ${typography.bodyDefault}
      color: ${colors.GREY_3};
      margin-top: ${rem(11)};
    }
  `,
  GRID: css`
    width: ${rem(304)};
    background-color: ${colors.WHITE};
    display: flex;
    flex-direction: column;

    margin-bottom: ${rem(64)};

    &:hover,
    &:focus {
      box-shadow: ${rem(8, 64, 80, -16)} rgba(${colors.BLACK_RGB}, 0.15);
    }

    ${S.ProductImage} {
      width: ${rem(288)};
      height: ${rem(200)};
      margin: ${rem(8, 8, 16, 8)};

      img {
        border-radius: ${rem(4)};
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }

    ${S.ProductContent} {
      margin: ${rem(0, 16, 16, 16)};
      position: relative;
      display: flex;
      flex-direction: column;
    }

    ${S.Stars} {
      margin-bottom: ${rem(8)};
    }

    ${S.PriceContainer} {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: ${rem(16)};
    }

    ${S.Price} {
      ${typography.labelDefault}
      color: ${colors.BLACK};
    }

    ${S.OldPrice} {
      ${typography.labelSmall}
      text-decoration: line-through;
      color: ${colors.GREY_3};
    }

    ${S.Title} {
      ${typography.subtitleSmall}
      color: ${colors.BLACK};
      margin-bottom: ${rem(8)};
    }

    ${S.Description} {
      ${typography.bodyDefault}
      color: ${colors.GREY_3};
      margin-top: ${rem(11)};
    }

    ${S.IconsContainer} {
      margin: ${rem(0, 0, 16, 16)};
    }
  `,
};

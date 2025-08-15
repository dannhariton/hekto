import { colors } from "@/styles/colors";
import { spacing } from "@/styles/spacing";
import { typography } from "@/styles/typography";
import { rem } from "@/utils/remConvert";
import Link from "next/link";
import styled from "styled-components";
import Input from "../Input";
import Copyright from "./components/Copyright";

const S = {
  FooterContent: styled.footer`
    background-color: ${colors.LAVENDER_WHITE};
    display: flex;
    padding: ${rem(95)} ${spacing.paddingMedium};
  `,
  FooterLeftSide: styled.div`
    margin-right: ${rem(90)};
  `,
  List: styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin: 0 ${rem(10)};
  `,
  Link: styled(Link)`
    ${typography.bodyDefault}
    color: ${colors.GREY_3};
    padding: ${rem(21)} 0 0 0;
  `,
  Logo: styled(Link)`
    ${typography.H3};
    color: ${colors.BLACK};
  `,
  ListTitle: styled.p`
    ${typography.subtitleMedium}
    font-weight: 600;
    color: ${colors.BLACK};
  `,
  Text: styled.p`
    ${typography.bodyDefault}
    color: ${colors.GREY_3};
    margin: ${rem(25)} 0 ${rem(4)} 0;
  `,
};

export function Footer() {
  return (
    <footer>
      <S.FooterContent>
        <S.FooterLeftSide>
          <S.Logo href="/">Hekto</S.Logo>
          <Input $variant="DEFAULT" />
          <S.Text>Contact Info</S.Text>
          <S.Link href="https://www.google.com/maps/place/17+Princess+Rd,+London+NW1+8JR,+UK/data=!4m2!3m1!1s0x48761ae62eb25555:0xdb99c791a1c1e6ca?sa=X&ved=1t:242&ictx=111">
            17 Princess Road, London, Greater London NW1 8JR, UK
          </S.Link>
        </S.FooterLeftSide>
        <S.List>
          <S.ListTitle>Categories</S.ListTitle>
          <S.Link href="/">Laptops & Computers</S.Link>
          <S.Link href="/">Cameras & Photography</S.Link>
          <S.Link href="/">Smart Phones & Tablets</S.Link>
          <S.Link href="/">Video Games & Consoles</S.Link>
          <S.Link href="/">Waterproof Headphones</S.Link>
        </S.List>
        <S.List>
          <S.ListTitle>Customer Care</S.ListTitle>
          <S.Link href="/">Account</S.Link>
          <S.Link href="/">Discount</S.Link>
          <S.Link href="/">Returns</S.Link>
          <S.Link href="/">Order History</S.Link>
          <S.Link href="/">Order Tracking</S.Link>
        </S.List>
        <S.List>
          <S.ListTitle>Pages</S.ListTitle>
          <S.Link href="/">Blog</S.Link>
          <S.Link href="/">Browse the Shop</S.Link>
          <S.Link href="/">Category</S.Link>
          <S.Link href="/">Pre-Built Pages</S.Link>
          <S.Link href="/">Visual Composer Elements</S.Link>
          <S.Link href="/">WooCommerce Pages</S.Link>
        </S.List>
      </S.FooterContent>
      <Copyright />
    </footer>
  );
}

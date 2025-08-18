import Input from "@/components/Input";
import { MaxWidthComponent } from "@/components/MaxWIdthComponent";
import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";
import { rem } from "@/utils/remConvert";
import Link from "next/link";
import styled from "styled-components";
import NavLink from "./NavLink";

const S = {
  Container: styled.div`
    background-color: ${colors.WHITE};
    height: ${rem(72)};
  `,
  Logo: styled(Link)`
    display: flex;
    color: ${colors.BLACK};
    ${typography.H4}
  `,
  NavLeftSide: styled.div`
    display: flex;
  `,
  NavLinksContainer: styled.div`
    margin-left: ${rem(80)};
    display: flex;
    align-items: center;
    gap: ${rem(32)};
  `,
};

function NavBar() {
  return (
    <S.Container>
      <MaxWidthComponent>
        <S.NavLeftSide>
          <S.Logo href="/">Hekto</S.Logo>
          <S.NavLinksContainer>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/products">Products</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </S.NavLinksContainer>
        </S.NavLeftSide>
        <Input $variant="COMPLEX" />
      </MaxWidthComponent>
    </S.Container>
  );
}

export default NavBar;

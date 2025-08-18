import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";
import { rem } from "@/utils/remConvert";
import {
  FavoriteBorderOutlined,
  MailOutlineRounded,
  PersonOutline,
  PhoneInTalkOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import Link from "next/link";
import styled from "styled-components";

const S = {
  Container: styled.div`
    background-color: ${colors.TERTIARY};
    height: ${rem(48)};
  `,
  Contacts: styled.div`
    display: flex;
    gap: ${rem(48)};
  `,
  Contact: styled(Link)`
    display: flex;
    align-items: center;
    color: ${colors.GREY_WHITE_SHADE};
    gap: ${rem(4)};
    ${typography.subtitleExtraSmall}
  `,
  Menu: styled.div`
    display: flex;
    align-items: center;
    gap: ${rem(32)};
  `,
  MenuSelect: styled.select`
    background-color: transparent;
    border: none;
    color: ${colors.WHITE};
  `,
  MenuLink: styled(Link)`
    display: flex;
    align-items: center;
    color: ${colors.GREY_WHITE_SHADE};
    gap: ${rem(4)};
    ${typography.subtitleExtraSmall}
  `,
};

function TopBar() {
  return (
    <S.Container>
      <MaxWidthWrapper>
        <S.Contacts>
          <S.Contact href="mailto:mhhasanul@gmail.com">
            <MailOutlineRounded fontSize="small" />
            mhhasanul@gmail.com
          </S.Contact>
          <S.Contact href="tel:(12345)67890">
            <PhoneInTalkOutlined fontSize="small" />
            (12345)67890
          </S.Contact>
        </S.Contacts>
        <S.Menu>
          <S.MenuSelect>
            <option value="english">English</option>
            <option value="romanian">Romana</option>
          </S.MenuSelect>
          <S.MenuSelect>
            <option value="USD">USD</option>
            <option value="MDL">MDL</option>
            <option value="EUR">EUR</option>
          </S.MenuSelect>
          <S.MenuLink href="/">
            Login
            <PersonOutline fontSize="small" />
          </S.MenuLink>
          <S.MenuLink href="/">
            Wishlist
            <FavoriteBorderOutlined fontSize="small" />
          </S.MenuLink>
          <S.MenuLink href="/">
            <ShoppingCartOutlined fontSize="small" />
          </S.MenuLink>
        </S.Menu>
      </MaxWidthWrapper>
    </S.Container>
  );
}

export default TopBar;

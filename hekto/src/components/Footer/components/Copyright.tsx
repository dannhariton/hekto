import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";
import { rem } from "@/utils/remConvert";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import Link from "next/link";
import styled from "styled-components";

const S = {
  Container: styled.div`
    height: ${rem(54)};
    background-color: ${colors.GREY_4};
    color: ${colors.GREY_5};
    ${typography.bodyDefault}
  `,
  Socials: styled.div`
    display: flex;
    flex-direction: row;
    gap: ${rem(11)};
  `,
  SocialLink: styled(Link)`
    height: ${rem(20)};
    width: ${rem(20)};
    background-color: ${colors.BLUE};
    border-radius: 100%;
    color: ${colors.WHITE};
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

function Copyright() {
  return (
    <S.Container>
      <MaxWidthWrapper>
        ©Webecy - All Rights Reserved
        <S.Socials>
          <S.SocialLink href="/">
            <Facebook sx={{ fontSize: 14 }} />
          </S.SocialLink>
          <S.SocialLink href="/">
            <Instagram sx={{ fontSize: 14 }} />
          </S.SocialLink>
          <S.SocialLink href="/">
            <Twitter sx={{ fontSize: 14 }} />
          </S.SocialLink>
        </S.Socials>
      </MaxWidthWrapper>
    </S.Container>
  );
}

export default Copyright;

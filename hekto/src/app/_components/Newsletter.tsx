"use client";
import { Button } from "@/components/Buttons/Button";
import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";
import { rem } from "@/utils/remConvert";
import styled from "styled-components";

const S = {
  Newsletter: styled.section`
    width: 100%;
    background-image: url("/images/newsletter-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: ${rem(60)};
    padding: ${rem(112)} 0;
    max-height: ${rem(472)};
  `,
  Title: styled.h2`
    ${typography.H2}
    color: ${colors.BLACK};
    text-align: center;
  `,
};

export default function Newsletter() {
  return (
    <S.Newsletter>
      <S.Title>
        Get Latest Update By Subscribe
        <br /> 0ur Newsletter
      </S.Title>
      <Button $variant="DEFAULT">Subscribe</Button>
    </S.Newsletter>
  );
}

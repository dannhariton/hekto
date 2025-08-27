"use client";
import { Button } from "@/components/Buttons/Button";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { Colors, colors } from "@/styles/colors";
import { typography } from "@/styles/typography";
import { rem } from "@/utils/remConvert";
import Image from "next/image";

import styled from "styled-components";

const S = {
  Unique: styled.section`
    margin-top: ${rem(100)};
    width: 100%;
    background-color: ${colors.GREY_6};
    display: flex;
    align-items: center;
  `,
  Content: styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rem(48)};
    padding: ${rem(100)} ${rem(60)} ${rem(116)} 0;
  `,
  Title: styled.h3`
    ${typography.H3}
    color: ${colors.BLACK};
  `,
  ItemDetails: styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rem(16)};
  `,
  Detail: styled.div`
    display: flex;
    align-items: center;
    ${typography.bodyDefault}
    color: ${colors.GREY_3};
  `,
  CTA: styled.div`
    display: flex;
    gap: ${rem(16)};
  `,
  Name: styled.p`
    color: ${colors.BLACK};
  `,
  Price: styled.p`
    color: ${colors.BLACK};
  `,
  BulletPoint: styled.div<{ $color: Colors }>`
    display: inline-block;
    width: ${rem(11)};
    height: ${rem(11)};
    border-radius: 100%;
    background-color: ${({ $color }) => colors[$color]};
    margin-right: ${rem(16)};
  `,

  ImageContainer: styled.div`
    background: url("/decor.svg") no-repeat center;
    width: 55%;
    margin-right: ${rem(32)};
    aspect-ratio: 1.17/1;
  `,
  Image: styled(Image)`
    width: 100%;
    height: 100%;
  `,
};

export default function Unique() {
  return (
    <S.Unique>
      <MaxWidthWrapper>
        <S.ImageContainer>
          <S.Image
            src="/images/chair.png"
            alt="chair image"
            width={540}
            height={462}
          ></S.Image>
        </S.ImageContainer>
        <S.Content>
          <S.Title>Unique Features Of leatest & Trending Poducts</S.Title>
          <S.ItemDetails>
            <S.Detail>
              <S.BulletPoint $color="PRIMARY" />
              All frames constructed with hardwood solids and laminates
            </S.Detail>
            <S.Detail>
              <S.BulletPoint $color="SUCCESS" />
              Reinforced with double wood dowels, glue, screw - nails corner
            </S.Detail>
            <S.Detail>
              <S.BulletPoint $color="BLUE" />
              Arms, backs and seats are structurally reinforced
            </S.Detail>
          </S.ItemDetails>
          <S.CTA>
            <Button $variant="DEFAULT">Add To Cart</Button>
            <div>
              <S.Name>B&B Italian Sofa</S.Name>
              <S.Price>$32.00</S.Price>
            </div>
          </S.CTA>
        </S.Content>
      </MaxWidthWrapper>
    </S.Unique>
  );
}

import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";
import { rem } from "@/utils/remConvert";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import styled from "styled-components";

const S = {
  BlogCard: styled(Link)`
    width: (100% - ${rem(32)} * 2)/ 3;
    transition: transform 0.3s;
    border-radius: ${rem(8)};

    box-shadow: ${rem(8, 24, 32, -16)} rgba(${colors.BLACK_RGB}, 0.15);

    &:hover,
    &:focus {
      transform: translateY(${rem(-24)});
      box-shadow: ${rem(8, 64, 80, -16)} rgba(${colors.BLACK_RGB}, 0.15);
    }
  `,
  BlogImageContainer: styled.div`
    width: 100%;
    max-height: ${rem(255)};
    aspect-ratio: 1.6/1;

    img {
      width: 100%;
      height: 100%;
      border-radius: ${rem(8)};
      object-fit: cover;
    }
  `,
  MiscellaneousContainer: styled.div`
    display: flex;
    gap: ${rem(64)};
    margin: ${rem(16)} 0 ${rem(24)} ${rem(16)};
  `,
  MiscellaneousItem: styled.div`
    ${typography.labelSmall};
    color: ${colors.GREY_3};
  `,
  Title: styled.p`
    margin: 0 0 ${rem(16)} ${rem(16)};
    ${typography.subtitleExtraSmall};
    color: ${colors.BLACK};
  `,
  Description: styled.p`
    margin-left: ${rem(16)};
    ${typography.bodyDefault};
    color: ${colors.GREY_3};
  `,
  Button: styled.button`
    ${typography.labelBold};
    color: ${colors.PRIMARY};
    margin: ${rem(32)} 0 ${rem(34)} ${rem(16)};

    &:hover,
    &:focus {
      color: ${colors.PRIMARY_DARK};
    }
  `,
};

export default function BlogCard({ image }: { image: StaticImageData }) {
  return (
    <S.BlogCard href="/">
      <S.BlogImageContainer>
        <Image src={image} alt="blog image" />
      </S.BlogImageContainer>
      <S.MiscellaneousContainer>
        <S.MiscellaneousItem>John Doe</S.MiscellaneousItem>
        <S.MiscellaneousItem>21 august 2023</S.MiscellaneousItem>
      </S.MiscellaneousContainer>
      <S.Title>Top essential Trends in 2023</S.Title>
      <S.Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit
        hendrerit ex.
      </S.Description>
      <S.Button>Read More</S.Button>
    </S.BlogCard>
  );
}

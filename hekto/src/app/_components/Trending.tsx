"use client";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";
import { rem } from "@/utils/remConvert";
import styled from "styled-components";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ProductCard } from "@/components/ProductCard";
import { testProduct } from "../components/test-data";

const S = {
  Header: styled.h2`
    margin-top: ${rem(100)};
    text-align: center;
    color: ${colors.BLACK};
    ${typography.H2}
  `,
  TrendingItems: styled.div`
    padding-top: ${rem(24)};
    display: flex;
    gap: ${rem(32)};
    width: 100%;
  `,
};

export default function Trending() {
  return (
    <section>
      <S.Header>Trending Products</S.Header>
      <MaxWidthWrapper>
        <S.TrendingItems>
          {[1, 2, 3, 4].map((item) => (
            <ProductCard key={item} $variant="TRENDING" product={testProduct} />
          ))}
        </S.TrendingItems>
      </MaxWidthWrapper>
    </section>
  );
}

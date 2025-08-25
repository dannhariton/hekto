"use client";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";
import { rem } from "@/utils/remConvert";
import styled from "styled-components";
import {
  A11y,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import { ProductCard } from "@/components/ProductCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { testProduct } from "../components/test-data";

const S = {
  Header: styled.h2`
    margin-top: ${rem(100)};
    text-align: center;
    color: ${colors.BLACK};
    ${typography.H2}
  `,
  Categories: styled.div`
    padding-top: ${rem(72)};
    display: flex;
    width: 100%;
  `,
  StyledSwiperContainer: styled(Swiper)`
    .swiper-pagination-bullet {
      background-color: ${colors.WHITE};
      opacity: 1;
      width: ${rem(8)};
      height: ${rem(8)};
      margin: 0 ${rem(5)};
      transition: all 0.3s ease;
      border: ${rem(1)} solid ${colors.PRIMARY};
    }

    .swiper-pagination-bullet-active {
      background-color: ${colors.PRIMARY};
      opacity: 1;
      width: ${rem(8)};
      height: ${rem(8)};
    }

    .swiper-pagination {
      position: absolute;
      bottom: ${rem(0)};
      left: 0;
      width: 100%;
      text-align: center;
    }
  `,
};

export default function Categories() {
  return (
    <section>
      <S.Header>Top Categories</S.Header>
      <MaxWidthWrapper>
        <S.Categories>
          <S.StyledSwiperContainer
            modules={[Navigation, Pagination, A11y, Keyboard, Mousewheel]}
            spaceBetween={32}
            mousewheel={true}
            slidesPerView={4}
            navigation={true}
            keyboard={{
              enabled: true,
            }}
            pagination={{ clickable: true }}
          >
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <SwiperSlide key={item}>
                <ProductCard $variant="CATEGORY" product={testProduct} />
              </SwiperSlide>
            ))}
          </S.StyledSwiperContainer>
        </S.Categories>
      </MaxWidthWrapper>
    </section>
  );
}

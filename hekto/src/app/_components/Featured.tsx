"use client";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";
import { rem } from "@/utils/remConvert";
import styled from "styled-components";
import { A11y, Mousewheel, Navigation, Pagination } from "swiper/modules";

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
  Featured: styled.div`
    display: flex;
    width: 100%;
  `,
  StyledSwiperContainer: styled(Swiper)`
    padding: ${rem(72)} 0 ${rem(124)};

    .swiper-slide {
      display: flex;
      gap: ${rem(32)};
    }

    .swiper-pagination-bullet {
      opacity: 1;
      width: ${rem(16)};
      height: ${rem(4)};
      border-radius: ${rem(10)};
      transition: all 0.3s ease;
      background-color: ${colors.PRIMARY_VERY_LIGHT};
    }

    .swiper-pagination-bullet-active {
      background-color: ${colors.PRIMARY};
      opacity: 1;
      width: ${rem(24)};
      height: ${rem(4)};
    }

    .swiper-pagination {
      position: absolute;
      bottom: ${rem(72)};
      left: 0;
      width: 100%;
      text-align: center;
    }
  `,
};

export default function Featured() {
  return (
    <section>
      <S.Header>Featured Products</S.Header>
      <MaxWidthWrapper>
        <S.Featured>
          <S.StyledSwiperContainer
            modules={[Navigation, Pagination, A11y, Mousewheel]}
            spaceBetween={32}
            mousewheel={true}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
          >
            {[1, 2, 3, 4].map((slide) => (
              <SwiperSlide key={slide}>
                {[1, 2, 3, 4].map((card) => (
                  <ProductCard
                    key={card}
                    $variant="FEATURED"
                    product={testProduct}
                  />
                ))}
              </SwiperSlide>
            ))}
          </S.StyledSwiperContainer>
        </S.Featured>
      </MaxWidthWrapper>
    </section>
  );
}

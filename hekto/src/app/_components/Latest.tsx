"use client";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";
import { rem } from "@/utils/remConvert";
import styled from "styled-components";
import {
  A11y,
  Grid,
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
  LatestItems: styled.div`
    padding-top: ${rem(24)};
    display: flex;
    width: 100%;
  `,
  StyledSwiper: styled(Swiper)`
    .swiper-slide {
      margin: ${rem(64)} 0;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      align-content: start;
      grid-column-gap: ${rem(32)};
      grid-row-gap: ${rem(32)};
    }

    .swiper-pagination {
      height: max-content;
      top: 0;
      text-align: center;
      display: flex;
      justify-content: center;
      gap: ${rem(24)};
    }

    .swiper-pagination-bullet {
      ${typography.bodyLarge}
      background: none;
      opacity: 1;
      width: auto;
      color: ${colors.BLACK};
      cursor: pointer;
    }

    .swiper-pagination-bullet-active {
      color: ${colors.PRIMARY};
    }
  `,
};

export default function Latest() {
  const slideTitles = [
    "New Arrival",
    "Best Seller",
    "Featured",
    "Special Offer",
  ];

  const customRenderBullet = (index: number, className: string) => {
    return `<span class="${className}">${slideTitles[index]}</span>`;
  };

  return (
    <section>
      <S.Header>Latest Products</S.Header>
      <MaxWidthWrapper>
        <S.LatestItems>
          <S.StyledSwiper
            modules={[Navigation, Pagination, A11y, Mousewheel, Keyboard, Grid]}
            mousewheel={true}
            slidesPerView={1}
            slidesPerGroup={1}
            navigation={true}
            keyboard
            pagination={{
              clickable: true,

              renderBullet: customRenderBullet,
            }}
          >
            {[1, 2, 3, 4].map((slide) => (
              <SwiperSlide key={slide}>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <ProductCard
                    key={item}
                    $variant="LATEST"
                    product={testProduct}
                  />
                ))}
              </SwiperSlide>
            ))}
          </S.StyledSwiper>
        </S.LatestItems>
      </MaxWidthWrapper>
    </section>
  );
}

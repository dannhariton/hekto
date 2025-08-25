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

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import DiscountItem from "@/components/DiscountItem/DiscountItem";

const S = {
  Header: styled.h2`
    margin-top: ${rem(100)};
    text-align: center;
    color: ${colors.BLACK};
    ${typography.H2}
  `,
  DiscountedItems: styled.div`
    padding-top: ${rem(24)};
    display: flex;
    width: 100%;
  `,
  StyledSwiper: styled(Swiper)`
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

export default function Discount() {
  const slideTitles = ["Headphones", "Laptop", "Other"]; // Example titles

  const customRenderBullet = (index: number, className: string) => {
    return `<span class="${className}">${slideTitles[index]}</span>`;
  };

  return (
    <section>
      <S.Header>Discount Item</S.Header>
      <MaxWidthWrapper>
        <S.DiscountedItems>
          <S.StyledSwiper
            modules={[Navigation, Pagination, A11y, Mousewheel, Keyboard]}
            spaceBetween={32}
            mousewheel={true}
            slidesPerView={1}
            navigation={true}
            keyboard
            pagination={{
              clickable: true,
              renderBullet: customRenderBullet,
            }}
          >
            {[1, 2, 3].map((item) => (
              <SwiperSlide key={item}>
                <DiscountItem />
              </SwiperSlide>
            ))}
          </S.StyledSwiper>
        </S.DiscountedItems>
      </MaxWidthWrapper>
    </section>
  );
}

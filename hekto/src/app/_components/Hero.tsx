"use client";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { colors } from "@/styles/colors";
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

import HeroSlide from "@/components/HeroSlide/HeroSlide";

const S = {
  Section: styled.div`
    background-color: ${colors.GREY_6};
  `,
  StyledSwiper: styled(Swiper)`
    .swiper-pagination-bullet {
      opacity: 1;
      width: ${rem(12)};
      height: ${rem(12)};
      border-radius: 0;
      transition: all 0.3s ease;
      transform: rotate(45deg);
      background-color: transparent;
      border: ${rem(1)} solid ${colors.PRIMARY};

      &:not(:last-child) {
        margin-right: ${rem(16)};
      }
    }

    .swiper-pagination-bullet-active {
      background-color: ${colors.PRIMARY};
      opacity: 1;
      width: ${rem(12)};
      height: ${rem(12)};
    }

    .swiper-pagination {
      position: absolute;
      bottom: ${rem(45)};
      text-align: center;
    }
  `,
};

export default function Hero() {
  return (
    <S.Section>
      <MaxWidthWrapper>
        <S.StyledSwiper
          modules={[Navigation, Pagination, A11y, Mousewheel, Keyboard]}
          spaceBetween={32}
          mousewheel={true}
          slidesPerView={1}
          navigation={true}
          keyboard
          pagination={{
            clickable: true,
          }}
        >
          {[1, 2, 3].map((item) => (
            <SwiperSlide key={item}>
              <HeroSlide />
            </SwiperSlide>
          ))}
        </S.StyledSwiper>
      </MaxWidthWrapper>
    </S.Section>
  );
}

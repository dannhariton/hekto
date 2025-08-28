"use client";
import { FilterAccordion } from "@/components/FilterAccordion";
import { media } from "@/utils/media";
import { rem } from "@/utils/remConvert";
import styled from "styled-components";
import { data } from "../data";

const S = {
  FiltersContainer: styled.aside`
    display: none;
    flex-shrink: 0;

    @media ${media.greaterThan("md")} {
      width: ${rem(180)};
      display: block;
    }

    @media ${media.greaterThan("lg")} {
      width: ${rem(304)};
      display: block;
    }
  `,
};

function ProductsFilters() {
  return (
    <S.FiltersContainer>
      <FilterAccordion filterData={data.brand} />
      <FilterAccordion filterData={data.category} />
      <FilterAccordion filterData={data.colors} />
      <FilterAccordion filterData={data.discountPercentage} />
      <FilterAccordion filterData={data.price} />
      <FilterAccordion filterData={data.rating} />
    </S.FiltersContainer>
  );
}

export default ProductsFilters;

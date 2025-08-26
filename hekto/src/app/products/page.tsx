"use client";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";
import { rem } from "@/utils/remConvert";
import styled from "styled-components";
import ProductsFilters from "./_components/ProductsFilters";

const S = {
  Container: styled.div``,
  Header: styled.h1`
    ${typography.H1}
    color: ${colors.BLACK};
    text-align: center;
    padding: ${rem(60)} 0 ${rem(80)};
  `,
  Content: styled.div`
    display: flex;
    margin: ${rem(32)} 0;
    gap: ${rem(32)};
    align-items: flex-start;
  `,
};

function ProductsPage() {
  return (
    <MaxWidthWrapper>
      <S.Container>
        <S.Header>Products</S.Header>
        <S.Content>
          <ProductsFilters />
        </S.Content>
      </S.Container>
    </MaxWidthWrapper>
  );
}

export default ProductsPage;

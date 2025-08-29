"use client";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";
import { rem } from "@/utils/remConvert";
import { useState } from "react";
import styled from "styled-components";
import GroupingFilters from "./_components/GroupingFilters";
import ProductsFilters from "./_components/ProductsFilters";
import ProductsList from "./_components/ProductsList";

const S = {
  Container: styled.div`
    width: 100%;
  `,
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
  const [toggleIsList, setToggleIsList] = useState(true);

  function handleSetToggleIsList() {
    setToggleIsList((prev) => !prev);
  }

  return (
    <MaxWidthWrapper>
      <S.Container>
        <S.Header>Products</S.Header>
        <GroupingFilters
          toggleIsList={toggleIsList}
          setToggleIsList={handleSetToggleIsList}
        />
        <S.Content>
          <ProductsFilters />
          <ProductsList isList={toggleIsList} />
        </S.Content>
      </S.Container>
    </MaxWidthWrapper>
  );
}

export default ProductsPage;

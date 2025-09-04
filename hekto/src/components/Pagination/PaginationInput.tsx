"use client";
import { useProductsContext } from "@/context/ProductsContext";
import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";
import { rem } from "@/utils/remConvert";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import styled from "styled-components";

const S = {
  PaginationContainer: styled.div`
    height: ${rem(40)};
    border: ${rem(1)} solid ${colors.GREY_2};
    padding: ${rem(0, 10)};
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0.5rem;
    background-color: ${colors.WHITE};
  `,
  Page: styled.p`
    color: ${colors.BLACK};
    ${typography.bodySmall}
  `,
  LastPageButton: styled(Link)`
    color: ${colors.BLACK};
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  NextPageButton: styled(Link)`
    color: ${colors.BLACK};
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

type LinkHeaders = {
  prev?: string;
  next?: string;
  [key: string]: string | undefined;
};

function PaginationInput() {
  const { linkHeaders } = useProductsContext();
  const current: LinkHeaders = (linkHeaders.current ?? {}) as LinkHeaders;
  const searchParams = useSearchParams();
  const page = searchParams.get("_page") || "1";
  console.log(page);

  return (
    <S.PaginationContainer key={page}>
      <S.LastPageButton href={current.prev ?? "#"}>
        <RemoveIcon fontSize="small" />
      </S.LastPageButton>
      <S.Page>{page}</S.Page>
      <S.NextPageButton href={current.next ?? "#"}>
        <AddIcon fontSize="small" />
      </S.NextPageButton>
    </S.PaginationContainer>
  );
}

export default PaginationInput;

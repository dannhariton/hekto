import { useFetchProducts } from "@/app/hooks/useFetchProducts";
import { ProductCard } from "@/components/ProductCard";
import { Product } from "@/components/ProductCard/types";
import { media } from "@/utils/media";
import { rem } from "@/utils/remConvert";
import styled from "styled-components";

const S = {
  ProductsContainer: styled.div`
    display: flex;
    flex-wrap: wrap;

    gap: ${rem(24)};

    @media ${media.greaterThan("md")} {
      gap: ${rem(16)};
    }

    @media ${media.greaterThan("lg")} {
      gap: ${rem(24)};
    }
  `,
};

function ProductsList({ isList }: { isList: boolean }) {
  const { data, isPending, error } = useFetchProducts();

  if (isPending) return <>Loading</>;

  if (error) return <>{error.message}</>;

  return (
    <S.ProductsContainer>
      {data.map((product: Product) => (
        <ProductCard
          key={product.id}
          variant={isList ? "GRID" : "LIST"}
          product={product}
        />
      ))}
    </S.ProductsContainer>
  );
}

export default ProductsList;

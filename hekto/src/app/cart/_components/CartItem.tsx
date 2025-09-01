import { useFetchProduct } from "@/app/hooks/useFetchProduct";
import { Product, useCartContext } from "@/contexts/CartContext";
import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";
import { rem } from "@/utils/remConvert";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import Image from "next/image";
import styled from "styled-components";

const S = {
  Item: styled.div`
    display: flex;
    align-items: center;
    color: ${colors.BLACK};
  `,
  ImageContainer: styled.div`
    width: 24%;
    aspect-ratio: 1.5/1;
    margin-right: ${rem(24)};
  `,
  Image: styled(Image)`
    width: 100%;
    height: 100%;
    border-radius: ${rem(8)};
  `,
  ProductDetails: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  `,
  PriceControl: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 24%;
    gap: ${rem(16)};
  `,
  Title: styled.p`
    ${typography.subtitleMedium}
    margin-bottom: ${rem(8)};
  `,
  Price: styled.p`
    ${typography.labelDefault}
  `,
  QuantityContainer: styled.div`
    display: flex;
    align-items: start;
    max-width: ${rem(120)};
    gap: ${rem(16)};
    border-radius: ${rem(8)};
    padding: ${rem(6)} ${rem(15)};
    border: ${rem(1)} solid ${colors.GREY_2};
  `,
  AddButton: styled.button`
    color: ${colors.BLACK};
  `,
  Quantity: styled.span`
    ${typography.bodySmall}
  `,
  SubtractButton: styled.button`
    color: ${colors.BLACK};
  `,
  PriceBasedOnQuantity: styled.p`
    ${typography.labelDefault}
  `,
};

export default function CartItem({ item }: { item: Product }) {
  const { data, isPending, error } = useFetchProduct(item.id);
  const { addToCart, subtractQuantityFromProduct } = useCartContext();

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const product = data?.[0];
  if (!product) return <div>Product not found</div>;

  const handleSubtract = (id: string) => () => {
    subtractQuantityFromProduct(id);
  };

  const handleAdd = (id: string) => () => {
    addToCart(id, product.price);
  };

  return (
    <S.Item>
      <S.ImageContainer>
        <S.Image
          src={product.thumbnail}
          alt={product.name}
          width={300}
          height={300}
        />
      </S.ImageContainer>
      <S.ProductDetails>
        <div>
          <S.Title>{product.name}</S.Title>
          <S.Price>${product.price}</S.Price>
        </div>
        <S.PriceControl>
          <S.QuantityContainer>
            <S.SubtractButton onClick={handleSubtract(item.id)}>
              <RemoveIcon fontSize="small" />
            </S.SubtractButton>
            <S.Quantity>{item.quantity}</S.Quantity>
            <S.AddButton onClick={handleAdd(item.id)}>
              <AddIcon fontSize="small" />
            </S.AddButton>
          </S.QuantityContainer>
          <S.PriceBasedOnQuantity>
            ${(product.price * item.quantity).toFixed(2)}
          </S.PriceBasedOnQuantity>
        </S.PriceControl>
      </S.ProductDetails>
    </S.Item>
  );
}

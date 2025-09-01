import { Button } from "@/components/Buttons/Button";
import { useCartContext } from "@/contexts/CartContext";
import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";
import { rem } from "@/utils/remConvert";

import styled from "styled-components";

const S = {
  Checkout: styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Content: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: ${colors.GREY_1};
    padding: ${rem(24)};
    gap: ${rem(16)};
    color: ${colors.BLACK};
  `,
  Subtotal: styled.p`
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-bottom: ${rem(1)} solid ${colors.GREY_2};
    padding-bottom: ${rem(18)};
    ${typography.bodyBold}
  `,
  Total: styled.p`
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-bottom: ${rem(1)} solid ${colors.GREY_2};
    padding-bottom: ${rem(18)};
    ${typography.bodyBold}
  `,
  Shipping: styled.p`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: ${rem(12)};
    ${typography.bodySmall}
    color: ${colors.GREY_3};
  `,
  ClearButton: styled(Button)`
    color: ${colors.PRIMARY};
    background-color: ${colors.WHITE};
    ${typography.bodyDefault}
    margin-top: ${rem(12)};

    &:hover {
      background-color: ${colors.WHITE};
      color: ${colors.PRIMARY_DARK};
    }
  `,
};

export default function Checkout({ totalPrice }: { totalPrice: number }) {
  const { clearCart } = useCartContext();

  return (
    <S.Checkout>
      <S.Content>
        <S.Subtotal>
          Subtotal: <span>${+totalPrice.toFixed(2)}</span>
        </S.Subtotal>
        <S.Total>
          Total: <span>${(+totalPrice.toFixed(2) + 100).toFixed(2)}</span>
        </S.Total>
        <S.Shipping>
          Shipping:
          <span>${100}</span>
        </S.Shipping>
        <Button onClick={clearCart} $variant="DEFAULT">
          Proceed to Checkout
        </Button>
      </S.Content>
      <S.ClearButton onClick={clearCart} $variant="DEFAULT">
        Clear Cart
      </S.ClearButton>
    </S.Checkout>
  );
}

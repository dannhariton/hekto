import { colors } from "@/styles/colors";
import { rem } from "@/utils/remConvert";
import styled, { css, RuleSet } from "styled-components";

type Variant = "DIAMOND" | "LINE" | "CIRCLE";
type Styles = Record<Variant, (props: { $filled?: boolean }) => RuleSet>;

const styles: Styles = {
  DIAMOND: ({ $filled }) => css`
    width: ${rem(12)};
    height: ${rem(12)};
    margin-right: ${rem(16)};
    transform: rotate(45deg);
    background-color: ${!$filled ? "transparent" : colors.PRIMARY};
    border: ${rem(1)} solid ${colors.PRIMARY};
  `,
  LINE: ({ $filled }) => css`
    width: ${$filled ? rem(24) : rem(16)};
    height: ${rem(4)};
    margin-right: ${rem(8)};
    border-radius: ${rem(10)};
    background-color: ${!$filled ? colors.PRIMARY_VERY_LIGHT : colors.PRIMARY};
  `,
  CIRCLE: ({ $filled }) => css`
    width: ${rem(8)};
    height: ${rem(8)};
    margin-right: ${rem(16)};
    border-radius: 100%;
    background-color: ${!$filled ? "transparent" : colors.PRIMARY};
    border: ${rem(1)} solid ${colors.PRIMARY};
  `,
};

export const PaginationIcon = styled.button<{
  variant: Variant;
  $filled?: boolean;
}>`
  ${({ variant, ...props }) => styles[variant](props)};
`;

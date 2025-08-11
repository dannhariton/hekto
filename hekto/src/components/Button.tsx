import { typography } from "@/styles/typography";
import { rem } from "@/utils/remConvert";
import styled, { css, RuleSet } from "styled-components";
import { colors } from "../styles/colors";

type Variant = "DEFAULT" | "ICON" | "SUCCESS";
type Styles = Record<Variant, RuleSet>;

const styles: Styles = {
  DEFAULT: css`
    background-color: ${colors.PRIMARY};
    padding: ${rem(16, 40)};
    border-radius: ${rem(8)};

    &:hover {
      background-color: ${colors.PRIMARY_DARK};
    }
  `,
  ICON: css`
    background-color: ${colors.PRIMARY};
    padding: ${rem(6, 14)};
    border-radius: ${rem(6)};

    &:hover {
      background-color: ${colors.PRIMARY_DARK};
    }
  `,
  SUCCESS: css`
    background-color: ${colors.SUCCESS};
    padding: ${rem(11, 16)};
    border-radius: ${rem(6)};
    font-size: ${rem(14)};

    &:hover {
      background-color: ${colors.SUCCESS_DARK};
    }
  `,
};

export const Button = styled.button<{
  variant: Variant;
}>`
  color: ${colors.WHITE};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  ${typography.subtitleExtraSmall}

  ${({ variant }) => styles[variant]}
`;

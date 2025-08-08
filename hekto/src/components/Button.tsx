import { typography } from "@/styles/typography";
import styled from "styled-components";
import { colors } from "../styles/colors";

export const S = {
  Button: styled.button<{
    variant: keyof typeof colors;
    padding: string;
    radius: string;
    font: keyof typeof typography;
  }>`
    background-color: ${(props) => colors[props.variant]};
    color: ${colors.WHITE};
    padding: ${(props) => props.padding};
    border-radius: ${(props) => props.radius};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    ${(props) => typography[props.font]}

    &:hover {
      background-color: ${(props) => {
        const darkVariant = `${props.variant}_DARK`;

        if (darkVariant in colors) {
          return colors[darkVariant as keyof typeof colors];
        }

        return colors.PRIMARY_DARK;
      }};
    }
  `,
};

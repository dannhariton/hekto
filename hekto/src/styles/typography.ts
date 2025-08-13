import { rem } from "@/utils/remConvert";
import { css } from "styled-components";

export const typography = {
  H1: css`
    font-weight: 700;
    font-size: ${rem(52)};
    letter-spacing: 1.5%;
  `,
  H2: css`
    font-weight: 700;
    font-size: ${rem(44)};
    letter-spacing: 1.5%;
  `,
  H3: css`
    font-weight: 700;
    font-size: ${rem(36)};
    letter-spacing: 1.5%;
  `,
  H4: css`
    font-weight: 700;
    font-size: ${rem(28)};
    letter-spacing: 1.5%;
  `,
  subtitleExtraSmall: css`
    font-weight: 600;
    font-size: ${rem(16)};
  `,
  subtitleSmall: css`
    font-weight: 700;
    font-size: ${rem(20)};
  `,
  subtitleMedium: css`
    font-weight: 700;
    font-size: ${rem(22)};
  `,
  subtitleLarge: css`
    font-weight: 700;
    font-size: ${rem(26)};
  `,
  bodySmall: css`
    font-weight: 400;
    font-size: ${rem(14)};
  `,
  bodyLarge: css`
    font-weight: 400;
    font-size: ${rem(18)};
  `,
  bodyDefault: css`
    font-weight: 400;
    font-size: ${rem(16)};
  `,
  bodyBold: css`
    font-weight: 700;
    font-size: ${rem(16)};
  `,
  labelDefault: css`
    font-weight: 400;
    font-size: ${rem(16)};
  `,
  labelBold: css`
    font-weight: 700;
    font-size: ${rem(16)};
  `,
  labelSmall: css`
    font-weight: 400;
    font-size: ${rem(14)};
  `,
};

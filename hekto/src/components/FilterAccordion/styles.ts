import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import styled from "styled-components";

import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";
import { rem } from "@/utils/remConvert";

export const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Accordion: styled(Accordion)`
    border: 1px solid ${colors.GREY_2};
    box-shadow: ${rem(8, 24, 32, -16)} rgba(${colors.BLACK_RGB}, 0.15);
  `,
  AccordionSummary: styled(AccordionSummary)`
    color: ${colors.BLACK};
    ${typography.subtitleSmall};
  `,
  AccordionDetails: styled(AccordionDetails)`
    color: ${colors.GREY_3};
    ${typography.bodyDefault};
    max-height: ${rem(400)};
    overflow: scroll;
  `,
};

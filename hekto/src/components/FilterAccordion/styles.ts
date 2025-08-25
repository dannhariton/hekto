import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  FormControlLabel,
  FormGroup,
  RadioGroup,
} from "@mui/material";
import styled, { css, RuleSet } from "styled-components";

import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";
import { rem } from "@/utils/remConvert";
import { Filter } from "./types";

type Styles = Record<Filter, RuleSet>;

export const S = {
  Container: styled.div<{ $type: Filter }>`
    display: flex;
    flex-direction: column;
    ${({ $type }) => styles[$type]}
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
  RadioGroup: styled(RadioGroup)``,
  FormGroup: styled(FormGroup)``,
  FormControlLabel: styled(FormControlLabel)``,
  Box: styled(Box)``,
};

const styles: Styles = {
  "MULTI-SELECT": css``,
  "SINGLE-SELECT": css``,
  RANGE: css``,
  RATING: css``,
};

import { colors } from "@/styles/colors";

import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
} from "@mui/material";
import { ReactNode } from "react";
import Stars from "../ProductCard/components/Stars";
import RangeSlider from "./PriceRange";
import { S } from "./styles";
import { Filter, FilterData } from "./types";

const content: Record<Filter, (filterData: FilterData) => ReactNode> = {
  "SINGLE-SELECT": ({ label, values }) => (
    <RadioGroup aria-labelledby="product-brand-group-label">
      {values.map((value) => (
        <FormControlLabel
          key={`${label}-${value}`}
          value={value}
          control={
            <Radio
              sx={{
                color: colors.INFO_LIGHT,
                "&.Mui-checked": {
                  color: colors.INFO,
                },
              }}
            />
          }
          label={value}
        />
      ))}
    </RadioGroup>
  ),
  "MULTI-SELECT": ({ values, label }) => (
    <FormGroup aria-labelledby="product-brand-group-label">
      {values.map((value) => (
        <FormControlLabel
          key={`${label}-${value}`}
          value={value}
          control={
            <Checkbox
              sx={{
                color: colors.INFO_LIGHT,
                "&.Mui-checked": {
                  color: colors.INFO,
                },
              }}
            />
          }
          label={value}
        />
      ))}
    </FormGroup>
  ),
  RANGE: ({ values }) => (
    <Box sx={{ width: 240, marginTop: 3, zIndex: 12 }}>
      <RangeSlider range={values as number[]} />
    </Box>
  ),
  RATING: ({ values, label }) => (
    <RadioGroup aria-labelledby="product-brand-group-label">
      {values.toReversed().map((value) => (
        <FormControlLabel
          key={`${label}-${value}`}
          value={value}
          control={
            <Radio
              sx={{
                color: colors.SECONDARY,
                "&.Mui-checked": {
                  color: colors.SECONDARY,
                },
              }}
            />
          }
          label={<Stars rating={+value} />}
        />
      ))}
    </RadioGroup>
  ),
};

export function FilterAccordion({ filterData }: { filterData: FilterData }) {
  const type = filterData.type.toUpperCase() as Filter;

  return (
    <S.Container $type={type}>
      <S.Accordion>
        <S.AccordionSummary>{filterData.label}</S.AccordionSummary>
        <S.AccordionDetails>
          <FormControl>{content[type](filterData)}</FormControl>
        </S.AccordionDetails>
      </S.Accordion>
    </S.Container>
  );
}

"use client";
import { colors } from "@/styles/colors";

import { ProductFilters, SetFilters } from "@/hooks/types";
import useProductFilters from "@/hooks/useProductsFilters";
import { camelCase, lowerCase } from "@/utils/textFormat";
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
import Stars from "../Stars";
import RangeSlider from "./PriceRange";
import { S } from "./styles";
import { Filter, FilterData } from "./types";

const content: Record<
  Filter,
  (
    filterData: FilterData,
    filters: ProductFilters,
    setFilters: SetFilters
  ) => ReactNode
> = {
  "SINGLE-SELECT": ({ label, values }, filters, setFilters) => (
    <RadioGroup aria-labelledby="product-brand-group-label">
      {values.map((value) => {
        if (value === 0) return;
        const filterKey = camelCase(label) as keyof ProductFilters;
        return (
          <FormControlLabel
            key={`${label}-${value}`}
            value={value}
            onClick={() => setFilters({ [camelCase(label)]: value }, "single")}
            control={
              <Radio
                sx={{
                  color: colors.INFO_LIGHT,
                  "&.Mui-checked": {
                    color: colors.INFO,
                  },
                }}
                checked={+filters[filterKey] === value}
              />
            }
            label={value}
          />
        );
      })}
    </RadioGroup>
  ),
  "MULTI-SELECT": ({ values, label }, filters, setFilters) => (
    <FormGroup aria-labelledby="product-brand-group-label">
      {values.map((value) => {
        const filterKey = camelCase(label) as keyof ProductFilters;
        return (
          <FormControlLabel
            key={`${label}-${value}`}
            value={value}
            onClick={() =>
              setFilters(
                { [`${camelCase(label)}`]: value },
                "multiple",
                camelCase(label) === "colors"
              )
            }
            control={
              <Checkbox
                sx={{
                  color: colors.INFO_LIGHT,
                  "&.Mui-checked": {
                    color: colors.INFO,
                  },
                }}
                checked={filters[filterKey].includes(
                  lowerCase(value as string)
                )}
              />
            }
            label={value}
          />
        );
      })}
    </FormGroup>
  ),
  RANGE: ({ values }, filters) => {
    const priceRange = [...values];
    if (filters.max) priceRange[1] = +filters.max;
    if (filters.min) priceRange[0] = +filters.min;
    return (
      <Box sx={{ width: 240, marginTop: 3, zIndex: 12 }}>
        <RangeSlider
          range={priceRange as number[]}
          defaultValues={values as number[]}
        />
      </Box>
    );
  },
  RATING: ({ values, label }, filters, setFilters) => (
    <RadioGroup aria-labelledby="product-brand-group-label">
      {values.toReversed().map((value) => {
        const filterKey = camelCase(label) as keyof ProductFilters;
        return (
          <FormControlLabel
            key={`${label}-${value}`}
            value={value}
            onClick={() =>
              setFilters(
                { [camelCase(label)]: value },
                "single",
                false,
                false,
                true
              )
            }
            control={
              <Radio
                sx={{
                  color: colors.SECONDARY,
                  "&.Mui-checked": {
                    color: colors.SECONDARY,
                  },
                }}
                checked={+filters[filterKey] === value}
              />
            }
            label={<Stars rating={+value} />}
          />
        );
      })}
    </RadioGroup>
  ),
};

export function FilterAccordion({ filterData }: { filterData: FilterData }) {
  const type = filterData.type.toUpperCase() as Filter;
  const { filters, setFilters } = useProductFilters();

  return (
    <S.Container>
      <S.Accordion>
        <S.AccordionSummary>{filterData.label}</S.AccordionSummary>
        <S.AccordionDetails>
          <FormControl>
            {content[type](filterData, filters, setFilters)}
          </FormControl>
        </S.AccordionDetails>
      </S.Accordion>
    </S.Container>
  );
}

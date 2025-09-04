"use client";
import useProductFilters from "@/hooks/useProductsFilters";
import { colors } from "@/styles/colors";
import { Slider } from "@mui/material";
import * as React from "react";

export default function RangeSlider({
  range,
  defaultValues,
}: {
  range: number[];
  defaultValues: number[];
}) {
  const [value, setValue] = React.useState<number[]>(range);
  const { filters, setFilters } = useProductFilters();

  const handleChange = (event: Event, newValue: number[]) => {
    setValue(newValue);
  };

  return (
    <Slider
      sx={{
        color: ` ${colors.INFO}`,
      }}
      getAriaLabel={() => "Temperature range"}
      value={value}
      min={defaultValues[0]}
      max={defaultValues[1]}
      onChange={(event, value) => {
        handleChange(event, value);
        setFilters({ [filters.price]: `${[...value].join(" ")}` }, "price");
      }}
      valueLabelDisplay="on"
    />
  );
}

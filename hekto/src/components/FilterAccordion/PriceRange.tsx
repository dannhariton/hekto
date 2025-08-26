import { colors } from "@/styles/colors";
import { Slider } from "@mui/material";
import * as React from "react";

export default function RangeSlider({ range }: { range: number[] }) {
  const [value, setValue] = React.useState<number[]>(range);

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
      min={range[0]}
      max={range[1]}
      onChange={handleChange}
      valueLabelDisplay="on"
    />
  );
}

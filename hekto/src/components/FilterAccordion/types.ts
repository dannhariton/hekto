export type Filter = "MULTI-SELECT" | "SINGLE-SELECT" | "RANGE" | "RATING";

export type FilterData = {
  type: string;
  label: string;
  values: string[] | number[];
};

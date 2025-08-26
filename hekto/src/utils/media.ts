import { breakpoints, Breakpoints } from "@/styles/breakpoints";

function lessThan(bp: Breakpoints): string {
  return `(max-width: calc(${breakpoints[bp]}rem - 0.0625rem))`;
}

function greaterThan(bp: Breakpoints): string {
  return `(min-width: ${breakpoints[bp]}rem)`;
}

function between(minBp: Breakpoints, maxBp: Breakpoints): string {
  return `${greaterThan(minBp)} and ${lessThan(maxBp)}`;
}

export const media = {
  lessThan,
  greaterThan,
  between,
};

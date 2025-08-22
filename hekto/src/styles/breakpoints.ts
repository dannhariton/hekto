export const breakpoints = {
  /**
   * 0.0625rem => 1px
   */
  xs: 0.0625,
  /**
   * 30rem => 480px
   */
  sm: 30,
  /**
   * 48rem => 768px
   */
  md: 48,
  /**
   * 64rem => 1024px
   */
  lg: 64,
  /**
   * 75rem => 1200px
   */
  xl: 75,
  /**
   * 90rem => 1440px
   */
  xx: 90,
  /**
   * 120rem => 1920px
   */
  xxx: 120,
} as const;

export type Breakpoints = keyof typeof breakpoints;

import { breakpoints } from "@/styles/breakpoints";
import styled from "styled-components";

export const MaxWidthWrapper = styled.div`
  max-width: ${breakpoints.xx}rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

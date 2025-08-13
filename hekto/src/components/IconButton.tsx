import { rem } from "@/utils/remConvert";
import styled from "styled-components";
import { colors } from "../styles/colors";

const IconButton = styled.button<{ $background?: boolean }>`
  background-color: ${({ $background }) =>
    !$background ? "transparent" : colors.GREY_2};
  color: ${colors.TERTIARY};
  border-radius: ${rem(32)};
  padding: ${rem(8)};
  display: inline-flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${colors.GREY_2};
  }
`;

export default IconButton;

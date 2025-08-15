import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";
import { rem } from "@/utils/remConvert";

import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";
import { Button } from "./Buttons/Button";

type Variant = "COMPLEX" | "DEFAULT";

const S = {
  Container: styled.div`
    width: ${rem(328)};
    height: ${rem(40)};
    border: ${rem(1)} solid ${colors.GREY_2};
    padding: ${rem(1)};
    display: flex;
    border-radius: ${rem(8)};
    background-color: ${colors.WHITE};

    &:has(input:invalid) {
      border: ${rem(1)} solid ${colors.DANGER};

      div {
        opacity: 1;
      }
    }
  `,
  Input: styled.input`
    width: 100%;
    border: none;
    padding-left: ${rem(16)};
    color: ${colors.BLACK};
    border-radius: 0.5rem;
    text-overflow: ellipsis;

    &::placeholder {
      color: ${colors.GREY_3};
      ${typography.labelBold}
      font-weight: 400;
    }

    &:focus {
      outline: none;
    }
  `,
  ErrorIconContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    color: ${colors.DANGER};
    padding: ${rem(12)};
  `,
};

const content = {
  COMPLEX: (
    <>
      <S.Input type="text" placeholder="Search" />
      <Button $variant="ICON">
        <SearchIcon />
      </Button>
    </>
  ),
  DEFAULT: (
    <>
      <S.Input type="email" placeholder="Enter email" />
      <S.ErrorIconContainer>
        <ErrorOutlineIcon fontSize="small" />
      </S.ErrorIconContainer>
      <Button $variant="DEFAULT">Sign Up</Button>
    </>
  ),
};

function Input({ $variant }: { $variant: Variant }) {
  return <S.Container>{content[$variant]}</S.Container>;
}

export default Input;

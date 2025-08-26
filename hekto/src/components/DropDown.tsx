import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";
import { rem } from "@/utils/remConvert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ClickAwayListener } from "@mui/material";
import { useState } from "react";
import styled, { css } from "styled-components";

const S = {
  Icon: styled(ExpandMoreIcon)<{ $shouldRotate?: boolean }>`
    ${({ $shouldRotate }) => {
      return (
        $shouldRotate &&
        css`
          transform: rotate(-180deg);
        `
      );
    }};
    transition: transform 0.1s;
  `,
  SelectedOption: styled.button<{ $width: number }>`
    color: ${colors.BLACK};
    background-color: ${colors.WHITE};
    border: ${rem(1)} solid ${colors.GREY_2};
    border-radius: ${rem(8)};
    padding: ${rem(7, 16)};
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: ${({ $width }) => rem($width)};
    ${typography.bodySmall}
  `,
  Option: styled.button`
    color: ${colors.BLACK};
    padding: ${rem(8, 8)};
    margin: ${rem(0, 8)};
    border-radius: ${rem(8)};
    display: flex;
    ${typography.bodySmall}
    &:hover {
      background-color: ${colors.GREY_1};
      margin: ${rem(0, 8)};
    }
  `,
  OptionsContainer: styled.div`
    z-index: 2;
    position: absolute;
    border-radius: ${rem(8)};
    border: ${rem(1)} solid ${colors.GREY_2};
    background-color: ${colors.WHITE};
    padding: ${rem(8, 0)};
    margin-top: ${rem(4)};
    display: flex;
    width: 100%;
    flex-direction: column;
  `,
  DropDownContainer: styled.div`
    position: relative;
  `,
};

function DropDown({ options, $width }: { options: string[]; $width: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const [selectOption, setSelectedOption] = useState(options[0]);
  const handleClickAway = () => setIsVisible(false);

  const content = (
    <S.OptionsContainer>
      {options
        .filter((option) => option !== selectOption)
        .map((option) => (
          <S.Option
            onClick={() => {
              setSelectedOption(option);
              setIsVisible(false);
            }}
            key={option}
          >
            {option}
          </S.Option>
        ))}
    </S.OptionsContainer>
  );

  return (
    <>
      <ClickAwayListener onClickAway={handleClickAway}>
        <S.DropDownContainer>
          <S.SelectedOption
            $width={$width}
            onClick={() => {
              setIsVisible((prev) => !prev);
            }}
          >
            {selectOption}
            <S.Icon $shouldRotate={isVisible} />
          </S.SelectedOption>
          {isVisible && content}
        </S.DropDownContainer>
      </ClickAwayListener>
    </>
  );
}

export default DropDown;

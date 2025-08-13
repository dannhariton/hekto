import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";
import { rem } from "@/utils/remConvert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ClickAwayListener } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

const S = {
  Icon: styled(ExpandMoreIcon)`
    transform: rotate(180deg);
  `,
  SelectedOption: styled.button`
    color: ${colors.BLACK};
    background-color: ${colors.WHITE};
    border: ${rem(1)} solid ${colors.GREY_2};
    border-radius: ${rem(8)};
    padding: ${rem(7, 16)};
    display: flex;
    justify-content: space-between;
    align-items: center;

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
    flex-direction: column;
  `,
};

function DropDown({ options }: { options: string[] }) {
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
        <div>
          <S.SelectedOption
            onClick={() => {
              setIsVisible((prev) => !prev);
            }}
          >
            {selectOption}
            {isVisible ? <S.Icon /> : <ExpandMoreIcon />}
          </S.SelectedOption>

          {isVisible && content}
        </div>
      </ClickAwayListener>
    </>
  );
}

export default DropDown;

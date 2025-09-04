import DropDown from "@/components/DropDown";
import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";
import { media } from "@/utils/media";
import { rem } from "@/utils/remConvert";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ViewStreamSharpIcon from "@mui/icons-material/ViewStreamSharp";

import styled from "styled-components";
const S = {
  Menu: styled.div`
    display: flex;
    justify-content: flex-end;
  `,
  MenuItem: styled.div`
    display: flex;
    align-items: center;
    &:not(:last-child) {
      margin-right: ${rem(4)};
    }

    @media ${media.greaterThan("md")} {
      &:not(:last-child) {
        margin-right: ${rem(16)};
      }
    }

    @media ${media.greaterThan("lg")} {
      &:not(:last-child) {
        margin-right: ${rem(64)};
      }
    }
  `,
  Label: styled.p`
    ${typography.bodyDefault}
    color: ${colors.GREY_3};
    margin-right: ${rem(16)};
  `,
  ViewButton: styled.button<{ $isActive?: boolean }>`
    &:not(:last-child) {
      margin-right: ${rem(10)};
    }
    color: ${({ $isActive }) => ($isActive ? colors.PRIMARY : colors.GREY_2)};
  `,
};

function GroupingFilters({
  toggleIsList,
  setToggleIsList,
}: {
  toggleIsList: boolean;
  setToggleIsList: () => void;
}) {
  return (
    <S.Menu>
      <S.MenuItem>
        <S.Label>Per Page</S.Label>
        <DropDown
          options={["10", "15", "20", "25"]}
          $width={96}
          label="limit"
        />
      </S.MenuItem>

      <S.MenuItem>
        <S.Label>Sort By</S.Label>
        <DropDown
          options={["Best Match", "Price Higher", "Price Lower"]}
          $width={208}
          label="sort"
        />
      </S.MenuItem>
      <S.MenuItem>
        <S.Label>View</S.Label>
        <S.ViewButton onClick={setToggleIsList} $isActive={toggleIsList}>
          <DashboardIcon />
        </S.ViewButton>
        <S.ViewButton onClick={setToggleIsList} $isActive={!toggleIsList}>
          <ViewStreamSharpIcon />
        </S.ViewButton>
      </S.MenuItem>
    </S.Menu>
  );
}

export default GroupingFilters;

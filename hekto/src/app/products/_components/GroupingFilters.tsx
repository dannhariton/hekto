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

function TopSideFilters({
  isList,
  setIsList,
}: {
  isList: boolean;
  setIsList: () => void;
}) {
  return (
    <S.Menu>
      <S.MenuItem>
        <S.Label>Per Page</S.Label>
        <DropDown options={["5", "10", "15"]} $width={96} />
      </S.MenuItem>

      <S.MenuItem>
        <S.Label>Sort By</S.Label>
        <DropDown
          options={["Price: High - > Low", "Price: Low - > High", "Best Match"]}
          $width={208}
        />
      </S.MenuItem>
      <S.MenuItem>
        <S.Label>View</S.Label>
        <S.ViewButton onClick={setIsList} $isActive={isList}>
          <DashboardIcon />
        </S.ViewButton>
        <S.ViewButton onClick={setIsList} $isActive={!isList}>
          <ViewStreamSharpIcon />
        </S.ViewButton>
      </S.MenuItem>
    </S.Menu>
  );
}

export default TopSideFilters;

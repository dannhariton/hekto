import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";
import { rem } from "@/utils/remConvert";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "styled-components";

const S = {
  PaginationContainer: styled.div`
    height: ${rem(40)};
    border: 1px solid ${colors.GREY_2};
    padding: ${rem(0, 10)};
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0.5rem;
    background-color: ${colors.WHITE};
  `,
  Page: styled.p`
    color: ${colors.BLACK};
    ${typography.bodySmall}
  `,
  AddIconContainer: styled.button`
    color: ${colors.BLACK};
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  RemoveIconContainer: styled.button`
    color: ${colors.BLACK};
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

function PaginationInput({ page }: { page: number }) {
  return (
    <S.PaginationContainer>
      <S.RemoveIconContainer>
        <RemoveIcon fontSize="small" />
      </S.RemoveIconContainer>
      <S.Page>{page}</S.Page>
      <S.AddIconContainer>
        <AddIcon fontSize="small" />
      </S.AddIconContainer>
    </S.PaginationContainer>
  );
}

export default PaginationInput;

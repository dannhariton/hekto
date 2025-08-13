import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import styled from "styled-components";
import IconButton from "../../IconButton";

type Direction = "ROW" | "COLUMN";

const Container = styled.div<{ $direction: Direction; $gap?: string }>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  gap: ${({ $gap }) => $gap}px;
`;

const Icons = ({
  $direction,
  $gap,
}: {
  $direction: Direction;
  $gap?: string;
}) => {
  return (
    <Container $direction={$direction} $gap={$gap}>
      <IconButton>
        <ShoppingCartOutlinedIcon fontSize="small" />
      </IconButton>
      <IconButton>
        <FavoriteBorderOutlinedIcon fontSize="small" />
      </IconButton>
      <IconButton>
        <ZoomInOutlinedIcon fontSize="small" />
      </IconButton>
    </Container>
  );
};

export default Icons;

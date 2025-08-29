import { useCartContext } from "@/contexts/CartContext";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import styled from "styled-components";
import IconButton from "../../Buttons/IconButton";

type Direction = "ROW" | "COLUMN";

const Container = styled.div<{ $direction: Direction; $gap?: string }>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  gap: ${({ $gap }) => $gap}px;
`;

const Icons = ({
  $direction,
  $gap,
  id,
}: {
  $direction: Direction;
  $gap?: string;
  id: string;
}) => {
  const { addToCart } = useCartContext();

  return (
    <Container $direction={$direction} $gap={$gap}>
      <IconButton
        onClick={(e) => {
          e.preventDefault();
          addToCart(id);
        }}
      >
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

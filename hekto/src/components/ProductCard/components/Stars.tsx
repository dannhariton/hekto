import { colors } from "@/styles/colors";
import { rem } from "@/utils/remConvert";
import StarIcon from "@mui/icons-material/Star";
import styled from "styled-components";

type Variant = "FILLED" | "UNFILLED";

const Star = styled(StarIcon)<{ variant: Variant }>`
  color: ${({ variant }) =>
    variant === "FILLED" ? colors.SECONDARY : colors.GREY_2};
  width: ${rem(16)};
  height: ${rem(16)};
`;

const Container = styled.div`
  display: flex;
  gap: 0.5rem;
`;

function Stars({ rating }: { rating: number }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <Container>
      {stars.map((star) => (
        <Star key={star} variant={star <= rating ? "FILLED" : "UNFILLED"} />
      ))}
    </Container>
  );
}

export default Stars;

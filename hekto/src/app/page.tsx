"use client";
import FeaturedCard from "@/components/FeaturedCard";
import IconButton from "@/components/IconButton";
import { GlobalStyle } from "@/styles/globalStyle";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { S } from "../components/Button";

export default function Page() {
  return (
    <>
      <GlobalStyle />
      <S.Button
        variant="PRIMARY"
        padding="16px 40px"
        radius="8px"
        font="subtitleExtraSmall"
      >
        Shop Now
      </S.Button>
      <S.Button
        variant="SUCCESS"
        padding="11px 16px"
        radius="6px"
        font="subtitleDoubleExtraSmall"
      >
        Shop Now
      </S.Button>
      <S.Button
        variant="PRIMARY"
        padding="6px 11px"
        radius="6px"
        font="subtitleExtraSmall"
      >
        <SearchIcon />
      </S.Button>
      <IconButton>
        <ShoppingCartOutlinedIcon />
      </IconButton>
      <IconButton $background>
        <ShoppingCartOutlinedIcon />
      </IconButton>
      <FeaturedCard />
    </>
  );
}

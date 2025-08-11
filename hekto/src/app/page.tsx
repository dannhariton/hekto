"use client";
import { Button } from "@/components/Button";
import IconButton from "@/components/IconButton";
import Stars from "@/components/ProductCard/components/Stars";
import FeaturedCard from "@/components/ProductCard/ProductCard";
import { GlobalStyle } from "@/styles/globalStyle";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export default function Page() {
  return (
    <>
      <GlobalStyle />
      <Button variant="DEFAULT">Shop Now</Button>
      <Button variant="SUCCESS">Shop Now</Button>
      <Button variant="ICON">
        <SearchIcon />
      </Button>
      <IconButton>
        <ShoppingCartOutlinedIcon />
      </IconButton>
      <IconButton $background>
        <ShoppingCartOutlinedIcon />
      </IconButton>

      <Stars rating={3} />

      <FeaturedCard variant="FEATURED" />
      <FeaturedCard variant="LATEST" />
      <FeaturedCard variant="TRENDING" />
      <FeaturedCard variant="CATEGORY" />
      <FeaturedCard variant="LIST" />
      <FeaturedCard variant="GRID" />
    </>
  );
}

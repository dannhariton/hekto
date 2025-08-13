"use client";
import { Button } from "@/components/Button";
import DropDown from "@/components/DropDown";
import IconButton from "@/components/IconButton";
import Input from "@/components/Input";
import { PaginationIcon } from "@/components/Pagination/PaginationIcon";

import PaginationInput from "@/components/Pagination/PaginationInput";
import Stars from "@/components/ProductCard/components/Stars";
import FeaturedCard from "@/components/ProductCard/ProductCard";
import { GlobalStyle } from "@/styles/globalStyle";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export default function Page() {
  return (
    <>
      <GlobalStyle />
      <Button $variant="DEFAULT">Shop Now</Button>
      <Button $variant="SUCCESS">Shop Now</Button>
      <Button $variant="ICON">
        <SearchIcon />
      </Button>
      <IconButton>
        <ShoppingCartOutlinedIcon />
      </IconButton>
      <IconButton $background>
        <ShoppingCartOutlinedIcon />
      </IconButton>

      <Stars rating={3} />

      <Input $variant="COMPLEX" />
      <Input $variant="DEFAULT" />

      <PaginationInput page={1} />
      <PaginationIcon $variant="DIAMOND" $filled />
      <PaginationIcon $variant="DIAMOND" />
      <PaginationIcon $variant="DIAMOND" />

      <br />

      <PaginationIcon $variant="LINE" $filled />
      <PaginationIcon $variant="LINE" />
      <PaginationIcon $variant="LINE" />
      <PaginationIcon $variant="LINE" />

      <br />
      <PaginationIcon $variant="CIRCLE" $filled />
      <PaginationIcon $variant="CIRCLE" />
      <PaginationIcon $variant="CIRCLE" />

      <DropDown
        options={["Best Match", "Most Popular", "Price Higher", "Price Lower"]}
      />

      <FeaturedCard $variant="FEATURED" />
      <FeaturedCard $variant="LATEST" />
      <FeaturedCard $variant="TRENDING" />
      <FeaturedCard $variant="CATEGORY" />
      <FeaturedCard $variant="LIST" />
      <FeaturedCard $variant="GRID" />
    </>
  );
}

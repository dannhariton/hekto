"use client";
import { Button } from "@/components/Buttons/Button";
import IconButton from "@/components/Buttons/IconButton";
import DropDown from "@/components/DropDown";
import Input from "@/components/Input";
import { PaginationIcon } from "@/components/Pagination/PaginationIcon";

import PaginationInput from "@/components/Pagination/PaginationInput";
import { ProductCard } from "@/components/ProductCard";
import Stars from "@/components/ProductCard/components/Stars";
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

      <ProductCard $variant="FEATURED" />
      <ProductCard $variant="LATEST" />
      <ProductCard $variant="TRENDING" />
      <ProductCard $variant="CATEGORY" />
      <ProductCard $variant="LIST" />
      <ProductCard $variant="GRID" />
    </>
  );
}

import { lowerCase } from "@/utils/textFormat";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";
import { ProductFilters } from "./types";

const useProductFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const filters: ProductFilters = useMemo(
    () => ({
      // name: lowerCase(searchParams.get("name_like") ?? ""),
      brand: searchParams.getAll("brand").map((item) => lowerCase(item)) || "",
      min: lowerCase(searchParams.get("price_gte") ?? ""),
      max: lowerCase(searchParams.get("price_lte") ?? ""),
      price: "",
      category:
        searchParams.getAll("category").map((item) => lowerCase(item)) || "",
      discountPercentage:
        searchParams
          .getAll("discountPercentage")
          .map((item) => lowerCase(item)) || "",
      colors:
        searchParams.getAll("colors_like").map((item) => lowerCase(item)) || "",
      rating: lowerCase(searchParams.get("rating.value_lte") ?? ""),
      limit: lowerCase(searchParams.get("_limit") ?? "10"),
      page: lowerCase(searchParams.get("_page") ?? "1"),
      sort: lowerCase(searchParams.get("_sort") ?? "soldTimes"),
      order: lowerCase(searchParams.get("_order") ?? "desc"),
    }),
    [searchParams]
  );

  const setFilters = useCallback(
    (
      newFilters: Partial<ProductFilters>,
      filterType?: string,
      hasNestedValues?: boolean,
      isSortingKey?: boolean,
      isRating?: boolean
    ) => {
      const currentParams = new URLSearchParams(searchParams.toString());
      Object.entries(newFilters).forEach(([key, value]) => {
        let filterKey = key;

        if (hasNestedValues) {
          filterKey = `${key}_like`;
        }

        if (isSortingKey) {
          filterKey = `_${key}`;
        }

        //TO DO fix
        // if ((filterType = "search")) {
        //   currentParams.set(`name_like`, value);
        // }
        console.log(filterKey, value);

        if (isRating) {
          if (
            !currentParams
              .get(`${key}.value_gte`)
              ?.includes(`${`${+value - 1 + 0.01}`}` as string)
          ) {
            currentParams.set(`${key}.value_gte`, `${`${+value - 1 + 0.01}`}`);
            currentParams.set(
              `${key}.value_lte`,
              `${+value === 5 ? "5" : +value}`
            );
            return;
          } else {
            currentParams.delete(`${key}.value_gte`);
            currentParams.delete(`${key}.value_lte`);
            return;
          }
        }

        if (filterType === "price") {
          const [priceMin, priceMax] = (value as string).split(" ");
          if (+priceMin > 0) {
            currentParams.set(`price_gte`, priceMin);
          } else {
            currentParams.delete(`price_gte`);
          }

          if (+priceMax < 6500) {
            currentParams.set(`price_lte`, priceMax);
          } else {
            currentParams.delete(`price_lte`);
          }
        }

        if (
          value &&
          filterType === "multiple" &&
          !currentParams.getAll(filterKey)?.includes(value as string)
        ) {
          currentParams.append(filterKey, value as string);
        } else if (value && filterType === "single") {
          currentParams.set(filterKey, value as string);
        } else {
          currentParams.delete(filterKey, value as string);
        }
      });

      const search = currentParams.toString();
      const query = search ? `?${search}` : "";
      const url = `${pathname}${query}`;
      router.replace(url, { scroll: false });
    },
    [router, searchParams, pathname]
  );

  return { filters, setFilters };
};

export default useProductFilters;

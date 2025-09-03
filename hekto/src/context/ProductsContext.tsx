"use client";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import {
  createContext,
  ReactNode,
  RefObject,
  useContext,
  useMemo,
  useRef,
} from "react";

export const ProductsContext = createContext<{
  data: [];
  isPending: boolean;
  error: Error | null;
  linkHeaders: RefObject<object>;
}>({
  data: [],
  isPending: false,
  error: null,
  linkHeaders: { current: {} },
});

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams).toString();
  const linkHeaders = useRef({});
  const page = searchParams.get("_page") || 1;
  const url =
    `${process.env.NEXT_PUBLIC_BASE_URL}?${params}` + `&_page=${page}`;

  function parseLinkHeader(linkHeader: string | null) {
    const linkHeadersArray = linkHeader
      ?.split(", ")
      ?.map((header) => header.split("; "));

    if (!linkHeadersArray || linkHeadersArray[0][0] === "") return {};

    const linkHeadersMap = linkHeadersArray.map((header) => {
      const thisHeaderRel = header[1].replace(/"/g, "").replace("rel=", "");
      if (process.env.NODE_ENV === "development") {
        header[0] = header[0]
          .replace("4000", "3000")
          .replace(`&_page=${page}`, ``);
      }

      const thisHeaderUrl = header[0].slice(1, -1);
      return [thisHeaderRel, thisHeaderUrl];
    });
    return Object.fromEntries(linkHeadersMap);
  }

  const { data, isPending, error } = useQuery({
    queryKey: ["products", params, page],
    queryFn: async () => {
      const response = await fetch(url);
      linkHeaders.current = parseLinkHeader(response.headers.get("Link"));
      return response.json();
    },
  });

  console.log(linkHeaders.current);

  const value = useMemo(
    () => ({
      data,
      isPending,
      error,
      linkHeaders,
    }),
    [data, isPending, error, linkHeaders]
  );

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => useContext(ProductsContext);

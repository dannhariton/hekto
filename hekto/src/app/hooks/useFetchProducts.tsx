import { useQuery } from "@tanstack/react-query";

export const URL = "http://localhost:4000/products";

export function useFetchProducts() {
  const { data, isPending, error } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const response = await fetch(URL);
      return response.json();
    },
  });

  return { data, isPending, error };
}

import { useQuery } from "@tanstack/react-query";

export function useFetchProduct(id: string) {
  const { data, isPending, error } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}?id=${id}`
      );
      return response.json();
    },
  });

  return { data, isPending, error };
}

import { useQuery } from "@tanstack/react-query";

export function useFetchProducts() {
  const { data, isPending, error } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}`);
      return response.json();
    },
  });

  return { data, isPending, error };
}

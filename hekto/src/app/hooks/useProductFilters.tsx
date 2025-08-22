"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function useProductFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const updateParam = (key: string, value: string) => {
    const currentParams = new URLSearchParams(searchParams);
    currentParams.set(key, value); // Or .delete(), .append()
    router.replace(`${pathname}?${currentParams.toString()}`);
  };

  // Example usage:
  // <button onClick={() => updateParam('category', 'electronics')}>Filter</button>
}

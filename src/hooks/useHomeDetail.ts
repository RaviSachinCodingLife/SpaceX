import { useQuery } from "@tanstack/react-query";

export const useHomeDetail = (id: string) => {
  return useQuery({
    queryKey: ["homeDetail", id],
    queryFn: async () => {
      const res = await fetch("../assets/json/homeFeatures.json");
      if (!res.ok) throw new Error("Failed to fetch home features");
      const data = await res.json();
      return data.find((item: any) => item.id === id);
    },
    enabled: !!id,
  });
};

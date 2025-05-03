import { useQuery } from "@tanstack/react-query";

export const useHomeFeatures = () => {
  return useQuery({
    queryKey: ["homeFeatures"],
    queryFn: async () => {
      const res = await fetch("../assets/json/homeFeatures.json");
      if (!res.ok) throw new Error("Failed to fetch home features");
      return res.json();
    },
  });
};

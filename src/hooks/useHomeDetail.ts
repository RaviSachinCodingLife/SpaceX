import { useQuery } from "@tanstack/react-query";
import { HomeFeature, homeFeatures } from "../utils/homeFeatures";

export const useHomeDetail = (id: string) => {
  return useQuery<HomeFeature>({
    queryKey: ["homeDetail", id],
    queryFn: async () => {
      const detail = homeFeatures.find((item) => item.id === id);
      if (!detail) throw new Error("Feature not found");
      return detail;
    },
    enabled: !!id,
  });
};

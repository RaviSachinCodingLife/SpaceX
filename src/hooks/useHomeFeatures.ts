import { useQuery } from "@tanstack/react-query";
import { HomeFeature, homeFeatures } from "../utils/homeFeatures";

export const useHomeFeatures = () => {
  return useQuery<HomeFeature[]>({
    queryKey: ["homeFeatures"],
    queryFn: async () => homeFeatures,
  });
};

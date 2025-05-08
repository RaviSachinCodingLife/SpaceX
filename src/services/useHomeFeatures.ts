import { useQuery } from "@tanstack/react-query";
import {  homeFeatures } from "../utils/homeFeatures";
import { HomeFeature } from "../utils/type";

export const useHomeFeatures = () => {
  return useQuery<HomeFeature[]>({
    queryKey: ["homeFeatures"],
    queryFn: async () => homeFeatures,
  });
};

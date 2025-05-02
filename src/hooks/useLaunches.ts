import { useQuery } from "@tanstack/react-query";

export const useLaunches = () => {
  return useQuery({
    queryKey: ["launches"],
    queryFn: async () => {
      const res = await fetch("https://api.spacexdata.com/v4/launches");
      if (!res.ok) throw new Error("Failed to fetch launches");
      return res.json();
    },
  });
};

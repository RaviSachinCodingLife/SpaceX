import { useQuery } from "@tanstack/react-query";

export const useLaunchDetail = (id: string) => {
  return useQuery({
    queryKey: ["launch", id],
    queryFn: async () => {
      const res = await fetch(`https://api.spacexdata.com/v4/launches/${id}`);
      if (!res.ok) throw new Error("Failed to fetch launch detail");
      const data = await res.json();

      const rocketRes = await fetch(
        `https://api.spacexdata.com/v4/rockets/${data.rocket}`
      );
      if (!rocketRes.ok) throw new Error("Failed to fetch rocket detail");
      const rocketData = await rocketRes.json();

      return { ...data, rocket: rocketData };
    },
    enabled: !!id, 
  });
};

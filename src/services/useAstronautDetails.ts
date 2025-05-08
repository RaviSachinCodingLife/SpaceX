import { useQuery } from "@tanstack/react-query";

export const useAstronautDetails = (id: string | undefined) => {
  return useQuery({
    queryKey: ["astronautDetails", id],
    enabled: !!id,
    queryFn: async () => {
      const res = await fetch(`https://api.unsplash.com/photos/${id}`, {
        headers: {
          Authorization: `Client-ID jSt8qm4iDhmBnsEddXxmsgs5qOMSt9IWk8t0UB8i2qM`,
        },
      });

      if (!res.ok) throw new Error("Failed to fetch astronaut image details");

      return res.json();
    },
  });
};

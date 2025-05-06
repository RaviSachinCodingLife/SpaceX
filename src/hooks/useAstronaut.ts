import { useQuery } from "@tanstack/react-query";

export const useAstronaut = (searchTerm = "space") => {
  return useQuery({
    queryKey: ["unsplashImages", searchTerm],
    queryFn: async () => {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?query=${searchTerm}&per_page=30`,
        {
          headers: {
            Authorization:
              "Client-ID jSt8qm4iDhmBnsEddXxmsgs5qOMSt9IWk8t0UB8i2qM",
          },
        }
      );

      if (!res.ok) throw new Error("Failed to fetch images from Unsplash");

      return res.json();
    },
  });
};

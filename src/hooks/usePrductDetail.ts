import { useQuery } from "@tanstack/react-query";
import { CartItem, CartItems } from "../utils/cartItems";

export const useProductDetail = (id: string) => {
  return useQuery<CartItem>({
    queryKey: ["productDetail", id],
    queryFn: async () => {
      const detail = CartItems.find((item) => item.id === id);
      if (!detail) throw new Error("Feature not found");
      return detail;
    },
    enabled: !!id,
  });
};

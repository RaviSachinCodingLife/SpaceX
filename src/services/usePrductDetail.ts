import { useQuery } from "@tanstack/react-query";
import {  CartItems } from "../utils/cartItems";
import { CartItem } from "../utils/type";

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

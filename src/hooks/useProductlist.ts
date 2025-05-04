import { useQuery } from "@tanstack/react-query";
import { CartItem, CartItems } from "../utils/cartItems";

export const useProductList = () => {
  return useQuery<CartItem[]>({
    queryKey: ["productlist"],
    queryFn: async () => CartItems,
  });
};

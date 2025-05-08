import { useQuery } from "@tanstack/react-query";
import { CartItems } from "../utils/cartItems";
import { CartItem } from "../utils/type";

export const useProductList = () => {
  return useQuery<CartItem[]>({
    queryKey: ["productlist"],
    queryFn: async () => CartItems,
  });
};

import { create } from "zustand";
import { CartState } from "./type";

export const useCartStore = create<CartState>((set, get) => ({
  cart: [],
  addToCart: (item) => {
    const cart = get().cart;
    const existingItemIndex = cart.findIndex(
      (i) => i.id === item.id && i.color === item.color && i.size === item.size
    );

    const newCart = [...cart];

    if (existingItemIndex !== -1) {
      newCart[existingItemIndex].quantity += item.quantity;
    } else {
      newCart.push(item);
      console.log({
        number: parseFloat(item.price.replace(/[^0-9.]/g, "")),
        item,
      });
    }
    set({ cart: newCart });
  },
  getTotal: () =>
    get().cart.reduce((sum, item) => {
      const price = parseFloat(item.price.replace(/[^0-9.]/g, ""));
      return sum + price * item.quantity;
    }, 0),
  getItemCount: () =>
    get().cart.reduce((total, item) => total + item.quantity, 0),
}));

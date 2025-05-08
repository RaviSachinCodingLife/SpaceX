import { create } from "zustand";
import { AuthState } from "./type";

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  username: "",
  password: "",
  error: "",
  login: (username, password) => {
    if (username && password) {
      set({
        isAuthenticated: true,
        username,
        password,
        error: "",
      });
    } else {
      set({ error: "Username and password are required" });
    }
  },
  logout: () => {
    set({ isAuthenticated: false, username: "", password: "", error: "" }),
      localStorage.clear();
  },
  setError: (error) => set({ error }),
}));

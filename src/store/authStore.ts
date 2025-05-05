import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  username: string;
  password: string;
  error: string;
  login: (username: string, password: string) => void;
  logout: () => void;
  setError: (error: string) => void;
}

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

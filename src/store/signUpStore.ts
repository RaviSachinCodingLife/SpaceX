import { create } from "zustand";
import { SignUpState } from "./type";

export const useSignUpStore = create<SignUpState>((set) => ({
  isAuthenticated: false,
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  error: "",
  signUp: (firstName, lastName, email, password) => {
    if (firstName && lastName && email && password) {
      set({
        isAuthenticated: true,
        firstName,
        lastName,
        email,
        password,
        error: "",
      });
    } else {
      set({ error: "All fields are required" });
    }
  },
  setError: (error) => set({ error }),
  clearForm: () =>
    set({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      error: "",
      isAuthenticated: false,
    }),
}));

import { create } from "zustand";

interface SignUpState {
  isAuthenticated: boolean;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  error: string;
  signUp: (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => void;
  setError: (error: string) => void;
  clearForm: () => void;
}

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

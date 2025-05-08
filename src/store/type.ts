interface AuthState {
  isAuthenticated: boolean;
  username: string;
  password: string;
  error: string;
  login: (username: string, password: string) => void;
  logout: () => void;
  setError: (error: string) => void;
}

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

interface CartItem {
  id: string;
  title: string;
  price: string;
  image: string;
  color: string | null;
  size: string | null;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  getTotal: () => number;
  getItemCount: () => number;
}


export type { AuthState, SignUpState,CartItem,CartState };

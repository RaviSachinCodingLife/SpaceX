import {
  CSSProperties,
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useCartStore } from "../../../store/useCartStore";
import { FormData } from "../type";

const VALID_COUPON = "SpaceX100";

const useCart = () => {
  const { cart, getTotal, addToCart } = useCartStore();

  const increment = (item: any) => {
    addToCart({ ...item, quantity: 1 });
  };

  const decrement = (item: any) => {
    if (item.quantity > 1) {
      addToCart({ ...item, quantity: -1 });
    }
  };

  const remove = (item: any) => {
    const updatedCart = cart.filter(
      (i) =>
        !(i.id === item.id && i.color === item.color && i.size === item.size)
    );
    useCartStore.setState({ cart: updatedCart });
  };

  const cartItems = useMemo(
    () =>
      cart.map((item) => ({
        key: `${item.id}-${item.size}-${item.color}`,
        ...item,
        totalPrice: (
          parseFloat(item.price.replace(/[^0-9.]/g, "")) * item.quantity
        ).toFixed(2),
      })),
    [cart]
  );
  return { cartItems, getTotal, increment, decrement, remove };
};

const useCartInfo = () => {
  const { cart, getTotal } = useCartStore();
  const [coupon, setCoupon] = useState("");
  const [error, setError] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);

  const subtotal = getTotal();
  const shipping = 34.02;
  const duties = 24.8;
  const taxes = 13.39;

  const discount = discountApplied ? 100 : 0;
  const total = subtotal + shipping + duties + taxes - discount;

  const cartItem = cart[0];

  const handleApplyCoupon = (code?: string) => {
    const appliedCode = code ?? coupon;

    if (appliedCode !== VALID_COUPON) {
      setError("Invalid coupon code.");
      setDiscountApplied(false);
    } else if (subtotal + shipping + duties + taxes < 250) {
      setError("Coupon can only be applied to orders of $250 or more.");
      setDiscountApplied(false);
    } else {
      setError("");
      setDiscountApplied(true);
    }
  };

  const charges = [
    { label: "Subtotal", value: subtotal },
    { label: "Shipping + Handling", value: shipping },
    { label: "Duties", value: duties },
    { label: "Taxes", value: taxes },
  ];

  useEffect(() => {
    if (error) setError("");
    if (discountApplied && coupon !== VALID_COUPON) {
      setDiscountApplied(false);
    }
  }, [coupon]);

  return {
    coupon,
    discountApplied,
    error,
    setCoupon,
    total,
    cartItem,
    handleApplyCoupon,
    charges,
    discount,
  };
};

const useInformation = (
  form: FormData,
  setForm: Dispatch<SetStateAction<FormData>>
) => {
  const [isValidForm, setIsValidForm] = useState(false);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    const newErrors: Record<string, boolean> = {};
    Object.entries(form).forEach(([key, value]) => {
      if (typeof value === "string" && !value.trim()) {
        newErrors[key] = true;
      }
    });
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    const valid = validateForm();
    setIsValidForm(valid);
  }, [form]);

  return { isValidForm, handleChange };
};

const usePayment = (form: FormData, username: string) => {
  const contactEmail = username;
  const shippingAddress = `${form.address}, ${form.city}, ${form.state}, ${form.country}, ${form.zip}`;
  const shippingMethod = {
    name: "Shipping - FedEx International Economy",
    price: "$34.02",
  };

  const [isValidForm, setIsValidForm] = useState(false);

  const [formState, setFormState] = useState({
    cardNumber: "",
    expirationDate: "",
    securityCode: "",
    cardName: form.fullName,
  });

  const handleChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      let value = e.target.value;
      if (field === "expirationDate") {
        value = value.replace(/\D/g, "");
        if (value.length >= 3) {
          value = value.slice(0, 2) + " / " + value.slice(2, 4);
        }
      }

      setFormState((prev) => ({ ...prev, [field]: value }));
    };

  const validateForm = () => {
    const newErrors: Record<string, boolean> = {};
    Object.entries(formState).forEach(([key, value]) => {
      if (typeof value === "string" && !value.trim()) {
        newErrors[key] = true;
      }
    });
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    const valid = validateForm();
    setIsValidForm(valid);
  }, [formState]);

  const infoSections = [
    {
      label: "Contact",
      value: contactEmail,
      valueStyle: { textTransform: "capitalize" } as CSSProperties,
    },
    {
      label: "Ship to",
      value: shippingAddress,
      valueStyle: {},
    },
  ];
  return {
    formState,
    handleChange,
    contactEmail,
    shippingAddress,
    shippingMethod,
    isValidForm,
    infoSections,
  };
};

export { useCart, useCartInfo, useInformation, usePayment };

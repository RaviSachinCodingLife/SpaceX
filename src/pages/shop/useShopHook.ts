import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { showNotification } from "@mantine/notifications";
import { useCartStore } from "../../store/useCartStore";
import { FormData } from "./type";
import { CartItems } from "../../utils/cartItems";
import { useProductDetail } from "../../services/usePrductDetail";
import { useProductList } from "../../services/useProductlist";

const useShop = () => {
  const { data } = useProductList();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = (data ?? []).filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const cardProps = useMemo(
    () =>
      filteredData?.map((item) => ({
        key: item.id,
        image: item.image,
        title: item.title,
        price: item.price,
        link: item.link,
      })),
    [filteredData]
  );

  return { searchTerm, setSearchTerm, cardProps };
};

const useProductHook = () => {
  const { slug } = useParams();
  const { addToCart, cart } = useCartStore();
  const [isAdded, setIsAdded] = useState(false);
  const product = CartItems.find((item) => item.title === slug);

  if (!product) return null;
  const { data } = useProductDetail(product.id);

  const [productState, setProductState] = useState({
    quantity: 1,
    selectedColor: null as string | null,
    selectedSize: null as string | null,
  });

  return {
    data,
    setProductState,
    productState,
    isAdded,
    addToCart,
    setIsAdded,
  };
};

const useCheckout = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const cartItems = useCartStore((state) => state.cart);

  const [form, setForm] = useState<FormData>({
    fullName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const { username = "" } = JSON.parse(
    localStorage.getItem("user_data") || "{}"
  );

  const MAX_STEP = 3;

  const nextStep = () => {
    if (active === 0 && cartItems.length === 0) {
      return showNotification({
        title: "Cart is empty",
        message: "Please add items to your cart before continuing.",
        color: "red",
      });
    }

    if (active === MAX_STEP) {
      showNotification({
        title: "Order Placed",
        message: "Your order has been successfully placed!",
        color: "green",
      });
      return navigate("/shop");
    }

    setActive((current) => Math.min(current + 1, MAX_STEP));
  };

  const prevStep = () => setActive((current) => Math.max(current - 1, 0));

  const nextButtonLabels = [
    "Checkout",
    "Continue to Shipping",
    "Continue to Payment",
    "Confirm Order",
  ];

  const backButtonLabels = [
    "Back",
    "Return to Cart",
    "Return to Information",
    "Return to Shipping",
  ];

  return {
    active,
    setActive,
    form,
    setForm,
    username,
    nextStep,
    prevStep,
    getNextButtonLabel: () => nextButtonLabels[active] || "Next",
    getBackButtonLabel: () => backButtonLabels[active] || "Back",
  };
};

export { useShop, useCheckout, useProductHook };

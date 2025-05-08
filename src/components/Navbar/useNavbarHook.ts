import { rem } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { useState, useEffect, useMemo, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useCartStore } from "../../store/useCartStore";
import { useAuthStore } from "../../store/authStore";
import { getMenuItems } from "./util";
import { useSessionTimeout } from "../../pages/Auth/useAuthHooks";

const useNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useSessionTimeout();
  const [opened, { toggle }] = useDisclosure();
  const { getItemCount, cart } = useCartStore((state) => ({
    getItemCount: state.getItemCount,
    cart: state.cart,
  }));

  const getInitialAvatar = useCallback(() => {
    try {
      const auth = JSON.parse(localStorage.getItem("user_data") || "{}");
      return auth?.avatar || null;
    } catch (error) {
      console.error("Failed to parse user_data from localStorage:", error);
      return null;
    }
  }, []);

  const [itemCount, setItemCount] = useState(getItemCount());
  const [file, setFile] = useState<File | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(getInitialAvatar);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const headerHeight = rem(60);

  const navLinks = useMemo(
    () => ["Launches", "Starlink", "Astronaut", "Careers"],
    []
  );
  const isCart = location.pathname.startsWith("/cart");
  const isShop =
    location.pathname.startsWith("/shop") ||
    location.pathname.startsWith("/product/");
  const logout = useAuthStore.getState().logout;

  const updateAvatarInLocalStorage = useCallback((imageData: string) => {
    try {
      const userData = JSON.parse(localStorage.getItem("user_data") || "{}");
      localStorage.setItem(
        "user_data",
        JSON.stringify({
          ...userData,
          avatar: imageData,
        })
      );
    } catch (error) {
      console.error("Failed to update avatar in localStorage:", error);
    }
  }, []);

  const navItems = useMemo(
    () =>
      navLinks.map((link) => {
        const path = `/${link.toLowerCase().replace(/\s/g, "-")}`;
        const isActive = location.pathname === path;
        return { label: link, path, isActive };
      }),
    [navLinks, location.pathname]
  );

  const menuItems = useMemo(
    () => getMenuItems({ setFile, navigate, logout }),
    [setFile, navigate, logout]
  );

  useEffect(() => {
    if (!file) return;

    try {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const imageData = reader.result as string;
          setAvatarUrl(imageData);
          updateAvatarInLocalStorage(imageData);
        } catch (error) {
          console.error("Failed to handle file reader result:", error);
        }
      };
      reader.onerror = (err) => {
        console.error("FileReader failed:", err);
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error("Failed to read avatar file:", error);
    }
  }, [file, updateAvatarInLocalStorage]);

  useEffect(() => {
    try {
      setItemCount(getItemCount());
    } catch (error) {
      console.error("Failed to get item count:", error);
    }
  }, [cart.length, getItemCount]);

  return {
    headerHeight,
    isShop,
    isCart,
    itemCount,
    isDesktop,
    avatarUrl,
    opened,
    toggle,
    navigate,
    navItems,
    menuItems,
  };
};

export { useNavbar };

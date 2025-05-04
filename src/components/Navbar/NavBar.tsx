import {
  AppShell,
  Burger,
  Box,
  Group,
  Anchor,
  Image,
  rem,
  Drawer,
  ScrollArea,
  Avatar
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/images/space-x-logo-white.png";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import { useCartStore } from "../../store/useCartStore";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [opened, { toggle, close }] = useDisclosure();
  const cart = useCartStore((state) => state.cart);
  const { getItemCount } = useCartStore();
  const [itemCount, setItemCount] = useState(0);

  const isDesktop = useMediaQuery("(min-width: 768px)");

  const navLinks = ["Launches", "STARLINK"];

  const headerHeight = rem(60);

  const getUserInitials = () => {
    try {
      const auth = JSON.parse(localStorage.getItem("user_data") || "{}");
      const username = auth?.username;

      if (username && username.length >= 2) {
        return username[0] + username[username.length - 1];
      } else if (username?.length === 1) {
        return username + username;
      }

      return "??";
    } catch {
      return "??";
    }
  };
  const isCart = location.pathname.startsWith("/cart");
  const isShop = location.pathname.startsWith("/shop") ||
    location.pathname.startsWith("/product/");

  useEffect(() => {
    setItemCount(getItemCount());
  }, [cart, getItemCount]);


  return (
    <AppShell
      padding="md"
      style={{
        height: "100vh",
        overflowY: "auto",
        overflowX: "hidden",
      }}
      header={
        <Box
          px="lg"
          h={headerHeight}
          style={{
            position: "sticky",
            top: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "rgba(0,0,0,0.1)",
            backdropFilter: "blur(8px)",
            zIndex: 1000,
          }}
        >
          <Group>
            {!isDesktop && (
              <Burger
                opened={opened}
                onClick={toggle}
                size="sm"
                color="white"
              />
            )}
            {isDesktop && (
              <Group style={{ gap: rem(16) }}>
                <Image
                  src={logo}
                  alt="SpaceX"
                  width={210}
                  height={26.5}
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/home")}
                />
                {navLinks.map((link) => {
                  const path = `/${link.toLowerCase().replace(/\s/g, "-")}`;
                  const isActive = location.pathname === path;

                  return (
                    <Anchor
                      key={link}
                      component={Link}
                      to={path}
                      c="white"
                      fz="sm"
                      fw={700}
                      tt="uppercase"
                      underline={false}
                      style={{
                        textDecoration: "none",
                        borderBottom: isActive ? "3px solid #fff" : "none",
                        borderRadius: isActive ? "2px" : "none",
                        paddingBottom: "2px",
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.color = "#999")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.color = "#fff")
                      }
                    >
                      {link}
                    </Anchor>
                  );
                })}
              </Group>
            )}
          </Group>

          <Group>
            <Anchor
              component={Link}
              to="/shop"
              c="white"
              fz="sm"
              fw={700}
              tt="uppercase"
              underline={false}
              style={{
                textDecoration: "none",
                borderBottom: isShop ? "3px solid #fff" : "none",
                borderRadius: isShop ? "2px" : "none",
                paddingBottom: "2px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#999")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
            >
              SHOP
            </Anchor>
            {isShop && (
              <Anchor
                component={Link}
                to="/cart"
                c="white"
                fz="sm"
                fw={700}
                tt="uppercase"
                underline={false}
                style={{
                  textDecoration: "none",
                  borderBottom: isCart ? "3px solid #fff" : "none",
                  borderRadius: isCart ? "2px" : "none",
                  paddingBottom: "2px",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#999")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
              >
                Cart {itemCount > 0 && <span>({itemCount})</span>}
              </Anchor>
            )}
            <Avatar color="black" radius="xl">
              {getUserInitials().toUpperCase()}
            </Avatar>
          </Group>

          <Drawer
            opened={opened}
            onClose={close}
            padding="md"
            size="75%"
            overlayProps={{ opacity: 0.55, blur: 3 }}
          >
            <ScrollArea>
              <Box py="md">
                {navLinks.map((link) => {
                  const path = `/${link.toLowerCase().replace(/\s/g, "-")}`;
                  return (
                    <Box key={link} mb="md">
                      <Anchor
                        component={Link}
                        to={path}
                        c="black"
                        fz="lg"
                        fw={700}
                        onClick={close}
                      >
                        {link}
                      </Anchor>
                    </Box>
                  );
                })}
              </Box>
            </ScrollArea>
          </Drawer>
        </Box>
      }
    >
      <Outlet />
      <Footer />
    </AppShell>
  );
}

export default Navbar;

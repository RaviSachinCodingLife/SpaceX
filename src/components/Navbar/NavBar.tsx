import {
  AppShell,
  Burger,
  Box,
  Group,
  Anchor,
  Image,
  Drawer,
  ScrollArea,
  Avatar,
  Menu,
  FileButton,
  Text,
} from "@mantine/core";
import { Link, Outlet, useLocation } from "react-router-dom";
import logo from "../../assets/images/space-x-logo-white.png";
import Footer from "../Footer/Footer";
import { useAuthStore } from "../../store/authStore";
import {
  CareerIcon,
  LogoutIcon,
  PhoneIcon,
  ProfileUploadIcon,
} from "../../assets/svg/SvgIcon";
import * as style from "./style";
import { useNavbar } from "./useNavbarHook";
import { getUserInitials } from "../../utils/globalFunctions";
import { useMemo } from "react";
import { getMenuItems, renderNavAnchor } from "./util";

function Navbar() {
  const {
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
  } = useNavbar();

  return (
    <AppShell
      padding="md"
      style={style.AppShellStyle}
      header={
        <Box px="lg" h={headerHeight} style={style.AppShellHeaderStyle}>
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
              <Group style={style.AppShellGroupStyle}>
                <Image
                  src={logo}
                  alt="SpaceX"
                  width={210}
                  height={26.5}
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/home")}
                />
                {navItems.map(renderNavAnchor)}
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
              style={style.AppShellAnchorShopStyle(isShop)}
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
                style={style.AppShellAnchorShopStyle(isCart)}
                onMouseOver={(e) => (e.currentTarget.style.color = "#999")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
              >
                Cart {itemCount > 0 && <span>({itemCount})</span>}
              </Anchor>
            )}

            <Menu shadow="md" width={200}>
              <Menu.Target>
                <Avatar
                  src={avatarUrl}
                  color="black"
                  radius="xl"
                  style={style.AppShellAvtarStyle}
                >
                  {getUserInitials().toUpperCase()}
                </Avatar>
              </Menu.Target>

              <Menu.Dropdown>
                {menuItems.map((item) =>
                  item.customComponent ? (
                    <Menu.Item
                      key={item.key}
                      icon={item.icon}
                      closeMenuOnClick={item.closeMenuOnClick}
                    >
                      {item.customComponent}
                    </Menu.Item>
                  ) : (
                    <Menu.Item
                      key={item.key}
                      icon={item.icon}
                      onClick={item.onClick}
                    >
                      {item.label}
                    </Menu.Item>
                  )
                )}
              </Menu.Dropdown>
            </Menu>
          </Group>

          <Drawer
            opened={opened}
            onClose={toggle}
            padding="md"
            size="75%"
            overlayProps={{ opacity: 0.55, blur: 3 }}
          >
            <ScrollArea>
              <Box py="md">
                {navItems.map((item) => (
                  <Box key={item.label} mb="md">
                    <Anchor
                      component={Link}
                      to={item.path}
                      c="black"
                      fz="lg"
                      fw={700}
                      onClick={toggle}
                    >
                      {item.label}
                    </Anchor>
                  </Box>
                ))}
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

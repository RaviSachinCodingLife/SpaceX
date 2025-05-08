import { rem } from "@mantine/core";
import { CSSProperties } from "react";

const AppShellStyle: CSSProperties = {
  height: "100vh",
  overflowY: "auto",
  overflowX: "hidden",
};

const AppShellHeaderStyle: CSSProperties = {
  position: "sticky",
  top: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "rgba(0,0,0,0.1)",
  backdropFilter: "blur(8px)",
  zIndex: 1000,
};

const AppShellGroupStyle: CSSProperties = {
  gap: rem(16),
};

const AppShellAnchorStyle = (isActive: boolean): CSSProperties => ({
  textDecoration: "none",
  borderBottom: isActive ? "3px solid #fff" : "none",
  borderRadius: isActive ? "2px" : "none",
  paddingBottom: "2px",
});

const AppShellAnchorShopStyle = (isShop: boolean): CSSProperties => ({
  textDecoration: "none",
  borderBottom: isShop ? "3px solid #fff" : "none",
  borderRadius: isShop ? "2px" : "none",
  paddingBottom: "2px",
  display: "flex",
  alignItems: "center",
  gap: "6px",
});

const AppShellAvtarStyle: CSSProperties = {
  cursor: "pointer",
};

export {
  AppShellStyle,
  AppShellGroupStyle,
  AppShellAvtarStyle,
  AppShellHeaderStyle,
  AppShellAnchorStyle,
  AppShellAnchorShopStyle,
};

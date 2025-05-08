import { CSSProperties } from "react";

const ContactContainerStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "auto",
  minHeight: "100vh",
};

const ConatctColStyle: CSSProperties = {
  alignItems: "flex-start",
  flexDirection: "column",
  gap: "20px",
};

const ConatctButtonStyle: CSSProperties = {
  color: "#fff",
  height: "50px",
};

export { ContactContainerStyle, ConatctButtonStyle, ConatctColStyle };

import { CSSProperties } from "react";

const HomeBoxStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
  zIndex: 2,
};

const HomeTitleTextStyle: CSSProperties = {
  width: "500px",
  flexWrap: "wrap",
  fontSize: "42px",
};

const HomeButtonStyle: CSSProperties = {
  width: "169px",
  height: "52px",
  marginTop: "15px",
};

const HomeDetailLoderStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "calc(100vh - 60px)",
};

const HomeDetailBoxStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  cursor: "pointer",
};

const HomeDetailVideoStyle: CSSProperties = {
  width: "100%",
  height: "100%",
  padding: "40px",
  paddingTop: "10px",
};

export {
  HomeBoxStyle,
  HomeTitleTextStyle,
  HomeButtonStyle,
  HomeDetailLoderStyle,
  HomeDetailBoxStyle,
  HomeDetailVideoStyle,
};

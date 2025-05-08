import { CSSProperties } from "react";

const BoxStyle: CSSProperties = {
  backgroundColor: "#000",
  color: "#fff",
  minHeight: "100vh",
  paddingTop: "60px",
  marginTop: "-60px",
};

const LaunchCardStyle: CSSProperties = {
  height: "100%",
  width: "100%",
};

const AstronautBoxStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  cursor: "pointer",
};

const AstronautBoxTextStyle = {
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "rotateZ(2deg) translateX(3px)",
  },
};

const AstronautLoaderStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "calc(100vh - 60px)",
};

const AstronautImageStyle: CSSProperties = {
  padding: "40px",
  paddingTop: "10px",
  border: 0,
};

const AstronautContainerStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

export {
  BoxStyle,
  AstronautLoaderStyle,
  AstronautContainerStyle,
  AstronautImageStyle,
  AstronautBoxTextStyle,
  LaunchCardStyle,
  AstronautBoxStyle,
};

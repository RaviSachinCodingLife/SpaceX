import { CSSProperties } from "react";

const GlobalCardStyle = {
  width: 450,
  transition: "transform 0.2s",
  "&:hover": { transform: "scale(1.02)" },
};

const CardImgStyle: CSSProperties = {
  height: "100%",
  width: "100%",
};

const LaunchCardBox: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  padding: "50px",
};

const LaunchCardChildBox: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  gap: "5px",
};

const LaunchCardTitle: CSSProperties = {
  textTransform: "capitalize",
};

const LaunchCardButton: CSSProperties = {
  color: "#fff",
  alignSelf: "flex-start",
  width: "140px",
  height: "50px",
};

export {
  GlobalCardStyle,
  CardImgStyle,
  LaunchCardBox,
  LaunchCardChildBox,
  LaunchCardButton,
  LaunchCardTitle,
};

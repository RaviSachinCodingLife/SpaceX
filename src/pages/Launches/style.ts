import { CSSProperties } from "react";
import launchImg from "../../assets/images/launches_header_desktop.jpg";

const LaunchBoxStyle: CSSProperties = {
  backgroundColor: "#000",
  color: "#fff",
  minHeight: "100vh",
};

const LaunchBgBoxStyle: CSSProperties = {
  backgroundImage: `url(${launchImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "60px",
  marginTop: "-60px",
};

const LaunchTitleStyle: CSSProperties = {
  color: "white",
  fontSize: "64px",
  fontWeight: "bold",
  textAlign: "center",
  zIndex: 1,
};

const LaunchStatsStyle: CSSProperties = {
  backgroundColor: "black",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "80px 0",
  gap: "100px",
};

const LaunchLaunchCardStyle: CSSProperties = {
  boxShadow: "0 4px 20px rgba(128, 128, 128, 0.3)",
  padding: "50px",
};

const LaunchDetailBoxStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  cursor: "pointer",
};

const LaunchDetailIframeStyle: CSSProperties = {
  padding: "40px",
  paddingTop: "10px",
  border: 0,
};

export {
  LaunchBoxStyle,
  LaunchBgBoxStyle,
  LaunchLaunchCardStyle,
  LaunchTitleStyle,
  LaunchStatsStyle,
  LaunchDetailBoxStyle,
  LaunchDetailIframeStyle,
};

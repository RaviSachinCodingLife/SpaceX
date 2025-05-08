import { CSSProperties } from "react";
import bg from "../../assets/images/Careers/SpaceX_Careers_BG.png";

const NotFoundBox: CSSProperties = {
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
  position: "relative",
  overflow: "hidden",
};

const NotFoundChildBox: CSSProperties = {
  position: "absolute",
  inset: 0,
  zIndex: 1,
};

const NotFoundContainer: CSSProperties = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  position: "relative",
  zIndex: 2,
};

export { NotFoundBox, NotFoundChildBox, NotFoundContainer };

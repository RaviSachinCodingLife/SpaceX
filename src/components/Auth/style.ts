import { CSSProperties } from "react";
import bgImg from "../assets/images/bgImg.jpeg";

const containerStyle: CSSProperties = {
  position: "relative",
  backgroundImage: `url(${bgImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const containerOverlayStyle: CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  zIndex: 1,
};

const overlayStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  position: "relative",
  zIndex: 2,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  padding: "40px",
  borderRadius: "12px",
  width: "100%",
  maxWidth: "450px",
  boxShadow: "0 0 20px rgba(0,0,0,0.5)",
};

const titleStyle: CSSProperties = {
  color: "white",
  textAlign: "center",
};

const subTitleStyle: CSSProperties = {
  color: "grey",
  textAlign: "center",
};

const textFieldInputStyle: CSSProperties = {
  color: "black",
  height: "45px",
  fontSize: "18px",
};
const textFieldLabelStyle: CSSProperties = {
  color: "#fff",
};

const btnStyle: CSSProperties = {
  fontSize: "18px",
  fontWeight: 500,
  height: "45px",
  borderRadius: "8px",
};

const botomTitleStyle: CSSProperties = { color: "white", textAlign: "center" };

export {
  containerStyle,
  botomTitleStyle,
  btnStyle,
  titleStyle,
  textFieldInputStyle,
  textFieldLabelStyle,
  subTitleStyle,
  containerOverlayStyle,
  overlayStyle,
};

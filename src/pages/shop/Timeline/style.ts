import { CSSProperties } from "react";

const CartGridStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 2,
};

const CartFlexBoxStyle: CSSProperties = {
  border: "1px solid grey",
  width: "80px",
  height: "40px",
  borderRadius: "5px",
};

const CartTextInputStyle = {
  alignSelf: "flex-end",
  paddingRight: "10px",
  flex: 1,
};

const PaymentTooltipStyle: any = {
  fontSize: "12px",
  padding: "4px 8px",
  whiteSpace: "normal",
  width: "150px",
};

const PaymentIconStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
};

export {
  CartGridStyle,
  PaymentTooltipStyle,
  CartFlexBoxStyle,
  CartTextInputStyle,
  PaymentIconStyle,
};

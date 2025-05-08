import { CSSProperties } from "react";

const CheckoutBoxStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
  backgroundColor: "#fff",
  minHeight: "100vh",
};

const CheckoutImageStyle: CSSProperties = {
  cursor: "pointer",
};

const CheckoutGridColStyle: CSSProperties = {
  backgroundColor: "#f5f5f5",
  borderLeft: "1px solid rgba(0, 0, 0, 0.2)",
};

const CheckoutButtonStyle: CSSProperties = {
  width: 182,
  height: 44,
  backgroundColor: "#000",
  fontSize: "14px",
  fontWeight: 400,
};

const ProductDetailGridStyle: CSSProperties = {
  backgroundColor: "#fff",
  padding: "10px",
};

const ProductDetailImageStyle: CSSProperties = {
  background: "#f9f9f9",
  padding: "24px",
};

const ProductDetailColorSwatchStyle = (
  productState: {
    quantity: number;
    selectedColor: string | null;
    selectedSize: string | null;
  },
  color: string
): CSSProperties => ({
  cursor: "pointer",
  border: productState.selectedColor === color ? "2px solid #000" : "none",
});

const ProductDetailSelectStyle: CSSProperties = {
  borderRadius: "10px !important",
  padding: "10px 14px",
  height: "50px",
};

const ProductDetailNumberInputStyle: CSSProperties = {
  borderRadius: "6px",
  padding: "10px 14px",
};

const ShopBoxStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  backgroundColor: "#fff",
  color: "#000",
};

const ShopTitleTextStyle: CSSProperties = {
  flexWrap: "wrap",
  fontSize: "42px",
  textAlign: "center",
  marginTop: "20px",
};

const ShopTextInputStyle = {
  alignSelf: "flex-end",
  paddingRight: "10px",
  width: "300px",
};

const ShopGlobalCardBox: CSSProperties = {
  margin: "20px",
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  justifyContent: "center",
};

export {
  CheckoutBoxStyle,
  ShopGlobalCardBox,
  CheckoutButtonStyle,
  CheckoutImageStyle,
  CheckoutGridColStyle,
  ShopTextInputStyle,
  ProductDetailImageStyle,
  ProductDetailGridStyle,
  ProductDetailColorSwatchStyle,
  ShopTitleTextStyle,
  ProductDetailSelectStyle,
  ShopBoxStyle,
  ProductDetailNumberInputStyle,
};

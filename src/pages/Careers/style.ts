import { CSSProperties } from "react";
import backgroundImage from "../../assets/images/Careers/SpaceX_Careers_BG.png";

const CareersHeaderStyle: CSSProperties = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: "20px",
  marginTop: "-120px",
};

const CareersCarouselStyle = (image: string): CSSProperties => ({
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100%",
  position: "relative",
});

const CareersCarouselContainerStyle: CSSProperties = {
  position: "absolute",
  top: "50%",
  right: "-10%",
  transform: "translate(-50%, -50%)",
  color: "#fff",
  textAlign: "left",
  maxWidth: "600px",
};

const CareersSpacXStyle: any = {
  backgroundColor: "#000",
  color: "#fff",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  justifyContent: "center",
  padding: "80px 300px",

  "@media (max-width: 992px)": {
    padding: "80px 100px",
  },

  "@media (max-width: 600px)": {
    padding: "80px 20px",
  },
};

const CareersSpacXActionIconStyle: any = {
  border: "1px solid #fff",
  padding: "12px 30px",
  fontWeight: 600,
  fontSize: "14px",
  textTransform: "uppercase",
  letterSpacing: "1px",
  transition: "background 0.3s, color 0.3s",
  alignSelf: "center",
  color: "#fff",
  width: "200px",
  "&:hover": {
    backgroundColor: "#fff",
    color: "#000",
  },
};

const ElonBoxStyle = (elonBgImg: string): any => ({
  backgroundImage: `url(${elonBgImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  position: "relative",
  padding: "0 300px 80px 300px",
  color: "#fff",

  "@media (max-width: 992px)": {
    padding: "0 100px 80px 100px",
  },

  "@media (max-width: 600px)": {
    padding: "0 40px 80px 40px",
  },
});

const ElonButtonBoxStyle: CSSProperties = {
  height: "70px",
  width: "2px",
  backgroundColor: "#fff",
  margin: "40px auto 20px auto",
};

const ElonBUttonStyle: any = {
  border: "1px solid #fff",
  color: "#fff",
  textTransform: "uppercase",
  fontSize: "12px",
  letterSpacing: "1px",
  padding: "10px 24px",
  fontWeight: 600,
  "&:hover": {
    backgroundColor: "#fff",
    color: "#000",
  },
};

export {
  CareersHeaderStyle,
  CareersCarouselStyle,
  ElonBoxStyle,
  ElonBUttonStyle,
  ElonButtonBoxStyle,
  CareersSpacXActionIconStyle,
  CareersSpacXStyle,
  CareersCarouselContainerStyle,
};

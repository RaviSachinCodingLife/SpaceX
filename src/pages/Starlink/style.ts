import { CSSProperties } from "react";
import starLinkBgImg from "../../assets/images/StarLink/1.webp";
import starLinkBgImg5 from "../../assets/images/StarLink/6.webp";

const StarLinkSection1BoxStyle: CSSProperties = {
  backgroundImage: `url(${starLinkBgImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
  position: "relative",
  color: "#fff",
  paddingTop: "60px",
  marginTop: "-60px",
};

const StarLinkButtonStyle: CSSProperties = {
  color: "#fff",
};

const Section1ContainerStyle: CSSProperties = {
  height: "100%",
  position: "relative",
  zIndex: 2,
};

const Section1CenterStyle: CSSProperties = { minHeight: "100vh" };
const Section1TitleStyle: CSSProperties = { fontSize: "75px" };
const Section1ButtonStyle = {
  display: "inline-flex",
  alignItems: "center",
  color: "#fff",
  fontSize: "16px",
  "&:hover": {
    color: "#000",
  },
};
const Section1PaperStyle: CSSProperties = {
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  borderRadius: "8px",
  border: "1px solid hsla(0, 0%, 100%, 0.12)",
  WebkitBackdropFilter: "blur(4px)",
  backdropFilter: "blur(4px)",
  padding: "24px",
  width: "100%",
  minHeight: "200px",
};
const Section2ImageStyle: CSSProperties = {
  borderRadius: "16px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
  width: "100%",
  height: "auto",
};

const Section2BoxStyle: CSSProperties = {
  position: "absolute",
  top: "30%",
  left: "5%",
  transform: "translateY(-50%)",
  color: "#fff",
  maxWidth: "550px",
  padding: "20px",
};

const Section3BoxStyle: CSSProperties = {
  position: "relative",
  cursor: "pointer",
};

const Section3ImageStyle: CSSProperties = {
  width: "100%",
  borderRadius: "16px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.6)",
  objectFit: "cover",
};

const Section3ChildBoxStyle: CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  background: "rgba(255, 255, 255, 0.1)",
  border: "2px solid #fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
};

const Section3SpanStyle: CSSProperties = {
  width: 0,
  height: 0,
  borderLeft: "20px solid #fff",
  borderTop: "12px solid transparent",
  borderBottom: "12px solid transparent",
  marginLeft: "5px",
};

const Section3GridColStyle: CSSProperties = {
  flex: 1,
  position: "relative",
  cursor: "pointer",
  backgroundImage: `url(${starLinkBgImg5})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  borderRadius: "16px",
  padding: "50px",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100vh",
};

const Section3OlStyle: CSSProperties = {
  marginTop: "8px",
  paddingLeft: "50px",
};

const Section4BoxStyle: CSSProperties = {
  flex: 1,
  position: "relative",
  cursor: "pointer",
  backgroundImage: `url(${starLinkBgImg5})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  borderRadius: "16px",
  padding: "50px",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const Section5BoxStyle: CSSProperties = {
  position: "relative",
  borderRadius: "16px",
  overflow: "hidden",
  boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
  width: "100vw",
};

const Section5ImageStyle: CSSProperties = {
  width: "100%",
  height: "auto",
  objectFit: "cover",
  display: "block",
};

const Section5ChildBoxStyle: CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "60px",
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  background:
    "linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0) 80%)",
};

const Section5ButtonStyle: CSSProperties = {
  maxWidth: "200px",
  fontSize: "18px",
  color: "#fff",
};

const VideoSectionBoxStyle: CSSProperties = {
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
};

const VideoSectionVideoStyle: CSSProperties = {
  width: "100%",
  borderRadius: "12px",
  height: "100%",
  maxHeight: "480px",
};
const VideoSectionChildBoxStyle = (
  selectedVideo: {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    videoSrc: string;
  },
  video: {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    videoSrc: string;
  }
): CSSProperties => ({
  display: "flex",
  gap: "16px",
  padding: "12px",
  borderRadius: "8px",
  backgroundColor: video.id === selectedVideo.id ? "#333" : "transparent",
  cursor: "pointer",
});

const VideoSectionThumbnail: CSSProperties = { flexShrink: 0 };

const GlobalDialogStyle: CSSProperties = { height: "85vh", width: "100vw" };

const GlobalDialogVideoStyle: CSSProperties = {
  width: "100%",
  height: "100%",
  paddingTop: "20px",
};

export {
  StarLinkSection1BoxStyle,
  VideoSectionBoxStyle,
  VideoSectionChildBoxStyle,
  GlobalDialogVideoStyle,
  GlobalDialogStyle,
  VideoSectionThumbnail,
  VideoSectionVideoStyle,
  Section1ContainerStyle,
  Section5ButtonStyle,
  Section5ChildBoxStyle,
  Section1CenterStyle,
  Section1TitleStyle,
  Section1ButtonStyle,
  Section1PaperStyle,
  Section5ImageStyle,
  Section2ImageStyle,
  Section5BoxStyle,
  Section3ImageStyle,
  Section4BoxStyle,
  Section2BoxStyle,
  Section3BoxStyle,
  Section3ChildBoxStyle,
  Section3GridColStyle,
  Section3SpanStyle,
  Section3OlStyle,
  StarLinkButtonStyle,
};

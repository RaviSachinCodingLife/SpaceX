import { CSSProperties } from "react";

interface GlobalCardProps {
  image: string;
  title: string;
  price: string;
  link: string;
}

interface LaunchCardProps {
  id: string;
  name: string;
  date: string;
  image: string;
  link: string;
  style?: CSSProperties;
  imageFit?: "cover" | "contain" | "fill" | "scale-down" | "none";
}

export type { GlobalCardProps, LaunchCardProps };

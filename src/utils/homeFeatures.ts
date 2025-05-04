import img from "../assets/images/1.jpg";
import img1 from "../assets/images/2.jpg";
import img2 from "../assets/images/3.jpg";
import img3 from "../assets/images/4.jpg";
import video from "../assets/video/SpaceX Starlink 253 launch and Falcon 9 first stage landing, 2 May 2025.mp4";

export interface HomeFeature {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  link: string;
  date: string;
  video: string;
  desc: string;
  subDesc: string;
}

export const homeFeatures: HomeFeature[] = [
  {
    id: "1",
    title: "STARLINK MISSION",
    subtitle: "UPCOMING LAUNCH",
    date: "May 12, 2024",
    desc: "On Thursday, May 1 at 9:51 p.m. ET, Falcon 9 launched 28 Starlink satellites to low-Earth orbit from Space Launch Complex 40 (SLC-40) at Cape Canaveral Space Force Station in Florida.",
    subDesc:
      "This was the 18th flight for the first stage booster supporting this mission, which previously launched Ax-2, Euclid, Ax-3, CRS-30, SES ASTRA 1P, NG-21, and now 12 Starlink missions.",
    video: video,
    image: img,
    link: "/home/STARLINK MISSION",
  },
  {
    id: "2",
    title: "STARLINK MISSION",
    subtitle: "RECENT LAUNCH",
    date: "Feb 1, 2022",
    desc: "On Thursday, May 1 at 9:51 p.m. ET, Falcon 9 launched 28 Starlink satellites to low-Earth orbit from Space Launch Complex 40 (SLC-40) at Cape Canaveral Space Force Station in Florida.",
    subDesc:
      "This was the 18th flight for the first stage booster supporting this mission, which previously launched Ax-2, Euclid, Ax-3, CRS-30, SES ASTRA 1P, NG-21, and now 12 Starlink missions.",
    video: video,
    image: img1,
    link: "/home/STARLINK MISSION",
  },
  {
    id: "3",
    title: "ADVANCINGN HUMAN SPACEFLIGHT",
    subtitle: "",
    date: "April 6, 2023",
    desc: "On Thursday, May 1 at 9:51 p.m. ET, Falcon 9 launched 28 Starlink satellites to low-Earth orbit from Space Launch Complex 40 (SLC-40) at Cape Canaveral Space Force Station in Florida.",
    subDesc:
      "This was the 18th flight for the first stage booster supporting this mission, which previously launched Ax-2, Euclid, Ax-3, CRS-30, SES ASTRA 1P, NG-21, and now 12 Starlink missions.",
    video: video,
    image: img2,
    link: "/home/ADVANCINGN HUMAN SPACEFLIGHT",
  },
  {
    id: "4",
    title: "TO MAKE LIFE MULTIPLANETARY",
    subtitle: "",
    date: "May 7, 2024",
    desc: "On Thursday, May 1 at 9:51 p.m. ET, Falcon 9 launched 28 Starlink satellites to low-Earth orbit from Space Launch Complex 40 (SLC-40) at Cape Canaveral Space Force Station in Florida.",
    subDesc:
      "This was the 18th flight for the first stage booster supporting this mission, which previously launched Ax-2, Euclid, Ax-3, CRS-30, SES ASTRA 1P, NG-21, and now 12 Starlink missions.",
    video: video,
    image: img3,
    link: "/home/TO MAKE LIFE MULTIPLANETARY",
  },
];

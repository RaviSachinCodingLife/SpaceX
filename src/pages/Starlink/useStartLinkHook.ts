import { useState } from "react";
import { videoList } from "../../utils/startLinkVideoList";

const useStartLink = () => {
  const [opened, setOpened] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(videoList[0]);

  const planCards = [
    {
      title: "RESIDENTIAL",
      description: "Connect at home",
    },
    {
      title: "ROAM",
      description: "Connect while traveling anywhere in over 100 markets",
    },
  ];

  const downloadButtons = [
    { label: "DOWNLOAD FOR ANDROID" },
    { label: "DOWNLOAD FOR IOS" },
  ];

  return { opened, setOpened,planCards,downloadButtons, selectedVideo, setSelectedVideo };
};

export { useStartLink };

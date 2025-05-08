import { useParams, useNavigate } from "react-router-dom";
import { useAstronaut } from "../../services/useAstronaut";
import { useAstronautDetails } from "../../services/useAstronautDetails";

const useAstronautHook = () => {
  const { data, isLoading } = useAstronaut();
  const {
    data: imagesData,
    isLoading: isImagesLoading,
    error: imagesError,
  } = useAstronaut("astronaut");

  const isFetching = isLoading || isImagesLoading;

  const breakpoints = [
    { maxWidth: "lg", cols: 3 },
    { maxWidth: "md", cols: 2 },
    { maxWidth: "sm", cols: 1 },
  ];

  return {
    data,
    imagesData,
    isFetching,
    breakpoints,
  };
};

const useAstronautDetailhook = () => {
  const { id } = useParams();
  const { data, isLoading } = useAstronautDetails(id);
  const navigate = useNavigate();
  const infoItems = [
    {
      label: data?.description || "No Description",
      prefix: "",
      size: "xl",
    },
    {
      label: `Likes: ${data?.likes ?? 0}`,
      prefix: "",
      size: "md",
    },
  ];
  return { data, isLoading, navigate, infoItems };
};

export { useAstronautHook, useAstronautDetailhook };

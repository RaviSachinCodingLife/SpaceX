import { useNavigate, useParams } from "react-router-dom";
import { useHomeFeatures } from "../../services/useHomeFeatures";
import { useHomeDetail } from "../../services/useHomeDetail";

const useHome = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useHomeFeatures();

  const getButtonLabel = (id: string) => {
    return ["3", "4"].includes(id) ? "LEARN MORE" : "WATCH";
  };
  return { navigate, data, isLoading, getButtonLabel };
};

const useHomeDetailHook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading } = useHomeDetail(id as string);

  const gridContent = [
    { key: "desc", span: 6, text: data?.desc },
    { key: "subDesc", span: 6, text: data?.subDesc },
  ];

  return { navigate, data, isLoading, gridContent };
};

export { useHome, useHomeDetailHook };

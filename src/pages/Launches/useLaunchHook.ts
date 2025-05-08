import { useState, useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLaunchDetail } from "../../services/useLaunchDetail";
import { useLaunches } from "../../services/useLaunches";

const LAUNCH_STATS = [
  { number: 480, label: "COMPLETED MISSIONS" },
  { number: 441, label: "TOTAL LANDINGS" },
  { number: 409, label: "TOTAL REFLIGHTS" },
];

const useLaunchList = () => {
  const { data, isLoading } = useLaunches();

  return { data, isLoading, stats: LAUNCH_STATS };
};

const useLaunchListDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading } = useLaunchDetail(id ?? "");

  const [wikiExtract, setWikiExtract] = useState("");

  const pageTitle = useMemo(() => {
    const wikiUrl = data?.links?.wikipedia;
    return wikiUrl?.split("/wiki/")[1] ?? "";
  }, [data]);

  const desc = useMemo(
    () => wikiExtract.split(" ").slice(0, 50).join(" "),
    [wikiExtract]
  );
  const desc1 = useMemo(
    () => wikiExtract.split(" ").slice(50, 100).join(" "),
    [wikiExtract]
  );

  useEffect(() => {
    let isMounted = true;

    const fetchWikipediaExtract = async () => {
      if (!pageTitle) return;

      try {
        const response = await fetch(
          `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&titles=${encodeURIComponent(
            pageTitle
          )}&prop=extracts&explaintext=true`
        );
        const result = await response.json();
        const pages = result?.query?.pages;
        const page = pages[Object.keys(pages)[0]];

        if (isMounted) setWikiExtract(page.extract || "");
      } catch (error) {
        console.error("Failed to fetch Wikipedia content", error);
      }
    };

    fetchWikipediaExtract();
    return () => {
      isMounted = false;
    };
  }, [pageTitle]);

  const descBlocks = [
    desc || data?.details || "",
    desc1 || data?.details || "",
  ];

  return { navigate, data, isLoading, descBlocks };
};

export { useLaunchList, useLaunchListDetail };

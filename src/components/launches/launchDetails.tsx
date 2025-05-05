import { useNavigate, useParams } from 'react-router-dom';
import { useLaunchDetail } from '../../hooks/useLaunchDetail';
import { Container, Title, Text, Loader, Box, Grid } from '@mantine/core';
import { ArrowIcon } from '../../assets/svg/SvgIcon';
import { useEffect, useState } from 'react';

const LaunchDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useLaunchDetail(id!);

  const [wikiExtract, setWikiExtract] = useState('');

  const wikiUrl = data?.links?.wikipedia;
  const pageTitle = wikiUrl?.split('/wiki/')[1];

  useEffect(() => {
    if (!pageTitle) return;

    const fetchWikipediaExtract = async () => {
      try {
        const response = await fetch(
          `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&titles=${encodeURIComponent(
            pageTitle
          )}&prop=extracts&explaintext=true`
        );
        const result = await response.json();
        const pages = result.query.pages;
        const page = pages[Object.keys(pages)[0]];
        setWikiExtract(page.extract);
      } catch (error) {
        console.error('Failed to fetch Wikipedia content', error);
      }
    };

    fetchWikipediaExtract();
  }, [pageTitle]);

  const words = wikiExtract.split(' ');
  const desc = words.slice(0, 50).join(' ');
  const desc1 = words.slice(50, 100).join(' ');

  return (
    <Box
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        paddingTop: "60px",
        marginTop: '-60px',
      }}
    >
      <Box
        px={"xl"}
        py={"md"}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          cursor: "pointer",
        }}
        onClick={() => navigate("/launches")}
      >
        <ArrowIcon />
        <Text
          size="sm"
          c="gray.5"
          sx={{
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "rotateZ(2deg) translateX(3px)",
            },
          }}
        >
          BACK TO LAUNCHES
        </Text>
      </Box>

      {isLoading ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'calc(100vh - 60px)',
          }}
        >
          <Loader size={40} />
        </Box>
      ) : (
        <Box>
          <iframe
            width="100%"
            height="700px"
            src={`https://www.youtube.com/embed/${data?.links?.youtube_id}`}
            title="Launch Webcast"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ padding: "40px", paddingTop: "10px", border: 0 }}
          />

          <Container
            size="xl"
            px="md"
            py="xl"
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <Text mt="md" c="gray" size="sm" fz={"20px"}>
              {new Date(data?.date_utc).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </Text>
            <Title order={3} mt={5} fz={"32px"}>
              {data?.name}
            </Title>

            <Grid mt={"xl"}>
              <Grid.Col span={6}>
                <Text size="xl" c="gray.3" style={{ fontSize: "16px", textTransform: "capitalize" }}>
                  {desc || data?.details}.
                </Text>
              </Grid.Col>
              <Grid.Col span={6}>
                <Text size="md" c="gray.3" style={{ fontSize: "16px", textTransform: "capitalize" }}>
                  {desc1 || data?.details}.
                </Text>
              </Grid.Col>
            </Grid>
          </Container>
        </Box>
      )}
    </Box>
  );
};

export default LaunchDetail;

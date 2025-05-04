import { Box, Text, Button, Image, Overlay } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useHomeFeatures } from "../../hooks/useHomeFeatures";
import { HomeFeature } from "../../utils/homeFeatures";
import { Fragment } from "react";

const Home = () => {
  const { data, isLoading } = useHomeFeatures();
  const navigate = useNavigate();

  console.log({ data });


  return (
    <Fragment>
      {data?.map((feature: HomeFeature) => (
        <Box
          key={feature.id}
          pos="relative"
          h="100vh"
          style={{ marginTop: "-60px" }}
        >
          <Image
            src={feature.image}
            alt={feature.title}
            height="100vh"
            width="100%"
            fit="cover"
          />

          <Overlay gradient="linear-gradient(180deg, rgba(0,0,0,0.5) 0%, transparent 50%)" zIndex={1} />
          <Box display={"flex"} pos="absolute" top="30%" left="5%" c="white" style={{ flexDirection: "column", gap: 2, zIndex: 2, }}>
            <Text size="md" style={{ fontSize: "20px" }}>{feature.subtitle}</Text>
            <Text size="lg" fw={900} style={{ width: "500px", flexWrap: "wrap", fontSize: "42px" }}>
              {feature.title}
            </Text>
            <Button
              variant="outline"
              color="gray"
              loading={isLoading}
              loaderProps={{ type: 'dots' }}
              style={{ width: "169px", height: "52px" }}
              onClick={() => navigate(feature.link)}
            >
              {feature.id === "3" || feature.id === "4" ? "LEARN MORE" : "WATCH"}
            </Button>
          </Box>
        </Box>
      ))
      }
    </Fragment >
  );
};

export default Home;

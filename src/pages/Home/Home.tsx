import { Box, Text, Button, Image, Overlay } from "@mantine/core";
import { Fragment } from "react";
import { HomeFeature } from "../../utils/type";
import * as style from "./style";
import { useHome } from "./useHomeHook";

const Home = () => {
  const { navigate, data, isLoading, getButtonLabel } = useHome();

  const renderFeatureSection = (feature: HomeFeature) => (
    <Box key={feature.id} pos="relative" h="100vh" mt="-60px">
      <Image
        src={feature.image}
        alt={feature.title}
        height="100vh"
        width="100%"
        fit="cover"
      />
      <Overlay
        gradient="linear-gradient(180deg, rgba(0,0,0,0.5) 0%, transparent 50%)"
        zIndex={1}
      />
      <Box pos="absolute" top="30%" left="5%" c="white" style={style.HomeBoxStyle}>
        <Text size="md" fz="20px">
          {feature.subtitle}
        </Text>
        <Text size="lg" fw={900} style={style.HomeTitleTextStyle}>
          {feature.title}
        </Text>
        <Button
          variant="outline"
          color="gray"
          loading={isLoading}
          loaderProps={{ type: "dots" }}
          style={style.HomeButtonStyle}
          onClick={() => navigate(feature.link)}
        >
          {getButtonLabel(feature.id)}
        </Button>
      </Box>
    </Box>
  );

  return <Fragment>{data?.map(renderFeatureSection)}</Fragment>;
};

export default Home;

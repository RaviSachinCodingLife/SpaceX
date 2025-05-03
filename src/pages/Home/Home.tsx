import { Box, Text, Button, Image, Overlay } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useHomeFeatures } from "../../hooks/useHomeFeatures";

const Home = () => {
  const { data, isLoading, error } = useHomeFeatures();
  const navigate = useNavigate();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading features</div>;

  return (
    <Box>
      {data.map((feature: any) => (
        <Box
          key={feature.id}
          pos="relative"
          h="100vh"
          style={{ cursor: "pointer" }}
          onClick={() => navigate(feature.link)}
        >
          <Image
            src={feature.image}
            alt={feature.title}
            height="100%"
            width="100%"
            fit="cover"
          />
          <Overlay gradient="linear-gradient(180deg, rgba(0,0,0,0.5) 0%, transparent 50%)" />
          <Box pos="absolute" top="30%" left="5%" c="white">
            <Text size="sm">{feature.subtitle}</Text>
            <Text size="xl" fw={900}>
              {feature.title}
            </Text>
            <Button
              variant="outline"
              mt="md"
              color="gray"
              onClick={(e) => {
                e.stopPropagation();
                navigate(feature.link);
              }}
            >
              WATCH
            </Button>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Home;

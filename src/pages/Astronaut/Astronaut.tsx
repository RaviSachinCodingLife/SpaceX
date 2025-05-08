import { Box, SimpleGrid, Text, Skeleton } from "@mantine/core";
import LaunchCard from "../../components/card/LaunchCard";
import { getShortDescription } from "../../utils/globalFunctions";
import * as style from "./style";
import { useAstronautHook } from "./useAstronautHook";
import SkeletonCardGrid from "./util";

const Astronaut = () => {
  const { data, imagesData, isFetching, breakpoints } = useAstronautHook();

  const renderCards = () =>
    data?.results.map((person: any, index: number) => {
      const image =
        imagesData?.results?.[index]?.urls?.regular ||
        `https://placehold.co/250x350?text=${encodeURIComponent(person.name)}`;

      return (
        <LaunchCard
          key={person.id || index}
          id={person.id}
          name={getShortDescription(person.alt_description, 2)}
          date={getShortDescription(person.description, 10)}
          image={image}
          imageFit="cover"
          style={style.LaunchCardStyle}
          link={`/astronaut/${person.id}`}
        />
      );
    });

  return (
    <Box style={style.BoxStyle}>
      <Text align="center" size="xl" weight={700} mb="xl">
        Astronauts in Star Wars
      </Text>

      <SimpleGrid cols={3} spacing="15px" breakpoints={breakpoints}>
        {isFetching ? (
          <SkeletonCardGrid count={6} cardHeight={350} />
        ) : (
          renderCards()
        )}
      </SimpleGrid>
    </Box>
  );
};

export default Astronaut;

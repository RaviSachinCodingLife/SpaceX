import { Text, Title, Box, SimpleGrid } from '@mantine/core';
import LaunchCard from '../../components/card/LaunchCard';
import * as style from './style';
import SkeletonCardGrid from '../Astronaut/util';
import { formatDate } from '../../utils/globalFunctions';
import { useLaunchList } from './useLaunchHook';

const LaunchList = () => {

  const { data, isLoading, stats } = useLaunchList()

  return (
    <Box style={style.LaunchBoxStyle}>
      <Box style={style.LaunchBgBoxStyle}>
        <Title style={style.LaunchTitleStyle}>LAUNCHES</Title>
      </Box>

      <Box sx={style.LaunchStatsStyle}>
        {stats.map((stat) => (
          <Box key={stat.label} ta="center">
            <Title order={1} fz="140px" fw={400}>
              {stat.number}
            </Title>
            <Text size="sm" mt="10px" fz="22px">
              {stat.label}
            </Text>
          </Box>
        ))}
      </Box>

      <Box py={60} px={40}>
        <SimpleGrid cols={2} spacing="xl" breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
          {isLoading ? (
            <SkeletonCardGrid count={4} cardHeight={350} />
          ) : (
            data?.map((launch: any) => (
              <LaunchCard
                key={launch.id}
                id={launch.id}
                name={launch.name}
                date={formatDate(launch.date_utc)}
                image={launch.links?.patch?.large}
                imageFit="contain"
                link={`/launches/${launch.id}`}
                style={style.LaunchLaunchCardStyle}
              />
            ))
          )}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default LaunchList;

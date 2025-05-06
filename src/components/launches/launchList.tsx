import { useLaunches } from '../../hooks/useLaunches';
import { Text, Title, Box, SimpleGrid, Skeleton, Button, Image, Group } from '@mantine/core';
import launchImg from "../../assets/images/launches_header_desktop.jpg";
import GlobalCard from '../card/Card';
import LaunchCard from '../card/LaunchCard';

const LaunchList = () => {
  const { data, isLoading } = useLaunches();

  console.log({ data });


  return (
    <Box
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
      }}
    >
      <Box
        style={{
          backgroundImage: `url(${launchImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: "60px",
          marginTop: '-60px'
        }}
      >
        <Title
          style={{
            color: 'white',
            fontSize: '64px',
            fontWeight: 'bold',
            textAlign: 'center',
            zIndex: 1,
          }}
        >
          LAUNCHES
        </Title>
      </Box>

      {/* Stats Section */}
      <Box
        style={{
          backgroundColor: 'black',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '80px 0',
          gap: '100px',
        }}
      >
        {[
          { number: 480, label: 'COMPLETED MISSIONS' },
          { number: 441, label: 'TOTAL LANDINGS' },
          { number: 409, label: 'TOTAL REFLIGHTS' },
        ].map((stat) => (
          <Box key={stat.label} style={{ textAlign: 'center' }}>
            <Title style={{ fontSize: '140px', fontWeight: 400 }}>{stat.number}</Title>
            <Text style={{ marginTop: '10px', fontSize: '22px', letterSpacing: '1px' }}>
              {stat.label}
            </Text>
          </Box>
        ))}
      </Box>

      {/* Launch Cards */}
      <Box py={60} px={40}>
        <SimpleGrid cols={2} spacing="xl" breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
          {isLoading
            ? Array.from({ length: 2 }).map((_, index) => (
              <Box key={index}>
                <Skeleton height={350} radius="md" />
                <Skeleton height={20} mt="md" width="40%" />
                <Skeleton height={30} mt="sm" width="70%" />
                <Skeleton height={36} mt="md" width={120} />
              </Box>
            ))
            : data?.map((launch: any) => (
              <LaunchCard
                key={launch.id}
                id={launch.id}
                name={launch.name}
                date={new Date(launch?.date_utc).toLocaleDateString(undefined, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
                image={launch.links?.patch?.large}
                imageFit='contain'
                link={`/launches/${launch.id}`}
                style={{
                  boxShadow: '0 4px 20px rgba(128, 128, 128, 0.3)',
                  padding: "50px"
                }}
              />
            ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default LaunchList;

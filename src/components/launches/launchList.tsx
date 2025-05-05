import { useLaunches } from '../../hooks/useLaunches';
import { Text, Title, Box, SimpleGrid, Skeleton, Button, Image, Group } from '@mantine/core';
import launchImg from "../../assets/images/launches_header_desktop.jpg";
import GlobalCard from '../card/Card';

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
            : data?.map((launch: any) => {
              return (
                <Box key={launch.id} style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "50px" }}>
                  <Image
                    src={launch.links?.patch?.large}
                    alt={launch.name}
                    height={400}
                    width="100%"
                    radius="md"
                    fit="contain"
                    style={{ objectPosition: 'center', boxShadow: '0 4px 20px rgba(128, 128, 128, 0.3)', padding: "50px" }}
                  />
                  <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "5px" }}>
                    <Text mt="md" c="gray" size="sm" fz={"20px"}>
                      {new Date(launch?.date_utc).toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </Text>
                    <Title order={3} mt={5} fz={"32px"}>
                      {launch.name}
                    </Title>
                    <Button
                      component="a"
                      href={`/launches/${launch.id}`}
                      mt="md"
                      variant="outline"
                      color="gray"
                      radius="md"
                      size="sm"

                      style={{ color: "#fff", alignSelf: "flex-start", width: "140px", height: "50px" }}
                    >
                      LEARN MORE
                    </Button>
                  </Box>
                </Box>
              );
            })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default LaunchList;

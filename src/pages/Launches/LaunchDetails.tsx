import { Container, Title, Text, Loader, Box, Grid } from '@mantine/core';
import { ArrowIcon } from '../../assets/svg/SvgIcon';
import * as boxStyle from '../Astronaut/style';
import * as style from './style';
import * as loaderStyle from '../Home/style';
import { formatDate } from '../../utils/globalFunctions';
import { useLaunchListDetail } from './useLaunchHook';

const LaunchDetail = () => {
  const { navigate, data, isLoading, descBlocks } = useLaunchListDetail();

  return (
    <Box style={boxStyle.BoxStyle}>
      <Box
        px="xl"
        py="md"
        style={style.LaunchDetailBoxStyle}
        onClick={() => navigate('/launches')}
      >
        <ArrowIcon />
        <Text size="sm" c="gray.5" style={boxStyle.AstronautBoxTextStyle}>
          BACK TO LAUNCHES
        </Text>
      </Box>

      {isLoading ? (
        <Box style={loaderStyle.HomeDetailLoderStyle}>
          <Loader size={40} />
        </Box>
      ) : (
        <Box>
          {data?.links?.youtube_id && (
            <iframe
              width="100%"
              height="700px"
              src={`https://www.youtube.com/embed/${data.links.youtube_id}`}
              title="Launch Webcast"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={style.LaunchDetailIframeStyle}
            />
          )}

          <Container
            size="xl"
            px="md"
            py="xl"
            style={boxStyle.AstronautContainerStyle}
          >
            <Text mt="md" c="gray" size="sm" fz="20px">
              {formatDate(data?.date_utc)}
            </Text>
            <Title order={3} mt={5} fz="32px">
              {data?.name}
            </Title>

            <Grid mt="xl">
              {descBlocks.map((paragraph, index) => (
                <Grid.Col key={index} span={6}>
                  <Text size="md" c="gray.3" fz="16px" tt="capitalize">
                    {paragraph}.
                  </Text>
                </Grid.Col>
              ))}
            </Grid>
          </Container>
        </Box>
      )}
    </Box>
  );
};

export default LaunchDetail;

import { useParams } from 'react-router-dom';
import { useLaunchDetail } from '../../hooks/useLaunchDetail';
import { Container, Title, Text, Loader } from '@mantine/core';

const LaunchDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useLaunchDetail(id!);


  console.log({ data });

  if (isLoading) return <Loader />;

  return (
    <Container>
      <Title>{data.name}</Title>
      <Text>Date: {new Date(data.date_utc).toLocaleDateString()}</Text>
      <Text>Rocket: {data.rocket.name}</Text>
      <Text>Description: {data.details || 'No details available.'}</Text>
    </Container>
  );
};

export default LaunchDetail;

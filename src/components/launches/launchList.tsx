import { useLaunches } from '../../hooks/useLaunches';
import { Table, Loader, Container, Title } from '@mantine/core';
import { Link } from 'react-router-dom';

const LaunchList = () => {
  const { data, isLoading } = useLaunches();

  console.log({ data });


  if (isLoading) return <Loader />;

  return (
    <Container>
      <Title>SpaceX Launches</Title>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((launch: any) => (
            <tr key={launch.id}>
              <td>
                <Link to={`/launches/${launch.id}`}>{launch.name}</Link>
              </td>
              <td>{new Date(launch.date_utc).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default LaunchList;

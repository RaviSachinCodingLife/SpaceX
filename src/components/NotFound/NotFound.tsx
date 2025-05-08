import { Container, Title, Text, Button, Group, Stack, Box } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { LeftIcon } from '../../assets/svg/SvgIcon';
import * as style from "./style"

export default function NotFound404() {
    const navigate = useNavigate();

    return (
        <Box
            style={style.NotFoundBox}
        >
            <Box
                style={style.NotFoundChildBox}
            />

            <Container
                size="md"
                style={style.NotFoundContainer}
            >
                <Stack align="center" spacing="lg">
                    <Title order={1} size={120} fw={900} c="white" ta="center">
                        404
                    </Title>
                    <Text size="xl" ta="center" c="gray.4">
                        The page you're looking for doesn't exist.
                        <br />
                        Maybe it's lost in space.
                    </Text>
                    <Group mt="md">
                        <Button
                            variant="white"
                            size="md"
                            leftIcon={<LeftIcon />}
                            onClick={() => navigate('/')}
                        >
                            Back to Home
                        </Button>
                    </Group>
                </Stack>
            </Container>
        </Box>
    );
}

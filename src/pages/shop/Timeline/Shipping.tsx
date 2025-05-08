import {
    Box,
    Paper,
    Text,
    Title,
    Button,
    Divider,
    Group,
    Stack,
} from '@mantine/core';
import { FormData } from '../type';
import { usePayment } from './useTimelineHook';

const Shipping = ({ form, username }: { form: FormData, username: string }) => {
    const { infoSections, shippingMethod } = usePayment(form, username);

    return (
        <Stack spacing="lg">
            <Paper withBorder radius="md" p="md">
                {infoSections.map(({ label, value, valueStyle }, index) => (
                    <Box key={label}>
                        {index !== 0 && <Divider mb="xs" />}
                        <Group position="apart" mb="xs">
                            <Text weight={500} c="#000">{label}</Text>
                            <Button variant="subtle" size="xs" compact>
                                Change
                            </Button>
                        </Group>
                        <Text size="sm" mb="md" color="dimmed" style={valueStyle}>
                            {value}
                        </Text>
                    </Box>
                ))}
            </Paper>

            <Box>
                <Title order={4} mb="sm" c="#000">
                    Shipping method
                </Title>
                <Group position="apart" mt="xs">
                    <Text size="sm" color="grey">
                        {shippingMethod.name}
                    </Text>
                    <Text size="sm" color="#000" fw={600}>
                        {shippingMethod.price}
                    </Text>
                </Group>
            </Box>
        </Stack>
    );
};

export default Shipping;

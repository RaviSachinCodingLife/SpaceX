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
import { FormData } from '../Checkout';

const Shipping = ({ form, username }: { form: FormData, username: string }) => {
    const contactEmail = username;
    const shippingAddress = `${form.address}, ${form.city}, ${form.state}, ${form.country}, ${form.zip}`;
    const shippingMethod = {
        name: 'Shipping - FedEx International Economy',
        price: '$34.02',
    };

    console.log({ form, username });


    return (
        <Stack spacing="lg">
            <Paper withBorder radius="md" p="md">
                <Group position="apart" mb="xs">
                    <Text weight={500}>Contact</Text>
                    <Button variant="subtle" size="xs" compact>
                        Change
                    </Button>
                </Group>
                <Text size="sm" mb="md" color="dimmed" sx={{ textTransform: "capitalize" }}>
                    {contactEmail}
                </Text>

                <Divider />

                <Group position="apart" mt="xs">
                    <Text weight={500}>Ship to</Text>
                    <Button variant="subtle" size="xs" compact>
                        Change
                    </Button>
                </Group>
                <Text size="sm" mt="xs" color="dimmed">
                    {shippingAddress}
                </Text>
            </Paper>


            <Box>
                <Title order={4} mb="sm">
                    Shipping method
                </Title>

                <Paper
                    withBorder
                    p="md"
                    radius="md"
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                    <Text>{shippingMethod.name}</Text>
                    <Text weight={600}>{shippingMethod.price}</Text>
                </Paper>
            </Box>
        </Stack>
    );
};

export default Shipping;

import {
    Image,
    Text,
    Group,
    Stack,
    Divider,
    Title,
    Button,
    Box,
    ActionIcon,
    Flex,
    Grid,
} from '@mantine/core';
import { useCartStore } from '../../../store/useCartStore';
import { Fragment } from 'react';
import { MinusIcon, PlusIcon, TrashIcon } from '../../../assets/svg/SvgIcon';

const Cart = () => {
    const { cart, getTotal, addToCart } = useCartStore();

    const increment = (item: any) => {
        addToCart({ ...item, quantity: 1 });
    };

    const decrement = (item: any) => {
        if (item.quantity > 1) {
            addToCart({ ...item, quantity: -1 });
        }
    };

    const remove = (item: any) => {
        const updatedCart = cart.filter(
            (i) =>
                !(i.id === item.id && i.color === item.color && i.size === item.size)
        );
        useCartStore.setState({ cart: updatedCart });
    };

    return (
        <Box px={50}>
            <Title order={2} ta="center" mb="xl" mt="md" fw={600}>
                CART
            </Title>

            <Grid mt="xl">
                <Grid.Col span={8}>
                    <Title order={4} ta="start" mb="md">
                        Product
                    </Title>
                </Grid.Col>
                <Grid.Col span={2}>
                    <Title order={4} ta="center" mb="md">
                        Quantity
                    </Title>
                </Grid.Col>
                <Grid.Col span={2}>
                    <Title order={4} ta="center" mb="md">
                        Total
                    </Title>
                </Grid.Col>
            </Grid>

            <Divider />

            <Stack spacing="xl" mt={'xl'}>
                {cart.length === 0 ? (
                    <Text c="dimmed" ta="center">
                        Your cart is empty.
                    </Text>
                ) : (
                    <Fragment>
                        {cart.map((item, index) => (
                            <Grid key={index} align="center">
                                <Grid.Col span={8}>
                                    <Group align="center" spacing="lg">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={120}
                                            height={120}
                                            fit="contain"
                                        />
                                        <Box>
                                            <Text size="lg">{item.title}</Text>
                                            <Text size="sm" c="gray" mt="xs">
                                                {item.color?.toUpperCase()} / {item.size?.toUpperCase()}
                                            </Text>
                                            <Text size="sm" mt="xs">
                                                {item.price}
                                            </Text>
                                        </Box>
                                    </Group>
                                </Grid.Col>

                                <Grid.Col span={2} sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>

                                    <Flex align="center" justify="center" gap="xs" sx={{ border: "1px solid grey", width: "80px", height: "40px", borderRadius: "5px" }}>
                                        <ActionIcon variant="transparent" onClick={() => decrement(item)}>
                                            <MinusIcon />
                                        </ActionIcon>
                                        <Text fw={500}>{item.quantity}</Text>
                                        <ActionIcon variant="transparent" onClick={() => increment(item)}>
                                            <PlusIcon />
                                        </ActionIcon>
                                    </Flex>
                                    <Button
                                        variant="subtle"
                                        size="xs"
                                        color="dark"
                                        onClick={() => remove(item)}
                                        leftIcon={<TrashIcon />}
                                    >
                                        Remove
                                    </Button>
                                </Grid.Col>

                                <Grid.Col span={2} ta="center">
                                    <Text size={'sm'} fw={500}>
                                        $
                                        {(
                                            parseFloat(item.price.replace(/[^0-9.]/g, '')) *
                                            item.quantity
                                        ).toFixed(2)}
                                    </Text>
                                </Grid.Col>
                            </Grid>
                        ))}

                        <Divider />

                        <Group position="apart" align="flex-end">
                            <Box ml="auto" sx={{ textAlign: 'right' }}>
                                <Text size="md" fw={500}>
                                    TOTAL:
                                </Text>
                                <Text size="md" fw={500}>
                                    ${getTotal().toFixed(2)}
                                </Text>

                                <Text size="sm" mt="xs">
                                    Shipping & taxes calculated at checkout
                                </Text>
                            </Box>
                        </Group>


                    </Fragment>
                )}
            </Stack>
        </Box>
    );
};

export default Cart;

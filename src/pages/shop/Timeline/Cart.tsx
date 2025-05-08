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
import { Fragment } from 'react';
import { MinusIcon, PlusIcon, TrashIcon } from '../../../assets/svg/SvgIcon';
import * as style from "./style";
import { useCart } from './useTimelineHook';

const Cart = () => {
    const { cartItems, getTotal, increment, decrement, remove } = useCart();

    return (
        <Box px={50} sx={style.CartWrapperStyle}>
            <Title order={2} ta="center" c="#000" mb="xl" mt="md" fw={600}>
                CART
            </Title>

            <Grid mt="xl">
                <Grid.Col span={8} md={6} sm={4}><Title order={4} mb="md" c="#000">Product</Title></Grid.Col>
                <Grid.Col span={2} md={6} sm={4}><Title order={4} ta="center" mb="md" ml={"lg"} c="#000">Quantity</Title></Grid.Col>
                <Grid.Col span={2} md={6} sm={4}><Title order={4} ta="center" mb="md" ml={"lg"} c="#000">Total</Title></Grid.Col>
            </Grid>

            <Divider />

            <Stack spacing="xl" mt="xl">
                {cartItems.length === 0 ? (
                    <Text c="dimmed" ta="center">Your cart is empty.</Text>
                ) : (
                    <Fragment>
                        {cartItems.map((item) => (
                            <Grid key={item.key} align="center">
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
                                            <Text size="lg" c="#000">{item.title}</Text>
                                            <Text size="sm" c="#000" mt="xs">
                                                {item.color?.toUpperCase()} / {item.size?.toUpperCase()}
                                            </Text>
                                            <Text size="sm" mt="xs" c="#000">{item.price}</Text>
                                        </Box>
                                    </Group>
                                </Grid.Col>

                                <Grid.Col span={2} style={style.CartGridStyle}>
                                    <Flex align="center" justify="center" gap="xs" style={style.CartFlexBoxStyle}>
                                        <ActionIcon variant="transparent" onClick={() => decrement(item)}>
                                            <MinusIcon />
                                        </ActionIcon>
                                        <Text fw={500} c="#000">{item.quantity}</Text>
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
                                    <Text size="sm" fw={500} c="#000">${item.totalPrice}</Text>
                                </Grid.Col>
                            </Grid>
                        ))}

                        <Divider />

                        <Group position="apart" align="flex-end">
                            <Box ml="auto" ta="right">
                                <Text size="md" fw={500} c="#000">TOTAL:</Text>
                                <Text size="md" fw={500} c="#000">${getTotal().toFixed(2)}</Text>
                                <Text size="sm" mt="xs" c="#000">
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
